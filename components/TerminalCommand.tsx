'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import type { TerminalCommandBlock } from '@/data/types';
import NixButton from './NixButton';
import { renderInline } from './RichText';

function buildNixPrompt(command: string, explanation: string, title?: string): string {
  const contextPrefix = title ? `Obiettivo operativo: ${title}\n` : '';
  return `Comando: ${command}\n\n${contextPrefix}Spiegami cosa fa esattamente questo comando, il significato di ogni opzione e quando usarlo nella pratica. Contesto: ${explanation}`;
}

export default function TerminalCommand({ title, command, output, explanation, warning, showNix = true, glossaryIds = [] }: TerminalCommandBlock & { showNix?: boolean; glossaryIds?: string[] }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const copyResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetTimeoutRef.current) {
        clearTimeout(copyResetTimeoutRef.current);
      }
    };
  }, []);

  async function handleCopyCommand() {
    if (copyResetTimeoutRef.current) {
      clearTimeout(copyResetTimeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(command);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }

    copyResetTimeoutRef.current = setTimeout(() => {
      setCopyState('idle');
    }, 2000);
  }

  return (
    <div className="rounded-none border border-accent-cyan/40 bg-black/35 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-accent-cyan/40 bg-bg-primary px-4 py-3 text-xs text-text-secondary">
        <span className="h-2.5 w-2.5 rounded-none bg-accent-amber/80" />
        <span className="h-2.5 w-2.5 rounded-none bg-accent-green/80" />
        <span className="h-2.5 w-2.5 rounded-none bg-accent-cyan/80" />
        <span className="ml-2 terminal-heading uppercase tracking-[0.22em]">terminal</span>
      </div>
      <div className="border-l-4 border-accent-green p-4">
        {title ? (
          <p className="terminal-heading mb-3 text-[10px] uppercase tracking-[0.18em] text-accent-cyan/80">
            {title}
          </p>
        ) : null}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <pre className="terminal-heading min-w-0 flex-1 overflow-x-auto text-sm text-accent-green">
            <code>$ {command}</code>
          </pre>
          <button
            type="button"
            onClick={handleCopyCommand}
            className="shrink-0 self-start rounded-none border border-accent-cyan/40 bg-bg-primary p-2 text-accent-cyan transition-colors hover:bg-accent-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70"
            aria-live="polite"
            aria-label={copyState === 'copied' ? 'Comando copiato' : copyState === 'error' ? 'Errore durante la copia' : 'Copia comando'}
            title={copyState === 'copied' ? 'Comando copiato' : copyState === 'error' ? 'Errore durante la copia' : 'Copia comando'}
          >
            {copyState === 'copied' ? <Check size={16} aria-hidden="true" /> : copyState === 'error' ? <X size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          </button>
        </div>
        {output ? (
          <pre className="mt-3 overflow-x-auto rounded-none border border-accent-cyan/40 bg-bg-primary/80 p-3 text-sm text-text-secondary">
            <code>{output}</code>
          </pre>
        ) : null}
        <p className="mt-4 text-sm leading-7 text-text-secondary">{renderInline(explanation, glossaryIds, `tc-exp-${command}`)}</p>
        {warning ? (
          <div className="mt-4 rounded-none border border-accent-amber/30 bg-accent-amber/10 px-4 py-3 text-sm text-text-primary">
            <span className="terminal-heading mr-2 text-accent-amber">warning:</span>
            {renderInline(warning, glossaryIds, `tc-warn-${command}`)}
          </div>
        ) : null}
        {showNix ? (
          <div className="mt-4 flex justify-end">
            <NixButton size="xs" prompt={buildNixPrompt(command, explanation, title)} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
