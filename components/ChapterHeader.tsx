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
    <header className="overflow-hidden rounded-[2rem] border border-border-subtle bg-[linear-gradient(145deg,rgba(13,17,23,0.98),rgba(22,27,34,0.96))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-accent-green/30 bg-accent-green/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-green">
          Capitolo {String(chapterNumber).padStart(2, '0')}
        </span>
        <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
          Sessione operativa · {duration}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.28em] text-text-secondary">
            Linux / Kernel / Shell
          </p>
          <h1 className="terminal-heading mt-3 text-4xl font-bold text-text-primary sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">{description}</p>
        </div>

        <div className="rounded-3xl border border-accent-green/20 bg-black/20 p-5">
          <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Modalità</p>
          <div className="mt-3 space-y-3 text-sm text-text-secondary">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-bg-primary/60 px-3 py-2">
              <span>Focus</span>
              <span className="terminal-heading text-accent-green">OS / Linux</span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-border-subtle bg-bg-primary/60 px-3 py-2">
              <span>Output</span>
              <span className="terminal-heading text-accent-cyan">teoria + pratica</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {objectives.map((objective, index) => (
          <div key={objective} className="rounded-2xl border border-border-subtle bg-black/20 p-4 text-sm leading-7 text-text-secondary">
            <p className="terminal-heading mb-2 text-xs uppercase tracking-[0.22em] text-accent-amber">
              Checkpoint {index + 1}
            </p>
            <p>{objective}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
