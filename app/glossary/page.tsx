'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { glossaryTerms } from '@/data/glossary';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTopButton from '@/components/BackToTopButton';
import Button from '@/components/Button';
import Card from '@/components/Card';

const CATEGORIES = Array.from(new Set(glossaryTerms.map((term) => term.category))).sort();

export default function GlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesCategory = !selectedCategory || term.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="sticky top-0 z-40 border-b border-border-subtle bg-bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Glossario', href: '/glossary' },
            ]}
            className="bg-bg-surface px-0 py-3"
          />
        </div>
      </div>

      <header className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="terminal-heading text-5xl md:text-6xl font-extrabold mb-3 leading-tight">
            Glossario
          </h1>
          <p className="text-accent-green text-lg font-medium mb-2">
            Definizioni dei termini chiave del corso Sistemi Operativi
          </p>
          <p className="text-text-secondary text-base max-w-3xl leading-8">
            Una raccolta completa dei concetti fondamentali: dal kernel ai processi, dalla memoria virtuale ai permessi Linux.
          </p>
        </div>
      </header>

      <section className="py-8 px-6 border-b border-border-subtle bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Cerca un termine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-none bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-none font-medium transition-all text-sm ${
                selectedCategory === null
                  ? 'bg-accent-cyan text-bg-primary'
                  : 'bg-bg-primary border border-border-subtle text-text-secondary hover:border-accent-cyan'
              }`}
            >
              Tutte le categorie
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-none font-medium transition-all text-sm ${
                  selectedCategory === cat
                    ? 'bg-accent-green text-bg-primary'
                    : 'bg-bg-primary border border-border-subtle text-text-secondary hover:border-accent-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary mb-4">Nessun termine trovato.</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>
                Ripristina filtri
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((term) => (
                <Card
                  key={term.id}
                  className="hover:border-accent-cyan transition-all cursor-pointer"
                >
                  <div id={term.id} className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-accent-green leading-tight flex-1">
                      {term.term}
                    </h3>
                    <span className="inline-block bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      {term.category}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-7 mb-4">
                    {term.shortDefinition || term.definition}
                  </p>

                  {term.aliases && term.aliases.length > 0 && (
                    <div className="pt-4 border-t border-border-subtle">
                      <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">Alias</p>
                      <div className="flex flex-wrap gap-2">
                        {term.aliases.map((alias) => (
                          <span
                            key={alias}
                            className="text-xs bg-bg-surface border border-border-subtle px-2 py-1 rounded text-text-secondary"
                          >
                            {alias}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-text-secondary text-sm mb-4">
              Hai bisogno di aiuto? Torna al{' '}
              <Link href="/" className="text-accent-cyan hover:text-accent-green">
                corso principale
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}
