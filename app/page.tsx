'use client';

import { chapters } from '@/data/chapters';
import { chapterEmojis } from '@/data/chapterEmojis';
import Card from '@/components/Card';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import QuizScoreDashboard from '@/components/QuizScoreDashboard';
import Link from 'next/link';
import GlossaryTooltip from '@/components/GlossaryTooltip';

const totalHours = chapters.reduce((total, chapter) => total + Number.parseFloat(chapter.duration.replace('h', '')), 0);
const totalQuizQuestions = chapters.reduce((total, chapter) => total + (chapter.quiz?.length ?? 0), 0);

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <header className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="terminal-heading text-5xl md:text-6xl font-extrabold mb-3 leading-tight">
            Sistemi Operativi
          </h1>
          <p className="text-accent-green text-xl font-medium mb-2">
            Capire Linux e i Sistemi Operativi — davvero.
          </p>
          <p className="text-text-secondary text-base mb-8 max-w-3xl leading-8">
            Dal <GlossaryTooltip termId="kernel">kernel</GlossaryTooltip> ai comandi Linux, dai <GlossaryTooltip termId="process">processi</GlossaryTooltip> ai <GlossaryTooltip termId="permissions">permessi</GlossaryTooltip>: un percorso completo pensato per chi vuole usare Linux con consapevolezza reale.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary items-center">
            <div className="flex items-center gap-2">
              <span className="text-accent-green font-extrabold text-3xl">{chapters.length}</span>
              <span className="text-sm">Capitoli</span>
            </div>
            <div className="w-px bg-border-subtle hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan font-extrabold text-3xl">~{totalHours}h</span>
              <span className="text-sm">di percorso</span>
            </div>
            <div className="w-px bg-border-subtle hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent-amber font-extrabold text-3xl">{totalQuizQuestions}</span>
              <span className="text-sm">Domande quiz</span>
            </div>
            <div className="w-px bg-border-subtle hidden sm:block" />
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 transition-all text-sm font-medium"
            >
              📖 Glossario
            </Link>
          </div>
        </div>
      </header>

      <section className="py-8 px-6 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <QuizScoreDashboard />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Percorso di Apprendimento</h2>
              <p className="text-sm text-text-secondary mt-1">Dalla teoria di base all&apos;uso concreto del terminale Linux.</p>
            </div>
            <span className="text-sm text-text-secondary">{chapters.length} capitoli disponibili</span>
          </div>

          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="h-full flex flex-col">
                <div className="space-y-3 flex-1 pb-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-accent-green text-bg-primary px-2 py-0.5 rounded text-xs font-bold">
                      Cap. {chapter.id}
                    </span>
                    <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                      {chapter.duration}
                    </span>
                  </div>

                  <div className="text-3xl">{chapterEmojis[chapter.id] ?? '📘'}</div>

                  <h3 className="text-base font-bold text-text-primary leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-7">{chapter.description}</p>
                  <div className="text-xs text-text-secondary">
                    {chapter.sections.length} sezioni · {chapter.keyTakeaways.length} punti chiave
                  </div>
                </div>

                <Button href={`/chapters/${chapter.slug}`} className="w-full text-center py-3 mt-auto">
                  Leggi Capitolo →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-bg-surface border-t border-border-subtle py-10 px-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-text-primary font-semibold text-sm">Sistemi Operativi</p>
              <p className="text-text-secondary text-xs mt-0.5">Corso di Formazione Linux / OS</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-text-primary text-sm">Docente: <span className="text-accent-cyan font-medium">Michele Tornello</span></p>
              <div className="flex items-center justify-center sm:justify-end gap-3 mt-1">
                <Link href="/privacy" className="text-text-secondary hover:text-accent-cyan text-xs transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-text-secondary/40" aria-hidden="true">·</span>
                <Link href="/terms" className="text-text-secondary hover:text-accent-cyan text-xs transition-colors">
                  Termini di Servizio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
