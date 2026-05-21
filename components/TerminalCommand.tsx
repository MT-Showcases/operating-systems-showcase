'use client';

import { useState } from 'react';
import type { TerminalCommandBlock } from '@/data/types';
import { Check, Copy } from 'lucide-react';
import NixButton from './NixButton';
import { renderInline } from './RichText';

function buildNixPrompt(command: string, explanation: string): string {
  return `Comando: ${command}\n\nSpiegami cosa fa esattamente questo comando, il significato di ogni opzione e quando usarlo nella pratica. Contesto: ${explanation}`;
}

export default function TerminalCommand({ command, output, explanation, warning, showNix = true, glossaryIds = [] }: TerminalCommandBlock & { showNix?: boolean; glossaryIds?: string[] }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-none border border-accent-cyan/40 bg-black/35 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-accent-cyan/40 bg-bg-primary px-4 py-3 text-xs text-text-secondary">
        <span className="h-2.5 w-2.5 rounded-none bg-accent-amber/80" />
        <span className="h-2.5 w-2.5 rounded-none bg-accent-green/80" />
        <span className="h-2.5 w-2.5 rounded-none bg-accent-cyan/80" />
        <span className="ml-2 terminal-heading uppercase tracking-[0.22em]">terminal</span>
        <button
          onClick={onCopy}
          className="ml-auto inline-flex items-center gap-1 border border-accent-cyan/30 px-2 py-0.5 text-[10px] text-accent-cyan/70 transition hover:border-accent-cyan hover:bg-accent-cyan/10 hover:text-accent-cyan"
          title="Copia comando"
        >
          {copied ? (
            <>
              Copiato <Check className="h-3 w-3" />
            </>
          ) : (
            <>
              Copia <Copy className="h-3 w-3" />
            </>
          )}
        </button>
      </div>
      <div className="border-l-4 border-accent-green p-4">
        <pre className="terminal-heading overflow-x-auto text-sm text-accent-green">
          <code>$ {command}</code>
        </pre>
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
            <NixButton size="xs" prompt={buildNixPrompt(command, explanation)} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
