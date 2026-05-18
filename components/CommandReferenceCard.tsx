import type { CommandReference } from '@/data/types';

export default function CommandReferenceCard({ command, syntax, description, examples }: CommandReference) {
  return (
    <article className="rounded-2xl border border-accent-cyan/40 bg-bg-primary/50 p-5">
      <div className="flex items-center justify-between gap-3">
        <h4 className="terminal-heading text-lg font-semibold text-accent-cyan">{command}</h4>
        <span className="rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs text-accent-green">
          Riferimento rapido
        </span>
      </div>
      <p className="mt-3 terminal-heading text-sm text-text-primary">{syntax}</p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
      <div className="mt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Esempi pratici</p>
        <ul className="space-y-2">
          {examples.map((example) => (
            <li key={example} className="rounded-xl border border-accent-cyan/40 bg-bg-surface px-3 py-2 terminal-heading text-sm text-text-primary">
              {example}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
