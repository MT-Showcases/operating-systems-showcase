'use client';

import { useState } from 'react';

interface SourceToggleProps {
  source: string;
  label?: string;
}

export default function SourceToggle({ source, label = 'Mostra sorgente operativa' }: SourceToggleProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="terminal-heading text-xs px-3 py-1.5 rounded-lg border border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan/10 transition"
      >
        {open ? 'Nascondi sorgente' : label}
      </button>

      {open && (
        <div className="mt-3 rounded-2xl border border-border-subtle bg-bg-surface p-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <textarea
            readOnly
            value={source}
            className="w-full min-h-[180px] rounded-xl border border-border-subtle bg-bg-primary text-text-primary text-xs p-3 font-mono leading-6"
          />
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(source);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="mt-2 text-xs px-3 py-1.5 rounded-lg border border-accent-green/40 text-accent-green hover:bg-accent-green/10 transition"
          >
            {copied ? 'Copiato ✓' : 'Copia sorgente'}
          </button>
        </div>
      )}
    </div>
  );
}
