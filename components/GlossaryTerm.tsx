'use client';

import { useState } from 'react';
import GlossaryModal from './GlossaryModal';

interface GlossaryTermProps {
  termId: string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ termId, children }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline rounded-sm border-b border-dotted border-accent-cyan/70 text-accent-cyan transition hover:text-accent-green hover:border-accent-green"
      >
        {children}
      </button>
      <GlossaryModal termId={termId} open={open} onOpenChange={setOpen} />
    </>
  );
}
