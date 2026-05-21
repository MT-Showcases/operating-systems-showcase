'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TerminalSquare } from 'lucide-react';

export default function SandboxFloatingButton() {
  const pathname = usePathname();

  if (pathname === '/sandbox') return null;

  return (
    <Link
      href="/sandbox"
      className="fixed bottom-6 left-1/2 z-[88] inline-flex h-12 items-center justify-center gap-2 border-2 border-accent-cyan/50 bg-bg-primary px-4 text-accent-cyan shadow-black/30 transition hover:border-accent-green hover:text-accent-green -translate-x-1/2 md:left-6 md:translate-x-0"
      aria-label="Apri sandbox"
      title="Apri sandbox"
    >
      <TerminalSquare className="h-4 w-4" />
      <span className="terminal-heading text-[11px] uppercase tracking-[0.16em]">Sandbox</span>
    </Link>
  );
}
