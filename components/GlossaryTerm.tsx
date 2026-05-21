'use client';

import { useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getTermById } from '@/data/glossary';
import GlossaryModal from './GlossaryModal';

interface GlossaryTermProps {
  termId: string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ termId, children }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [canHoverTooltip, setCanHoverTooltip] = useState(false);

  const term = getTermById(termId);

  useEffect(() => {
    const media = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
    const onChange = () => setCanHoverTooltip(media.matches);

    onChange();
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, []);

  const trigger = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      onMouseEnter={canHoverTooltip ? () => setTooltipOpen(true) : undefined}
      onMouseLeave={canHoverTooltip ? () => setTooltipOpen(false) : undefined}
      onFocus={canHoverTooltip ? () => setTooltipOpen(true) : undefined}
      onBlur={canHoverTooltip ? () => setTooltipOpen(false) : undefined}
      className="inline border-b border-dotted border-accent-cyan/70 text-accent-cyan transition hover:text-accent-green hover:border-accent-green"
      aria-label={term ? `Apri definizione di ${term.term}` : 'Apri definizione'}
    >
      {children}
    </button>
  );

  return (
    <>
      {canHoverTooltip && term ? (
        <Popover.Root open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <Popover.Trigger asChild>
            {trigger}
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={8}
              className="z-60 max-w-sm border border-accent-cyan/20 bg-bg-primary p-4 text-text-primary"
            >
              <div className="text-sm leading-7 text-text-secondary">
                <p>{term.shortDefinition || term.definition}</p>
                <Link href={`/glossary#${term.id}`} className="mt-2 inline-flex items-center gap-1 text-accent-cyan transition hover:text-accent-green">
                  Approfondisci <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        trigger
      )}
      <GlossaryModal termId={termId} open={open} onOpenChange={setOpen} />
    </>
  );
}
