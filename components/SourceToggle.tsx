'use client';

import { useState } from 'react';

interface SourceToggleProps {
  source: string;
  label?: string;
}

export default function SourceToggle({ source, label = 'Mostra fonte' }: SourceToggleProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs px-3 py-1.5 rounded-lg border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition"
      >
        {open ? 'Nascondi fonte' : label}
      </button>

      {open && (
        <div className="mt-3 rounded-lg border border-border-subtle bg-bg-surface p-3">
          <textarea
            readOnly
            value={source}
            className="w-full min-h-[180px] bg-bg-primary text-text-primary text-xs p-3 rounded-md border border-border-subtle"
          />
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(source);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="mt-2 text-xs px-3 py-1.5 rounded-lg border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition"
          >
            {copied ? 'Copiato ✓' : 'Copia fonte'}
          </button>
        </div>
      )}
    </div>
  );
}
