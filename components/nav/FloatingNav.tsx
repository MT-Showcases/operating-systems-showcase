'use client';

import Link from 'next/link';
import { ClipboardList, MessageSquare, Play, TerminalSquare } from 'lucide-react';
import { useState } from 'react';
import { emit } from '@/lib/events';
import SandboxModal from '@/components/sandbox/SandboxModal';

// Mobile-only bottom nav bar. On desktop each button is individually positioned.
export default function FloatingNav() {
  const [sandboxOpen, setSandboxOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 inset-x-0 z-88 md:hidden grid grid-cols-4 border-t-2 border-border-subtle bg-bg-primary">
        <Link
          href="/shorts"
          className="flex h-14 items-center justify-center gap-1.5 border-r border-border-subtle text-accent-amber transition hover:bg-accent-amber/10"
          aria-label="Video pillole"
        >
          <Play className="h-4 w-4" />
          <span className="terminal-heading text-[10px] uppercase tracking-[0.12em]">Video</span>
        </Link>

        <button
          type="button"
          onClick={() => setSandboxOpen(true)}
          className="flex h-14 items-center justify-center gap-1.5 border-r border-border-subtle text-accent-cyan transition hover:bg-accent-cyan/10"
          aria-label="Apri sandbox"
        >
          <TerminalSquare className="h-4 w-4" />
          <span className="terminal-heading text-[10px] uppercase tracking-[0.12em]">Sandbox</span>
        </button>

        <Link
          href="/exam"
          className="flex h-14 items-center justify-center gap-1.5 border-r border-border-subtle text-accent-green transition hover:bg-accent-green/10"
          aria-label="Esame finale"
        >
          <ClipboardList className="h-4 w-4" />
          <span className="terminal-heading text-[10px] uppercase tracking-[0.12em]">Esame</span>
        </Link>

        <button
          type="button"
          onClick={() => emit('nix:open', { prompt: '' })}
          className="flex h-14 items-center justify-center gap-1.5 text-accent-green transition hover:bg-accent-green/10"
          aria-label="Apri Nix"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="terminal-heading text-[10px] uppercase tracking-[0.12em]">Nix</span>
        </button>
      </nav>

      <SandboxModal open={sandboxOpen} onOpenChange={setSandboxOpen} />
    </>
  );
}
