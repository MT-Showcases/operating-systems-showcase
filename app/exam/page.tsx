import ExamSession from '@/components/exam/ExamSession';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
  title: 'Test Finale — Sistemi Operativi',
  description: 'Metti alla prova le tue conoscenze con 30 domande casuali tratte da tutti i 16 capitoli del corso.',
};

export default function ExamPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <header className="border-b border-border-subtle bg-bg-surface px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link
            href="/"
            className="-mx-2 inline-flex min-h-9 items-center gap-1 px-2 text-xs text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="text-border-subtle select-none">/</span>
          <span className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">
            Test Finale
          </span>
        </div>
      </header>

      <section className="px-6 py-12 pb-28 md:pb-12">
        <div className="max-w-3xl mx-auto">
          <ExamSession />
        </div>
      </section>
    </main>
  );
}
