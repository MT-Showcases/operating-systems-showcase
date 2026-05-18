'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

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
        className="terminal-heading text-xs px-3 py-1.5 rounded-none border border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan/10 transition"
      >
        {open ? 'Nascondi sorgente' : label}
      </button>

      {open && (
        <div className="mt-3 rounded-none border border-accent-cyan/40 bg-bg-surface p-3">
          <textarea
            readOnly
            value={source}
            className="w-full min-h-[180px] rounded-none border border-accent-cyan/40 bg-bg-primary text-text-primary text-xs p-3 font-mono leading-6"
          />
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(source);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="mt-2 text-xs px-3 py-1.5 rounded-none border border-accent-green/40 text-accent-green hover:bg-accent-green/10 transition flex items-center gap-1"
          >
            {copied ? (
              <>
                Copiato <Check className="h-3 w-3" />
              </>
            ) : (
              'Copia sorgente'
            )}
          </button>
        </div>
      )}
    </div>
  );
}
