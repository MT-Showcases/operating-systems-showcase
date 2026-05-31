"use client";

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
  resource: '📄 Risorsa'
};

const mediaTypeOrder: Record<MediaPlaceholder['type'], number> = {
  infographic: 0,
  video: 1,
  podcast: 2,
  resource: 3,
};

export default function SectionMediaSlots({ chapterId, chapterSlug, sectionIndex, sectionTitle, sectionContent, media, isWorkflow = false, customSourceText, hideSourceToggle = false }: Props & { isWorkflow?: boolean; customSourceText?: string; hideSourceToggle?: boolean }) {
  // Rule: no defined media means no automatic placeholder rendering
  const slotsRaw = media ?? [];
  // UX choice: hide resource cards until a real downloadable asset exists
  const visible = slotsRaw.filter((slot) => !(slot.type === 'resource' && !slot.notes?.toLowerCase().includes('ready')));
  const slots = [...visible].sort((a, b) => mediaTypeOrder[a.type] - mediaTypeOrder[b.type]);
  const [active, setActive] = useState<MediaPlaceholder | null>(null);
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);

  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');

  const sourceText = customSourceText || `CAPITOLO ${String(chapterId).padStart(2, '0')} — ${chapterSlug}\nSEZIONE ${sectionIndex + 1}: ${sectionTitle}\n\nCONTESTO:\n${sectionContent}\n\nOBIETTIVO:\nGenera un contenuto didattico chiaro, pratico, startup-friendly basato SOLO su questo contesto.\n\nOUTPUT RICHIESTI (scegline uno):\n1) Script video 60-120s\n2) Testo infografica (titolo + 5 bullet + 1 warning + 1 takeaway)\n3) Voiceover breve.\n\nVINCOLI:\n- Linguaggio semplice\n- Niente allucinazioni\n- Coerenza con il contesto fornito`;

  if (slots.length === 0) return null;

  return (
    <>
      <div className={slots.length === 1 ? 'mb-3 grid grid-cols-1 gap-3' : 'mb-3 grid grid-cols-1 md:grid-cols-2 gap-3'}>
        {slots.map((slot, idx) => (
          <div
            key={`${slot.type}-${idx}`}
            className={
              isReady(slot)
                ? 'border-2 border-accent-cyan/40 bg-bg-surface p-0'
                : 'border-2 border-accent-amber/40 bg-bg-surface/50 p-3'
            }
          >
            {isReady(slot) ? (
              slot.type === 'infographic' ? (
                <button onClick={() => setActive(slot)} className="block w-full text-left cursor-pointer" style={{ cursor: 'pointer' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/${slot.placeholderPath}`}
                    alt={slot.title}
                    className={slots.length === 1 ? 'w-full h-auto object-contain border-2 border-accent-cyan/20 hover:border-accent-cyan/50 transition bg-black/20 cursor-pointer' : 'w-full h-72 object-contain border-2 border-accent-cyan/20 hover:border-accent-cyan/50 transition bg-black/20 cursor-pointer'}
                    loading="lazy"
                  />
                </button>
              ) : slot.type === 'video' ? (
                <button onClick={() => setActive(slot)} className="relative block w-full text-left cursor-pointer" style={{ cursor: 'pointer' }}>
                  <video
                    src={`/${slot.placeholderPath}`}
                    preload="metadata"
                    muted
                    playsInline
                    className={slots.length === 1 ? 'w-full h-auto object-contain border-2 border-accent-cyan/20 bg-black pointer-events-none' : 'w-full h-72 object-contain border-2 border-accent-cyan/20 bg-black pointer-events-none'}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-text-primary/90 text-xs bg-black/40">
                    ▶ Apri video
                  </span>
                </button>
              ) : slot.type === 'podcast' ? (
                <div className="border-2 border-accent-cyan/40 bg-bg-surface p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-accent-cyan text-sm font-medium">Podcast</p>
                  </div>
                  <audio src={`/${slot.placeholderPath}`} controls className="w-full" preload="none" />
                </div>
              ) : null
            ) : (
              <>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-accent-cyan text-sm font-medium">{badgeByType[slot.type]}</p>
                  <span className="text-[10px] px-2 py-0.5 border-2 border-accent-amber/30 bg-accent-amber/10 text-accent-amber">In arrivo</span>
                </div>
                <p className="text-xs text-text-secondary mb-1">{slot.description}</p>
                <p className="text-xs text-accent-cyan font-mono break-all mt-1">{slot.placeholderPath}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {!hideSourceToggle && <div className="mb-8">
        <button
          onClick={() => setShowSource((v) => !v)}
          className="text-xs px-3 py-1.5 border-2 border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition mr-2"
        >
          {showSource 
            ? (isWorkflow ? 'Nascondi fonte workflow' : 'Nascondi fonte sezione') 
            : (isWorkflow ? 'Mostra fonte workflow' : 'Mostra fonte sezione')}
        </button>
        {showSource && (
          <div className="mt-2 border-2 border-accent-cyan/40 bg-bg-surface/50 p-3">
            <textarea
              readOnly
              value={sourceText}
              className="w-full min-h-[180px] bg-bg-surface text-text-secondary text-xs p-3 border-2 border-accent-cyan/20 font-mono"
            />
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(sourceText);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="mt-2 text-xs px-3 py-1.5 border-2 border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition"
            >
              {copied ? 'Copiato ✓' : 'Copia fonte'}
            </button>
          </div>
        )}
      </div>}

      {active && (
        <div className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-text-primary/90 hover:text-text-primary text-lg px-3 py-1.5 z-[121]"
          >
            ✕
          </button>

          <div className="w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {active.type === 'infographic' ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[90vh] object-contain" />
              </>
            ) : active.type === 'video' ? (
              <video
                src={`/${active.placeholderPath}`}
                controls
                playsInline
                preload="metadata"
                className="w-full max-h-[90vh] bg-black"
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
