import { chapters } from '@/data/chapters';
import Card from '@/components/Card';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import QuizScoreDashboard from '@/components/QuizScoreDashboard';
import Link from 'next/link';
import { Activity, ChevronRight, Clock3, Command, Cpu, GitBranch, HardDrive, KeyRound, Laptop, Link2, Monitor, Scale, Shield, ShieldCheck, TerminalSquare, Wrench } from 'lucide-react';
import GlossaryTooltip from '@/components/GlossaryTooltip';

const totalHours = Math.round(chapters.reduce((total, chapter) => total + Number.parseFloat(chapter.duration.replace('h', '')), 0));
const totalQuizQuestions = chapters.reduce((total, chapter) => total + (chapter.quiz?.length ?? 0), 0);
const quizChapterSlugs = chapters.filter((chapter) => (chapter.quiz?.length ?? 0) > 0).map((chapter) => chapter.slug);
const searchableChapters = chapters.map((chapter) => ({
  id: chapter.id,
  slug: chapter.slug,
  title: chapter.title,
  description: chapter.description,
  objectives: chapter.objectives,
  sectionTitles: chapter.sections.map((section) => section.title),
  keyTakeaways: chapter.keyTakeaways,
}));

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
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/openclaw"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-accent-green/10 border border-accent-green/40 text-accent-green hover:bg-accent-green/20 transition-all text-sm font-semibold"
              >
                Scopri OpenClaw: come nasce questo corso <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary items-center">
            <div className="flex items-center gap-2">
              <span className="text-accent-green font-extrabold text-3xl">{chapters.length}</span>
              <span className="text-sm">Capitoli</span>
            </div>
            <div className="w-px bg-border-subtle hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan font-extrabold text-3xl">~30h</span>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 transition-all text-sm font-medium"
            >
              Glossario
            </Link>
          </div>
        </div>
      </header>

      <section className="py-8 px-6 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <QuizScoreDashboard quizChapterSlugs={quizChapterSlugs} />
        </div>
      </section>

      <section id="chapters" className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Percorso di Apprendimento</h2>
              <p className="text-sm text-text-secondary mt-1">Dalla teoria di base all&apos;uso concreto del terminale Linux.</p>
            </div>
            <span className="text-sm text-text-secondary">{chapters.length} capitoli disponibili</span>
          </div>

          <SearchBar chapters={searchableChapters} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => {
              return (
              <Card key={chapter.id} className="h-full flex flex-col">
                <div className="space-y-3 flex-1 pb-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-accent-green text-bg-primary px-2 py-0.5 rounded-none text-xs font-bold">
                      Cap. {chapter.id}
                    </span>
                    <span className="rounded-none border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                      {chapter.duration}
                    </span>
                  </div>

                  <div className="text-3xl">
                    {chapter.id === 1 && <Laptop className="h-8 w-8" />}
                    {chapter.id === 2 && <Cpu className="h-8 w-8" />}
                    {chapter.id === 3 && <Shield className="h-8 w-8" />}
                    {chapter.id === 4 && <Activity className="h-8 w-8" />}
                    {chapter.id === 5 && <HardDrive className="h-8 w-8" />}
                    {chapter.id === 6 && <TerminalSquare className="h-8 w-8" />}
                    {chapter.id === 7 && <Scale className="h-8 w-8" />}
                    {chapter.id === 8 && <Wrench className="h-8 w-8" />}
                    {chapter.id === 9 && <Command className="h-8 w-8" />}
                    {chapter.id === 10 && <KeyRound className="h-8 w-8" />}
                    {chapter.id === 11 && <ShieldCheck className="h-8 w-8" />}
                    {chapter.id === 12 && <GitBranch className="h-8 w-8" />}
                    {chapter.id === 13 && <Monitor className="h-8 w-8" />}
                    {chapter.id === 14 && <Link2 className="h-8 w-8" />}
                    {chapter.id === 15 && <Clock3 className="h-8 w-8" />}
                  </div>

                  <h3 className="text-base font-bold text-text-primary leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-7">{chapter.description}</p>
                  <div className="text-xs text-text-secondary">
                    {chapter.sections.length} sezioni · {chapter.keyTakeaways.length} punti chiave
                  </div>
                </div>

                <Button href={`/chapters/${chapter.slug}`} className="w-full text-center py-3 mt-auto flex items-center justify-center gap-2">
                  Leggi Capitolo <ChevronRight className="h-4 w-4" />
                </Button>
              </Card>
              );
            })}
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
                <Link href="/openclaw" className="text-text-secondary hover:text-accent-cyan text-xs transition-colors">
                  OpenClaw
                </Link>
                <span className="text-text-secondary/40" aria-hidden="true">·</span>
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
