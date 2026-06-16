'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import SandboxModal from '@/components/sandbox/SandboxModal';

interface SandboxLaunchButtonProps {
  children: ReactNode;
  className: string;
  ariaLabel?: string;
  title?: string;
}

export default function SandboxLaunchButton({ children, className, ariaLabel = 'Apri sandbox', title = 'Apri sandbox' }: SandboxLaunchButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        title={title}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      <SandboxModal open={open} onOpenChange={setOpen} />
    </>
  );
}
