import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ChapterLink {
  slug: string;
  title: string;
}

interface ChapterNavProps {
  previousChapter?: ChapterLink | null;
  nextChapter?: ChapterLink | null;
  currentChapter: number;
  totalChapters: number;
}

export default function ChapterNav({
  previousChapter,
  nextChapter,
  currentChapter,
  totalChapters,
}: ChapterNavProps) {
  const progress = (currentChapter / totalChapters) * 100;

  return (
    <div className=" border-2 border-accent-cyan/40 bg-bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-text-secondary">Navigazione</p>
          <p className="mt-2 text-sm text-text-primary">
            Capitolo {currentChapter} di {totalChapters}
          </p>
        </div>
        <div className="w-full max-w-xs">
          <div className="h-2 bg-black/30">
            <div className="h-2 bg-accent-green" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        {previousChapter ? (
          <Link
            href={`/chapters/${previousChapter.slug}`}
            className="inline-flex min-h-11 items-center gap-2 border-2 border-accent-cyan/40 px-4 py-2 text-sm text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan"
          >
            <ChevronLeft className="h-4 w-4" /> {previousChapter.title}
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link
            href={`/chapters/${nextChapter.slug}`}
            className="inline-flex min-h-11 items-center gap-2 border-2 border-accent-green/30 bg-bg-surface px-4 py-2 text-sm text-accent-green transition hover:border-accent-green hover:bg-accent-green/15"
          >
            {nextChapter.title} <ChevronRight className="h-4 w-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
