import type { CommandReference, CommandExample } from '@/data/types';
import { renderInline } from '@/components/ui/RichText';

function isCommandExample(example: string | CommandExample): example is CommandExample {
  return typeof example === 'object';
}

export default function CommandReferenceCard({ command, syntax, description, examples }: CommandReference) {
  return (
    <article className="rounded-none border border-accent-cyan/40 bg-bg-primary/50 p-5">
      <div className="flex items-center justify-between gap-3">
        <h4 className="terminal-heading text-lg font-semibold text-accent-cyan">{command}</h4>
        <span className="rounded-none border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs text-accent-green">
          Riferimento rapido
        </span>
      </div>
      <p className="mt-3 terminal-heading text-sm text-text-primary">{syntax}</p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
      <div className="mt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Esempi pratici</p>
        <ul className="space-y-2">
          {examples.map((example) =>
            isCommandExample(example) ? (
              <li key={example.command} className="rounded-none border border-accent-cyan/40 bg-bg-surface px-3 py-2.5">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-xs text-accent-green/70 terminal-heading select-none">$</span>
                  <span className="terminal-heading text-sm text-accent-cyan">{example.command}</span>
                </div>
                <p className="mt-1.5 pl-4 text-xs leading-5 text-text-secondary">
                  {renderInline(example.description, [], `ex-${example.command}`)}
                </p>
              </li>
            ) : (
              <li key={example} className="rounded-none border border-accent-cyan/40 bg-bg-surface px-3 py-2 terminal-heading text-sm text-text-primary">
                {example}
              </li>
            )
          )}
        </ul>
      </div>
    </article>
  );
}
