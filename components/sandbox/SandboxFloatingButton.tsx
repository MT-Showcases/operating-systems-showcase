'use client';

import { TerminalSquare } from 'lucide-react';
import SandboxLaunchButton from '@/components/sandbox/SandboxLaunchButton';

export default function SandboxFloatingButton() {
  return (
    <SandboxLaunchButton
      className="hidden md:inline-flex fixed bottom-6 left-6 z-88 h-12 w-32 items-center justify-center gap-2 border-2 border-accent-cyan/50 bg-bg-primary px-4 text-accent-cyan shadow-black/30 transition hover:border-accent-green hover:text-accent-green btn-glow-cyan"
      aria-label="Apri sandbox"
      title="Apri sandbox"
    >
      <TerminalSquare className="h-4 w-4" />
      <span className="terminal-heading text-[11px] uppercase tracking-[0.16em]">Sandbox</span>
    </SandboxLaunchButton>
  );
}
