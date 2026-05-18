'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { chapters } from '@/data/chapters';

interface SidebarSection {
  id: string;
  title: string;
}

interface ChapterSidebarProps {
  currentSlug: string;
  sections: SidebarSection[];
}

export default function ChapterSidebar({ currentSlug, sections }: ChapterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentIndex = chapters.findIndex((chapter) => chapter.slug === currentSlug);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const sidebar = (
    <aside className="h-full overflow-y-auto  border-2 border-accent-cyan/40  p-5">
      <div className="border-b border-accent-cyan/40 pb-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Roadmap</p>
            <h2 className="mt-2 text-sm font-semibold text-text-primary">Console di navigazione</h2>
            <p className="mt-1 text-xs text-text-secondary">Modulo Sistemi Operativi</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-accent-cyan/40 bg-bg-primary/70 text-text-secondary md:hidden"
            aria-label="Chiudi navigazione"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 border-2 border-accent-cyan/40 bg-bg-surface p-3">
          <div className="flex items-center justify-between gap-3 text-xs text-text-secondary">
            <span>Progressione modulo</span>
            <span className="terminal-heading text-accent-cyan">{String(currentIndex + 1).padStart(2, '0')}/{String(chapters.length).padStart(2, '0')}</span>
          </div>
          <div className="mt-3 h-2 bg-bg-surface">
            <div
              className="h-2  transition-all"
              style={{ width: `${((currentIndex + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="mt-5 space-y-2" aria-label="Capitoli">
        {chapters.map((chapter, index) => {
          const active = chapter.slug === currentSlug;
          return (
            <Link
              key={chapter.slug}
              href={`/chapters/${chapter.slug}`}
              onClick={() => setIsOpen(false)}
              className={`block border-2 px-4 py-3 text-sm transition ${
                active
                  ? 'border-accent-green/30 bg-bg-surface text-accent-green'
                  : 'border-transparent bg-black/10 text-text-secondary hover:border-accent-cyan/40 hover:bg-bg-primary/60 hover:text-text-primary'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`inline-flex h-7 w-7 items-center justify-center border-2 text-[11px] ${
                  active
                    ? 'border-accent-green/40 bg-accent-green text-bg-primary'
                    : 'border-accent-cyan/40 bg-bg-primary/70 text-text-secondary'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="leading-6">{chapter.title}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-accent-cyan/40 pt-5">
        <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Anchor del capitolo</p>
        <div className="mt-3 space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className="block border-2 border-transparent bg-black/10 px-4 py-3 text-sm text-text-secondary transition hover:border-accent-cyan/40 hover:bg-bg-primary/60 hover:text-text-primary"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 inline-flex h-12 w-12 items-center justify-center border-2 border-accent-green/30 bg-bg-surface text-accent-green shadow-black/30 md:hidden"
        aria-label="Apri navigazione capitolo"
      >
        ☰
      </button>

      <div className="hidden lg:block lg:w-80 lg:flex-shrink-0 lg:self-start lg:sticky lg:top-6">{sidebar}</div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/70 px-4 py-6 lg:hidden">
          <div className="mx-auto h-full max-w-sm">{sidebar}</div>
        </div>
      ) : null}
    </>
  );
}
