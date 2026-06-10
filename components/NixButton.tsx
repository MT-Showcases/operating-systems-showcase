'use client';

import { MessageSquare } from 'lucide-react';

interface NixButtonProps {
  prompt: string;
  size?: 'sm' | 'xs';
}

export default function NixButton({ prompt, size = 'sm' }: NixButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('nix:open', { detail: { prompt } }));
  };

  if (size === 'xs') {
    return (
      <button
        onClick={handleClick}
        title={prompt}
        className="inline-flex items-center gap-1.5 border border-accent-cyan/30 bg-bg-surface px-2 py-1 text-[10px] text-accent-cyan/70 transition hover:border-accent-cyan hover:bg-accent-cyan/10 hover:text-accent-cyan btn-glow-cyan"
      >
        <MessageSquare className="h-3 w-3" />
        Nix
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 border border-accent-cyan/40 bg-bg-surface px-3 py-1.5 text-xs text-accent-cyan transition hover:border-accent-cyan hover:bg-accent-cyan/10 btn-glow-cyan"
    >
      <MessageSquare className="h-3.5 w-3.5" />
      Chiedi a Nix
    </button>
  );
}
