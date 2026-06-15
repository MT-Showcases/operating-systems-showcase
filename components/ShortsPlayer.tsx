'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronUp, ChevronDown, Shuffle } from 'lucide-react';
import type { ChapterVideoItem } from '@/lib/shorts';

interface Props {
  initialVideos: ChapterVideoItem[];
  chapterFilter: string | null;
}

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function ShortsPlayer({ initialVideos, chapterFilter }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [shuffled, setShuffled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = useMemo(
    () => (shuffled ? shuffleArray(initialVideos) : initialVideos),
    [shuffled, initialVideos]
  );

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
    sectionRefs.current = sectionRefs.current.slice(0, videos.length);
  }, [videos.length]);

  // Auto-play via IntersectionObserver
  useEffect(() => {
    if (!containerRef.current || videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = sectionRefs.current.indexOf(entry.target as HTMLElement);
          const video = videoRefs.current[idx];
          if (!video) continue;
          if (entry.isIntersecting) {
            setCurrentIndex(idx);
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { root: containerRef.current, threshold: 0.5 }
    );

    const sections = sectionRefs.current.filter(Boolean) as HTMLElement[];
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [videos]);

  const scrollToIndex = useCallback((idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); scrollToIndex(Math.min(currentIndex + 1, videos.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); scrollToIndex(Math.max(currentIndex - 1, 0)); }
      else if (e.key === 'Escape') { router.back(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex, videos.length, scrollToIndex, router]);

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push('/');
  };

  const toggleVideo = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  if (videos.length === 0) {
    return (
      <div className="fixed inset-0 z-200 bg-bg-primary flex flex-col items-center justify-center gap-6">
        <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-text-secondary">
          Nessun video disponibile
        </p>
        <p className="text-text-secondary text-sm max-w-xs text-center">
          {chapterFilter
            ? `Il capitolo "${chapterFilter}" non ha ancora video pronti.`
            : 'Nessun video pronto nel corso.'}
        </p>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 border-2 border-accent-cyan/40 px-4 py-2 text-sm text-accent-cyan hover:border-accent-cyan transition"
        >
          <ChevronLeft className="h-4 w-4" />
          Indietro
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-200 bg-black">
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-4 py-3 bg-linear-to-b from-black/90 to-transparent">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 border-2 border-accent-cyan/40 bg-black/60 px-3 py-1.5 text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="terminal-heading text-[11px] uppercase tracking-[0.16em]">Indietro</span>
        </button>

        <div className="text-center">
          <p className="terminal-heading text-[10px] uppercase tracking-[0.2em] text-text-secondary">
            {chapterFilter ? `Capitolo — ${chapterFilter}` : 'Tutti i capitoli'}
          </p>
          <p className="text-accent-cyan text-xs mt-0.5">
            {currentIndex + 1} / {videos.length}
          </p>
        </div>

        <button
          onClick={() => setShuffled((v) => !v)}
          className={`flex items-center gap-1.5 border-2 px-3 py-1.5 transition ${
            shuffled
              ? 'border-accent-green text-accent-green bg-accent-green/10'
              : 'border-accent-cyan/30 bg-black/60 text-text-secondary hover:border-accent-cyan hover:text-accent-cyan'
          }`}
        >
          <Shuffle className="h-3.5 w-3.5" />
          <span className="terminal-heading text-[11px] uppercase tracking-[0.16em]">Casuale</span>
        </button>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-dvh overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {videos.map((video, idx) => (
          <section
            key={`${video.chapterSlug}-${idx}`}
            ref={(el) => { sectionRefs.current[idx] = el; }}
            className="relative h-dvh snap-start flex items-center justify-center bg-black"
          >
            <video
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={`/${video.videoPath}`}
              preload="metadata"
              playsInline
              loop
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => toggleVideo(idx)}
            />

            {/* Bottom info overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/90 via-black/50 to-transparent px-5 pb-8 pt-20 pointer-events-none">
              <div className="mb-2">
                <span className="border border-accent-green/60 bg-black/60 px-3 py-1 terminal-heading text-[10px] uppercase tracking-[0.24em] text-accent-green">
                  Capitolo {String(video.chapterId).padStart(2, '0')}
                </span>
              </div>
              <h2 className="terminal-heading text-base font-semibold text-text-primary leading-snug mb-1">
                {video.chapterTitle}
              </h2>
              <p className="text-text-secondary text-sm leading-6 line-clamp-2">
                {video.videoDescription}
              </p>
            </div>

            {/* Navigation arrows */}
            {idx > 0 && (
              <button
                onClick={() => scrollToIndex(idx - 1)}
                className="absolute top-16 right-4 border-2 border-accent-cyan/40 bg-black/60 p-2 text-accent-cyan hover:border-accent-cyan transition"
                aria-label="Video precedente"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            )}
            {idx < videos.length - 1 && (
              <button
                onClick={() => scrollToIndex(idx + 1)}
                className="absolute bottom-24 right-4 border-2 border-accent-cyan/40 bg-black/60 p-2 text-accent-cyan hover:border-accent-cyan transition"
                aria-label="Video successivo"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
