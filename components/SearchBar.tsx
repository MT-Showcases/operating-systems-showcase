'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { chapters } from '@/data/chapters';
import { chapterEmojis } from '@/data/chapterEmojis';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(chapters, {
        keys: ['title', 'description', 'objectives', 'sections.title', 'sections.content', 'keyTakeaways'],
        threshold: 0.34,
      }),
    []
  );

  const results = query.trim().length >= 2 ? fuse.search(query.trim()).slice(0, 6) : [];

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">🔎</span>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cerca capitoli, concetti o comandi..."
          className="min-h-12 w-full rounded-2xl border border-border-subtle bg-bg-surface pl-12 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-accent-green"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-text-secondary transition hover:text-accent-cyan"
            aria-label="Pulisci ricerca"
          >
            ✕
          </button>
        ) : null}
      </div>

      {results.length > 0 ? (
        <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface shadow-2xl">
          {results.map(({ item }) => (
            <Link
              key={item.slug}
              href={`/chapters/${item.slug}`}
              onClick={() => setQuery('')}
              className="flex items-start gap-3 border-b border-border-subtle px-4 py-4 transition hover:bg-black/20 last:border-b-0"
            >
              <span className="text-xl">{chapterEmojis[item.id] ?? '📘'}</span>
              <div>
                <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                <p className="mt-1 text-xs leading-6 text-text-secondary">{item.description}</p>
              </div>
              <span className="ml-auto rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2 py-1 text-xs text-accent-cyan">
                CH{item.id}
              </span>
            </Link>
          ))}
        </div>
      ) : null}

      {query.trim().length >= 2 && results.length === 0 ? (
        <div className="absolute left-0 right-0 top-full z-30 mt-3 rounded-2xl border border-border-subtle bg-bg-surface px-4 py-3 text-sm text-text-secondary">
          Nessun risultato per “{query.trim()}”.
        </div>
      ) : null}
    </div>
  );
}
