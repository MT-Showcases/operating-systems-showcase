'use client';

import { renderInline, renderParagraph } from '@/components/ui/RichText';

interface PilotBlockProps {
  items: string[];
  glossaryIds: string[];
  blockKey: string;
  asList?: boolean;
}

export default function PilotBlock({ items, glossaryIds, blockKey, asList = false }: PilotBlockProps) {
  if (!items?.length) return null;

  if (asList) {
    return (
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
        {items.map((item, i) => (
          <li key={`${blockKey}-${i}`} className="flex gap-3">
            <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-inherit">›</span>
            <span>{renderInline(item, glossaryIds, `${blockKey}-${i}`)}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-4 space-y-4 text-sm leading-8 text-text-secondary">
      {items.map((paragraph, i) =>
        renderParagraph(paragraph, glossaryIds, `${blockKey}-${i}`)
      )}
    </div>
  );
}
