import { CheckCircle2, ChevronRight } from 'lucide-react';

interface KeyTakeawayProps {
  items: string[];
}

export default function KeyTakeaway({ items }: KeyTakeawayProps) {
  return (
    <section className="border-2 border-accent-green/60 bg-bg-surface p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center border-2 border-accent-green/60 bg-bg-primary text-accent-green">
          <CheckCircle2 size={20} strokeWidth={2.5} />
        </div>
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Checkpoint finale</p>
          <h3 className="terminal-heading text-xl font-semibold text-accent-green">Cosa portarti via</h3>
        </div>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {items.map((item, idx) => (
          <li key={`takeaway-${idx}`} className="flex gap-3 border-2 border-accent-green/40 bg-bg-primary px-4 py-3">
            <ChevronRight size={18} className="mt-0.5 shrink-0 text-accent-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
