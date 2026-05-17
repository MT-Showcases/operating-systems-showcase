'use client';

import { useState } from 'react';
import type { MediaPlaceholder } from '@/data/types';

interface Props {
  chapterId: number;
  chapterSlug: string;
  sectionIndex: number;
  sectionTitle: string;
  sectionContent: string;
  media?: MediaPlaceholder[];
}

const badgeByType: Record<MediaPlaceholder['type'], string> = {
  video: '🎬 Video',
  podcast: '🎙️ Podcast',
  infographic: '🖼️ Infografica',
  resource: '📄 Risorsa',
};

export default function SectionMediaSlots({ media }: Props) {
  const [active, setActive] = useState<MediaPlaceholder | null>(null);

  if (!media || media.length === 0) return null;

  return (
    <>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {media.map((slot, idx) => (
          <div key={`${slot.type}-${idx}`} className="rounded-2xl border border-border-subtle bg-bg-surface p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-sm font-medium text-text-primary">{badgeByType[slot.type]}</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/30">Ready</span>
            </div>
            <p className="text-xs text-text-secondary mb-2">{slot.description}</p>
            <button onClick={() => setActive(slot)} className="text-sm text-accent-cyan hover:text-accent-green transition-colors">
              Apri media →
            </button>
          </div>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button onClick={() => setActive(null)} className="absolute top-4 right-4 text-white text-lg px-3 py-1.5 z-[121]">✕</button>
          <div className="w-full max-w-6xl max-h-[90vh]" onClick={(event) => event.stopPropagation()}>
            {active.type === 'infographic' ? (
              <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[90vh] object-contain" />
            ) : active.type === 'video' ? (
              <video src={`/${active.placeholderPath}`} controls playsInline preload="metadata" className="w-full max-h-[90vh] bg-black" />
            ) : active.type === 'podcast' ? (
              <div className="bg-bg-surface border border-border-subtle rounded-2xl p-6">
                <p className="text-text-primary font-semibold mb-4">{active.title}</p>
                <audio src={`/${active.placeholderPath}`} controls className="w-full" preload="none" />
              </div>
            ) : (
              <a href={`/${active.placeholderPath}`} target="_blank" rel="noreferrer" className="text-accent-cyan underline">Apri risorsa</a>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
