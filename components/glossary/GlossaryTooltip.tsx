'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import { ChevronRight } from 'lucide-react';
import { getTermById } from '@/data/glossary';
import GlossaryModal from '@/components/glossary/GlossaryModal';

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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const canHoverTooltip = useMediaQuery('(any-hover: hover) and (any-pointer: fine)');
  const tooltipId = useId();

  const term = getTermById(termId);

  if (!term) return <>{children}</>;

  const trigger = (
    <button
      type="button"
      onClick={() => setIsDrawerOpen(true)}
      onMouseEnter={canHoverTooltip ? () => setIsTooltipOpen(true) : undefined}
      onMouseLeave={canHoverTooltip ? () => setIsTooltipOpen(false) : undefined}
      className="inline cursor-pointer text-accent-cyan underline decoration-dashed underline-offset-4 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:outline-none rounded-none transition-colors duration-150 hover:text-accent-green"
      aria-label={`Apri definizione di ${term.term}`}
    >
      {children}
    </button>
  );

  return (
    <>
      {canHoverTooltip ? (
        <Popover.Root open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
          <Popover.Trigger asChild>
            {trigger}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              id={tooltipId}
              role="tooltip"
              sideOffset={10}
              onOpenAutoFocus={(event) => event.preventDefault()}
              onCloseAutoFocus={(event) => event.preventDefault()}
              className="bg-bg-primary text-text-primary p-4 rounded-none border border-accent-cyan/20 max-w-sm z-[60] transition-all duration-150"
            >
              <div className="max-w-none text-sm leading-7">
                <p>{term.shortDefinition || term.definition}</p>
                <Link href={`/glossary#${term.id}`} className="text-accent-cyan hover:text-accent-green flex items-center gap-1 inline-flex">
                  Approfondisci <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        trigger
      )}

      <GlossaryModal termId={termId} open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </>
  );
}
