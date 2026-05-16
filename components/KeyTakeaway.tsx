interface KeyTakeawayProps {
  items: string[];
}

export default function KeyTakeaway({ items }: KeyTakeawayProps) {
  return (
    <section className="rounded-3xl border border-accent-green/20 bg-accent-green/10 p-6">
      <h3 className="terminal-heading text-xl font-semibold text-accent-green">Takeaway finale</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
