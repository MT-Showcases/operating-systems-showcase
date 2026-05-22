'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { X, Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { chapters } from '@/data/chapters';
import useBodyScrollLock from '@/lib/useBodyScrollLock';

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
  const [isDesktopVisible, setIsDesktopVisible] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const chapterListContainerRef = useRef<HTMLDivElement>(null);
  const activeChapterRef = useRef<HTMLAnchorElement>(null);
  const currentIndex = chapters.findIndex((chapter) => chapter.slug === currentSlug);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const container = chapterListContainerRef.current;
    const activeItem = activeChapterRef.current;

    if (!container || !activeItem) return;

    const targetTop = Math.max(0, activeItem.offsetTop - container.clientHeight * 0.35);
    container.scrollTo({ top: targetTop, behavior: 'smooth' });
  }, [currentSlug]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    // Set hash before scrolling — prevents browser from firing a competing
    // native hash-scroll that would race with (and abort) the smooth scroll.
    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, '', `#${sectionId}`);
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setIsOpen(false);
  };

  const sidebar = (
    <aside
      className="flex h-full min-h-0 flex-col overflow-hidden border-2 border-accent-cyan/40 bg-bg-primary shadow-2xl lg:h-auto lg:max-h-[calc(100dvh-6rem)]"
    >
      <div className="sticky top-0 z-10 border-b border-accent-cyan/40 bg-bg-primary px-5 pb-4 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Roadmap</p>
            <h2 className="mt-2 text-sm font-semibold text-text-primary">Console di navigazione</h2>
            <p className="mt-1 text-xs text-text-secondary">Modulo Sistemi Operativi</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDesktopVisible((value) => !value)}
              className="hidden lg:inline-flex h-11 w-11 items-center justify-center border-2 border-accent-cyan/40 bg-bg-primary text-text-secondary hover:text-text-primary"
              aria-label={isDesktopVisible ? 'Nascondi sidebar' : 'Mostra sidebar'}
              title={isDesktopVisible ? 'Nascondi sidebar' : 'Mostra sidebar'}
            >
              {isDesktopVisible ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-accent-cyan/40 bg-bg-primary text-text-secondary lg:hidden"
              aria-label="Chiudi navigazione"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-4 border-2 border-accent-cyan/40 bg-bg-surface p-3">
          <div className="flex items-center justify-between gap-3 text-xs text-text-secondary">
            <span>Progressione modulo</span>
            <span className="terminal-heading text-accent-cyan">{String(currentIndex + 1).padStart(2, '0')}/{String(chapters.length).padStart(2, '0')}</span>
          </div>
          <div className="mt-3 h-2 bg-bg-surface">
            <div
              className="h-2 bg-accent-green/70 transition-all"
              style={{ width: `${((currentIndex + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div ref={chapterListContainerRef} className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 pt-5">
        <nav className="space-y-2" aria-label="Capitoli">
          {chapters.map((chapter, index) => {
            const active = chapter.slug === currentSlug;
            return (
              <Link
                ref={active ? activeChapterRef : null}
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                onClick={() => setIsOpen(false)}
                className={`block border-2 px-4 py-3 text-sm transition ${
                  active
                    ? 'border-accent-green/30 bg-bg-surface text-accent-green'
                    : 'border-transparent bg-bg-surface text-text-secondary hover:border-accent-cyan/40 hover:bg-bg-primary hover:text-text-primary'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 shrink-0 inline-flex h-7 w-7 items-center justify-center border-2 text-[11px] ${
                    active
                      ? 'border-accent-green/40 bg-accent-green text-bg-primary'
                      : 'border-accent-cyan/40 bg-bg-primary text-text-secondary'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="leading-6">{chapter.title}</p>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-4 shrink-0 border-t border-accent-cyan/40 px-5 pb-5 pt-5">
        <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Anchor del capitolo</p>
        <div className="mt-3 space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => handleSectionClick(event, section.id)}
              className="block border-2 border-transparent bg-bg-surface px-4 py-3 text-sm text-text-secondary transition hover:border-accent-cyan/40 hover:bg-bg-primary hover:text-text-primary"
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
        className="fixed bottom-6 left-6 z-40 inline-flex h-12 w-12 items-center justify-center border-2 border-accent-green/30 bg-bg-surface text-accent-green shadow-black/30 lg:hidden"
        aria-label="Apri navigazione capitolo"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isDesktopVisible ? (
        <div className="hidden lg:block lg:w-80 lg:shrink-0 lg:self-start lg:sticky lg:top-12">{sidebar}</div>
      ) : (
        <div className="hidden lg:block lg:w-14 lg:shrink-0 lg:self-start lg:sticky lg:top-12">
          <button
            type="button"
            onClick={() => setIsDesktopVisible(true)}
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-accent-cyan/40 bg-bg-surface text-accent-cyan hover:bg-bg-primary"
            aria-label="Mostra sidebar"
            title="Mostra sidebar"
          >
            <PanelLeftOpen className="h-5 w-5" />
          </button>
        </div>
      )}

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/75 px-4 py-6 lg:hidden">
          <div className="mx-auto h-full max-w-sm">{sidebar}</div>
        </div>
      ) : null}
    </>
  );
}
