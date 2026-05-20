import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTopButton from '@/components/BackToTopButton';
import { termsPage } from '@/data/pages/terms';

export const metadata: Metadata = {
  title: termsPage.title,
  description: `Ultimo aggiornamento: ${termsPage.lastUpdated}`,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <nav className="px-6 py-4 border-b border-border-subtle bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Termini di Servizio', href: '/terms' },
            ]}
          />
        </div>
      </nav>

      <header className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="terminal-heading text-5xl md:text-6xl font-extrabold mb-3 leading-tight">{termsPage.title}</h1>
          <p className="text-accent-green text-lg font-medium mb-2">Ultimo aggiornamento: {termsPage.lastUpdated}</p>
        </div>
      </header>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {termsPage.sections.map((section) => (
            <article key={section.title} className="border-2 border-accent-cyan/60 bg-bg-surface p-6">
              <h2 className="text-xl font-bold text-text-primary mb-3">{section.title}</h2>
              <p className="text-text-secondary text-sm leading-7 whitespace-pre-line">{section.content}</p>
            </article>
          ))}

          <div className="pt-4 text-center">
            <Link href="/" className="text-accent-cyan hover:text-accent-green text-sm">
              ← Torna alla homepage
            </Link>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}
