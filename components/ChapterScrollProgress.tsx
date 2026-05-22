'use client';

import { useEffect, useRef } from 'react';

export default function ChapterScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      if (labelRef.current) labelRef.current.textContent = `${Math.round(pct)}%`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 h-7 bg-bg-primary/90 backdrop-blur-sm">
      <span className="terminal-heading shrink-0 uppercase tracking-[0.18em] text-[10px] text-accent-cyan">
        Status scroll
      </span>
      <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 bg-accent-cyan/60"
          style={{ width: '0%' }}
        />
      </div>
      <span
        ref={labelRef}
        className="terminal-heading shrink-0 text-[10px] tabular-nums text-accent-cyan"
      >
        0%
      </span>
    </div>
  );
}
