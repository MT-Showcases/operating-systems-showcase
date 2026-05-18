'use client';

import { useState } from 'react';
import { ChevronRight, X, Film, Headphones, Image, FileText } from 'lucide-react';
import type { Chapter } from '@/data/types';

type MediaPlaceholder = {
  type: 'video' | 'podcast' | 'infographic' | 'resource';
  title: string;
  description: string;
  estimatedDuration?: string;
  placeholderPath: string;
  notes?: string;
};

type ChapterWithOptionalMedia = Chapter & { media?: MediaPlaceholder[] };

interface Props {
  chapter: ChapterWithOptionalMedia;
}

const badgeByType: Record<MediaPlaceholder['type'], string> = {
  video: 'Video',
  podcast: 'Podcast',
  infographic: 'Infografica',
  resource: 'Risorsa',
};

const IconByType: Record<MediaPlaceholder['type'], React.ReactNode> = {
  video: <Film className="h-4 w-4" />,
  podcast: <Headphones className="h-4 w-4" />,
  infographic: <Image className="h-4 w-4" />,
  resource: <FileText className="h-4 w-4" />,
};

function defaultSlots(chapter: ChapterWithOptionalMedia): MediaPlaceholder[] {
  const base = `media/ch${String(chapter.id).padStart(2, '0')}-${chapter.slug}`;
  return [
    {
      type: 'infographic',
      title: 'Infografica capitolo',
      description: 'Sintesi visiva dei concetti principali del capitolo.',
      placeholderPath: `${base}/infographic.png`,
      notes: 'placeholder',
    },
    {
      type: 'video',
      title: 'Video capitolo',
      description: 'Spiegazione visuale del capitolo con esempi e contesto operativo.',
      estimatedDuration: '8-12 min',
      placeholderPath: `${base}/video.mp4`,
      notes: 'placeholder',
    },
    {
      type: 'podcast',
      title: 'Podcast capitolo',
      description: 'Versione audio del capitolo per ripasso e consolidamento.',
      estimatedDuration: '10-15 min',
      placeholderPath: `${base}/podcast.mp3`,
      notes: 'placeholder',
    },
  ];
}

export default function ChapterMediaSlots({ chapter }: Props) {
  const slots = chapter.media && chapter.media.length > 0 ? chapter.media : defaultSlots(chapter);
  const [active, setActive] = useState<MediaPlaceholder | null>(null);
  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');

  return (
    <section className="mb-8 border-2 border-accent-cyan/40 bg-bg-surface p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Media del capitolo</p>
          <h3 className="mt-2 text-xl font-semibold text-text-primary">Asset e supporti di studio</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {slots.map((slot, idx) => (
          <div key={`${slot.type}-${idx}`} className=" border-2 border-accent-cyan/40 bg-bg-surface p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                {slot.type === 'video' && <Film className="h-4 w-4" />}
                {slot.type === 'podcast' && <Headphones className="h-4 w-4" />}
                {slot.type === 'infographic' && <Image className="h-4 w-4" />}
                {slot.type === 'resource' && <FileText className="h-4 w-4" />}
                <p className="text-sm font-semibold text-text-primary">{badgeByType[slot.type]}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 border-2 ${isReady(slot) ? 'bg-bg-surface text-accent-green border-accent-green/30' : 'bg-bg-surface text-accent-amber border-accent-amber/30'}`}>
                {isReady(slot) ? 'Ready' : 'In arrivo'}
              </span>
            </div>
            <p className="text-sm text-text-primary">{slot.title}</p>
            <p className="text-xs text-text-secondary mt-2 leading-6">{slot.description}</p>
            {slot.estimatedDuration ? <p className="text-xs text-text-secondary mt-2">Durata: {slot.estimatedDuration}</p> : null}
            {isReady(slot) ? (
              <button
                onClick={() => setActive(slot)}
                className="mt-3 text-sm text-accent-cyan hover:text-accent-green transition-colors flex items-center gap-1"
              >
                Apri media <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <p className="text-[11px] text-text-secondary mt-3 font-mono break-all">{slot.placeholderPath}</p>
            )}
          </div>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button onClick={() => setActive(null)} className="absolute top-4 right-4 text-white text-lg px-3 py-1.5 z-[121]" aria-label="Chiudi">
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-6xl max-h-[90vh]" onClick={(event) => event.stopPropagation()}>
            {active.type === 'infographic' ? (
              <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[90vh] object-contain" />
            ) : active.type === 'video' ? (
              <video src={`/${active.placeholderPath}`} controls playsInline preload="metadata" className="w-full max-h-[90vh] bg-black" />
            ) : active.type === 'podcast' ? (
              <div className="bg-bg-surface border-2 border-accent-cyan/40 p-6">
                <p className="text-text-primary font-semibold mb-4">{active.title}</p>
                <audio src={`/${active.placeholderPath}`} controls className="w-full" preload="none" />
              </div>
            ) : (
              <a href={`/${active.placeholderPath}`} target="_blank" rel="noreferrer" className="text-accent-cyan underline">Apri risorsa</a>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
