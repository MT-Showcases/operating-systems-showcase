'use client';

import type { LabBlock as LabBlockType, SandboxExecuteResponse } from '@/data/types';
import TerminalCommand from './TerminalCommand';
import NixButton from './NixButton';
import { useState } from 'react';



function buildStepPrompt(goal: string, command: string, explanation: string): string {
  return `Passo: "${goal}"\nComando: ${command}\n\n${explanation}\n\nPerché si fa così? Quali errori comuni si fanno in questo passaggio e come si verificano i risultati?`;
}

type StepRunState = {
  loading: boolean;
  result?: SandboxExecuteResponse;
  error?: string;
};

function isSandboxExecuteResponse(payload: unknown): payload is SandboxExecuteResponse {
  if (!payload || typeof payload !== 'object') return false;
  const candidate = payload as Partial<SandboxExecuteResponse>;
  return (
    candidate.provider === 'mock' &&
    typeof candidate.stdout === 'string' &&
    typeof candidate.exitCode === 'number' &&
    typeof candidate.durationMs === 'number'
  );
}

export default function LabBlock({ title, intro, steps, glossaryIds = [], chapterSlug }: LabBlockType & { glossaryIds?: string[]; chapterSlug?: string }) {
  const [runStates, setRunStates] = useState<Record<number, StepRunState>>({});

  async function executeStep(index: number, command: string, goal: string) {
    setRunStates((prev) => ({
      ...prev,
      [index]: { loading: true },
    }));

    try {
      const res = await fetch('/api/sandbox/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command, chapterSlug, stepGoal: goal }),
      });

      const data: unknown = await res.json();

      if (!res.ok || (typeof data === 'object' && data !== null && 'error' in data)) {
        const errorData = data as { error?: string };
        setRunStates((prev) => ({
          ...prev,
          [index]: {
            loading: false,
            error: errorData.error || 'Errore durante l\'esecuzione sandbox.',
          },
        }));
        return;
      }

      if (!isSandboxExecuteResponse(data)) {
        setRunStates((prev) => ({
          ...prev,
          [index]: {
            loading: false,
            error: 'Risposta sandbox non valida.',
          },
        }));
        return;
      }

      setRunStates((prev) => ({
        ...prev,
        [index]: {
          loading: false,
          result: data,
        },
      }));
    } catch {
      setRunStates((prev) => ({
        ...prev,
        [index]: {
          loading: false,
          error: 'Sandbox non raggiungibile. Riprova tra qualche secondo.',
        },
      }));
    }
  }

  return (
    <div className="border-2 border-accent-cyan/20 bg-bg-surface/20 overflow-hidden">
      <div className="flex items-center gap-3 border-b border-accent-cyan/20 bg-bg-surface px-4 py-3">
        <span className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">
          Laboratorio guidato
        </span>
        {title && (
          <>
            <span className="text-accent-cyan/30">—</span>
            <span className="terminal-heading text-xs text-text-secondary">{title}</span>
          </>
        )}
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-accent-amber/90">Sandbox beta (simulata)</span>
      </div>

      {intro && (
        <p className="px-5 pt-4 text-sm leading-7 text-text-secondary">{intro}</p>
      )}

      <div className="px-5 py-4 space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex h-7 w-7 items-center justify-center border border-accent-cyan/60 bg-bg-primary terminal-heading text-xs text-accent-cyan">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-accent-cyan/15" />
              )}
            </div>

            <div className="flex-1 min-w-0 pb-2">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-cyan/80">
                  {step.goal}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => executeStep(i, step.command.command, step.goal)}
                    disabled={Boolean(runStates[i]?.loading)}
                    className="rounded-none border border-accent-green/40 bg-accent-green/10 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-accent-green disabled:opacity-60"
                  >
                    {runStates[i]?.loading ? 'Eseguo...' : 'Esegui sandbox'}
                  </button>
                  <NixButton
                    size="xs"
                    prompt={buildStepPrompt(step.goal, step.command.command, step.command.explanation)}
                  />
                </div>
              </div>
              <TerminalCommand {...step.command} showNix={false} glossaryIds={glossaryIds} />

              {runStates[i]?.error ? (
                <div className="mt-3 rounded-none border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                  {runStates[i].error}
                </div>
              ) : null}

              {runStates[i]?.result ? (
                <div className="mt-3 rounded-none border border-accent-cyan/30 bg-bg-primary/70 p-3">
                  <p className="terminal-heading text-[10px] uppercase tracking-[0.2em] text-accent-cyan">Output sandbox</p>
                  {runStates[i].result.stdout ? (
                    <pre className="mt-2 overflow-x-auto text-xs text-text-secondary">
                      <code>{runStates[i].result.stdout}</code>
                    </pre>
                  ) : (
                    <p className="mt-2 text-xs text-text-secondary">Nessun output su stdout.</p>
                  )}
                  {runStates[i].result.stderr ? (
                    <pre className="mt-2 overflow-x-auto text-xs text-accent-amber/90">
                      <code>{runStates[i].result.stderr}</code>
                    </pre>
                  ) : null}
                  <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-text-secondary">
                    exit {runStates[i].result.exitCode} · {runStates[i].result.durationMs}ms · provider {runStates[i].result.provider}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
