'use client';

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
      }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center border-2 border-accent-cyan/60 bg-bg-primary text-accent-cyan transition hover:border-accent-green hover:text-accent-green"
      aria-label="Torna in alto"
      title="Torna in alto"
    >
      ↑
    </button>
  );
}
