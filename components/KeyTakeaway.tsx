interface KeyTakeawayProps {
  items: string[];
}

export default function KeyTakeaway({ items }: KeyTakeawayProps) {
  return (
    <section className="rounded-[2rem] border border-accent-green/20 bg-[linear-gradient(180deg,rgba(57,211,83,0.10),rgba(57,211,83,0.04))] p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent-green/25 bg-accent-green/10 text-lg">✓</span>
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Checkpoint finale</p>
          <h3 className="terminal-heading text-xl font-semibold text-accent-green">Cosa portarti via</h3>
        </div>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl border border-accent-green/10 bg-black/10 px-4 py-3">
            <span className="mt-2 text-accent-green">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
