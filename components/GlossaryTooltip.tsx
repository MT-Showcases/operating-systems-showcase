'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import { getTermById } from '@/data/glossary';
import GlossaryModal from './GlossaryModal';

interface GlossaryTooltipProps {
  termId: string;
  children: React.ReactNode;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);

    onChange();
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export default function GlossaryTooltip({ termId, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const tooltipId = useId();

  const term = getTermById(termId);

  if (!term) return <>{children}</>;

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="inline cursor-pointer text-accent-cyan underline decoration-dashed underline-offset-4 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:outline-none rounded transition-colors duration-150"
          aria-label={`Apri definizione di ${term.term}`}
        >
          {children}
        </button>

        <GlossaryModal termId={termId} open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
      </>
    );
  }

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="inline cursor-help text-accent-cyan underline decoration-dashed underline-offset-4 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:outline-none rounded transition-colors duration-150 hover:text-accent-green"
          aria-describedby={tooltipId}
        >
          {children}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          id={tooltipId}
          role="tooltip"
          sideOffset={10}
          className="bg-bg-primary text-text-primary p-4 rounded-lg shadow-lg border border-accent-cyan/20 max-w-sm z-[60] transition-all duration-150"
        >
          <div className="max-w-none text-sm leading-7">
            <p>{term.shortDefinition || term.definition}</p>
            <Link href={`/glossary#${term.id}`} className="text-accent-cyan hover:text-accent-green">
              Approfondisci →
            </Link>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
