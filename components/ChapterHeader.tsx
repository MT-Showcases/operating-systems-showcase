interface ChapterHeaderProps {
  title: string;
  description: string;
  chapterNumber: number;
  duration: string;
  objectives: string[];
}

export default function ChapterHeader({
  title,
  description,
  chapterNumber,
  duration,
  objectives,
}: ChapterHeaderProps) {
  return (
    <header className="rounded-3xl border border-border-subtle bg-bg-surface/90 p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-green">
          Capitolo {String(chapterNumber).padStart(2, '0')}
        </span>
        <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
          Durata stimata · {duration}
        </span>
      </div>
      <h1 className="terminal-heading mt-5 text-4xl font-bold text-text-primary sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">{description}</p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {objectives.map((objective) => (
          <div key={objective} className="rounded-2xl border border-border-subtle bg-black/20 p-4 text-sm leading-7 text-text-secondary">
            <p className="terminal-heading mb-2 text-xs uppercase tracking-[0.22em] text-accent-cyan">Obiettivo</p>
            <p>{objective}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
