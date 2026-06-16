'use client';

import { renderInline } from '@/components/ui/RichText';

interface ChapterHeaderProps {
  title: string;
  description: string;
  chapterNumber: number;
  duration: string;
  objectives: string[];
  glossaryIds?: string[];
}

export default function ChapterHeader({
  title,
  description,
  chapterNumber,
  duration,
  objectives,
  glossaryIds = [],
}: ChapterHeaderProps) {
  return (
    <header className="overflow-hidden border-2 border-accent-green bg-bg-primary p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="border-2 border-accent-green/60 bg-bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-green">
          Capitolo {String(chapterNumber).padStart(2, '0')}
        </span>
        <span className="border-2 border-accent-cyan/60 bg-bg-surface px-3 py-1 text-xs text-accent-cyan">
          Sessione operativa · {duration}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.28em] text-text-secondary">
            Linux / Kernel / Shell
          </p>
          <h1 className="terminal-heading mt-3 text-4xl font-bold text-text-primary sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            {renderInline(description, glossaryIds, `chapter-description-${chapterNumber}`)}
          </p>
        </div>

        <div className="border-2 border-accent-green/60 bg-bg-surface p-5">
          <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Modalità</p>
          <div className="mt-3 space-y-3 text-sm text-text-secondary">
            <div className="flex items-center justify-between gap-3 border-2 border-accent-green/40 bg-bg-primary px-3 py-2">
              <span>Focus</span>
              <span className="terminal-heading text-accent-green">OS / Linux</span>
            </div>
            <div className="flex items-center justify-between gap-3 border-2 border-accent-cyan/40 bg-bg-primary px-3 py-2">
              <span>Output</span>
              <span className="terminal-heading text-accent-cyan">teoria + pratica</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {objectives.map((objective, index) => (
          <div key={`objective-${index}`} className="border-2 border-accent-amber/40 bg-bg-surface p-4 text-sm leading-7 text-text-secondary">
            <p className="terminal-heading mb-2 text-xs uppercase tracking-[0.22em] text-accent-amber">
              Checkpoint {index + 1}
            </p>
            <p>{renderInline(objective, glossaryIds, `chapter-objective-${chapterNumber}-${index}`)}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
