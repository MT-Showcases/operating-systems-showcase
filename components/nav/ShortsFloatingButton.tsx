'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Play } from 'lucide-react';

export default function ShortsFloatingButton() {
  const pathname = usePathname();

  if (pathname === '/shorts') return null;

  return (
    <Link
      href="/shorts"
      className="hidden md:inline-flex fixed bottom-20 left-6 z-88 h-12 w-32 items-center justify-center gap-2 border-2 border-accent-amber/50 bg-bg-primary px-4 text-accent-amber shadow-black/30 transition hover:border-accent-green hover:text-accent-green btn-glow-amber"
      aria-label="Video pillole"
      title="Video pillole"
    >
      <Play className="h-4 w-4" />
      <span className="terminal-heading text-[11px] uppercase tracking-[0.16em]">Video</span>
    </Link>
  );
}
