'use client';

import type { LabBlock as LabBlockType } from '@/data/types';
import TerminalCommand from './TerminalCommand';
import NixButton from './NixButton';

function buildStepPrompt(goal: string, command: string, explanation: string): string {
  return `Passo: "${goal}"\nComando: ${command}\n\n${explanation}\n\nPerché si fa così? Quali errori comuni si fanno in questo passaggio e come si verificano i risultati?`;
}

export default function LabBlock({ title, intro, steps, glossaryIds = [] }: LabBlockType & { glossaryIds?: string[]; chapterSlug?: string }) {
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
                  <NixButton
                    size="xs"
                    prompt={buildStepPrompt(step.goal, step.command.command, step.command.explanation)}
                  />
                </div>
              </div>
              <TerminalCommand {...step.command} showNix={false} glossaryIds={glossaryIds} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
