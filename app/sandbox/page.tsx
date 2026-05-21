import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTopButton from '@/components/BackToTopButton';

const KILLERCODA_UBUNTU_URL = 'https://killercoda.com/playgrounds/scenario/ubuntu';
const KILLERCODA_PLAYGROUNDS_URL = 'https://killercoda.com/playgrounds';

export const metadata: Metadata = {
  title: 'Sandbox Terminale',
  description: 'Accesso rapido a una sessione Linux reale tramite playground Killercoda.',
  alternates: { canonical: '/sandbox' },
};

export default function SandboxPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <header className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Sandbox', href: '/sandbox' }]} />
          <h1 className="mt-4 terminal-heading text-4xl md:text-5xl font-extrabold">Sandbox Linux</h1>
          <p className="mt-3 max-w-3xl text-text-secondary leading-8">
            Ambiente libero di prova per comandi Linux reali tramite playground esterno. La sessione puo essere effimera, quindi e perfetta per pratica veloce.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#chapters"
              className="inline-flex items-center gap-2 border border-accent-cyan/40 px-4 py-2 text-sm text-accent-cyan hover:bg-accent-cyan/10"
            >
              Torna ai capitoli <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <section className="border-2 border-accent-green/50 bg-bg-surface p-6">
            <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-green">Linux reale (consigliato)</p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary">Ubuntu Playground Killercoda</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary max-w-3xl">
              Se vuoi una vera macchina Linux stile playground, puoi usarla direttamente qui sotto con iframe.
              La sessione e effimera: se chiudi o ricarichi puoi perderla, e va benissimo per pratica rapida.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={KILLERCODA_UBUNTU_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-accent-green/40 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green hover:bg-accent-green/20"
              >
                Apri Ubuntu Playground <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={KILLERCODA_PLAYGROUNDS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-semibold text-accent-cyan hover:bg-accent-cyan/20"
              >
                Sfoglia tutti i playground <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 rounded-none border-2 border-accent-cyan/40 bg-bg-primary p-2">
              <iframe
                title="Killercoda Ubuntu Playground"
                src={KILLERCODA_UBUNTU_URL}
                className="h-[70vh] w-full border-0 bg-black"
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-text-secondary">
              Se il provider blocca l&apos;iframe (header di sicurezza), usa &quot;Apri Ubuntu Playground&quot; in nuova scheda.
            </p>
          </section>
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}
