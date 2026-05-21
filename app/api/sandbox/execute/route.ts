import { NextRequest, NextResponse } from 'next/server';
import type { SandboxExecuteResponse } from '@/data/types';

const MAX_COMMAND_LENGTH = 240;
const ALLOWED_PREFIXES = [
  'pwd',
  'ls',
  'cd',
  'mkdir',
  'touch',
  'cat',
  'cp',
  'mv',
  'rm',
  'whoami',
  'id',
  'chmod',
  'chown',
  'groupadd',
  'useradd',
  'usermod',
  'getent',
  'grep',
  'echo',
];

const BLOCKED_SNIPPETS = ['sudo ', ' apt ', 'yum ', 'dnf ', 'pacman ', 'docker ', 'kubectl ', 'curl ', 'wget ', 'ssh '];

function splitCompoundCommand(command: string): string[] {
  return command
    .split('&&')
    .map((part) => part.trim())
    .filter(Boolean);
}

function hasAllowedPrefix(part: string): boolean {
  const head = part.split(/\s+/)[0]?.toLowerCase() ?? '';
  return ALLOWED_PREFIXES.includes(head);
}

function isBlockedBySnippet(command: string): boolean {
  const padded = ` ${command.toLowerCase()} `;
  return BLOCKED_SNIPPETS.some((snippet) => padded.includes(snippet));
}

function simulateSingleCommand(part: string): { stdout: string; stderr: string; exitCode: number } {
  const cmd = part.trim();

  if (cmd.startsWith('#')) {
    return {
      stdout: '',
      stderr: 'Comando commentato: nessuna esecuzione effettuata.',
      exitCode: 0,
    };
  }

  if (cmd === 'pwd') return { stdout: '/sandbox/student', stderr: '', exitCode: 0 };
  if (cmd === 'ls -la') {
    return {
      stdout: 'drwxr-xr-x 2 student student 4096 .\ndrwxr-xr-x 3 root    root    4096 ..\n-rw-r--r-- 1 student student    0 appunti.txt',
      stderr: '',
      exitCode: 0,
    };
  }
  if (cmd === 'whoami') return { stdout: 'student', stderr: '', exitCode: 0 };
  if (cmd === 'id') return { stdout: 'uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)', stderr: '', exitCode: 0 };
  if (cmd === 'whoami && pwd') return { stdout: 'student\n/sandbox/student', stderr: '', exitCode: 0 };
  if (cmd.startsWith('cat /etc/os-release')) return { stdout: 'PRETTY_NAME="Ubuntu 22.04 LTS"', stderr: '', exitCode: 0 };

  if (cmd.startsWith('mkdir ') || cmd.startsWith('touch ') || cmd.startsWith('cp ') || cmd.startsWith('mv ') || cmd.startsWith('chmod ') || cmd.startsWith('chown ') || cmd.startsWith('groupadd ') || cmd.startsWith('useradd ') || cmd.startsWith('usermod ')) {
    return { stdout: '', stderr: '', exitCode: 0 };
  }

  if (cmd.startsWith('rm -i ')) {
    return {
      stdout: '',
      stderr: "rm: remove regular empty file 'comandi.txt'?",
      exitCode: 0,
    };
  }

  if (cmd.startsWith('cat ')) {
    return {
      stdout: '',
      stderr: '',
      exitCode: 0,
    };
  }

  if (cmd.startsWith('getent ')) {
    return {
      stdout: 'developers:x:1001:student',
      stderr: '',
      exitCode: 0,
    };
  }

  if (cmd.startsWith('echo ')) {
    const stdout = cmd.replace(/^echo\s+/, '').replace(/^"|"$/g, '');
    return {
      stdout,
      stderr: '',
      exitCode: 0,
    };
  }

  return {
    stdout: '',
    stderr: `Comando non ancora supportato dalla sandbox beta: ${cmd}`,
    exitCode: 2,
  };
}

export async function POST(req: NextRequest) {
  const startedAt = Date.now();

  try {
    const body = (await req.json()) as { command?: string; chapterSlug?: string; stepGoal?: string };
    const rawCommand = (body.command ?? '').trim();

    if (!rawCommand || rawCommand.length > MAX_COMMAND_LENGTH) {
      return NextResponse.json({ error: 'Comando non valido.' }, { status: 400 });
    }

    if (isBlockedBySnippet(rawCommand)) {
      const blockedResponse: SandboxExecuteResponse = {
        provider: 'mock',
        stdout: '',
        stderr: 'Comando bloccato dalle policy di sicurezza della sandbox beta.',
        exitCode: 126,
        durationMs: Date.now() - startedAt,
        blocked: true,
      };
      return NextResponse.json(blockedResponse, { status: 200 });
    }

    const parts = splitCompoundCommand(rawCommand);
    if (parts.length === 0 || !parts.every(hasAllowedPrefix)) {
      const blockedResponse: SandboxExecuteResponse = {
        provider: 'mock',
        stdout: '',
        stderr: 'Comando non consentito in questa fase. Usa i comandi guidati del laboratorio.',
        exitCode: 126,
        durationMs: Date.now() - startedAt,
        blocked: true,
      };
      return NextResponse.json(blockedResponse, { status: 200 });
    }

    const outputs: string[] = [];
    const errors: string[] = [];
    let exitCode = 0;

    for (const part of parts) {
      const result = simulateSingleCommand(part);
      if (result.stdout) outputs.push(result.stdout);
      if (result.stderr) errors.push(result.stderr);
      if (result.exitCode !== 0) {
        exitCode = result.exitCode;
        break;
      }
    }

    const response: SandboxExecuteResponse = {
      provider: 'mock',
      stdout: outputs.join('\n'),
      stderr: errors.join('\n') || undefined,
      exitCode,
      durationMs: Date.now() - startedAt,
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Errore interno sandbox.' }, { status: 500 });
  }
}
