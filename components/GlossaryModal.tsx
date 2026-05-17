'use client';

import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { getTermById } from '@/data/glossary';
import { useFocusTrap } from './FocusTrap';

interface GlossaryModalProps {
  termId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GlossaryModal({ termId, open, onOpenChange }: GlossaryModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useFocusTrap(contentRef);

  const term = getTermById(termId);

  useEffect(() => {
    // Detect mobile on mount and window resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!term) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={() => onOpenChange(false)}
        />
        <Dialog.Content
          ref={contentRef}
          className={`fixed z-[60] mx-auto overflow-y-auto border border-border-subtle bg-bg-surface p-6 text-text-primary shadow-2xl transition-all duration-300 animate-in ${
            isMobile
              ? 'inset-0 rounded-none md:rounded-2xl md:inset-auto md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:max-h-[90vh]'
              : 'inset-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-2xl max-h-[90vh] rounded-2xl'
          }`}
        >
          <div className="mb-5 flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="flex-1">
              <p className="terminal-heading text-xs uppercase tracking-[0.28em] text-accent-cyan">Glossario</p>
              <Dialog.Title className="mt-2 text-2xl font-semibold text-accent-green">{term.term}</Dialog.Title>
              <p className="mt-2 text-sm text-text-secondary">{term.shortDefinition}</p>
            </div>
            <Dialog.Close asChild>
              <button
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition hover:border-accent-cyan hover:text-accent-cyan"
                aria-label="Chiudi glossario"
              >
                ✕
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-4 text-sm leading-7 text-text-secondary">
            <div className="inline-flex rounded-full border border-accent-green/25 bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">
              {term.category}
            </div>
            <p>{term.definition}</p>
            {term.aliases && term.aliases.length > 0 ? (
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-secondary">Alias utili</p>
                <div className="flex flex-wrap gap-2">
                  {term.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="rounded-full border border-border-subtle bg-black/20 px-3 py-1 text-xs text-text-primary"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
