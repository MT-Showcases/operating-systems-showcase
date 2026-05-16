import Link from 'next/link';
import { chapters } from '@/data/chapters';
import { chapterEmojis } from '@/data/chapterEmojis';
import SearchBar from '@/components/SearchBar';

const totalHours = chapters.reduce((total, chapter) => total + Number(chapter.duration.replace('h', '').replace('.5', '.5')), 0);

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 text-text-primary sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-[2rem] border border-border-subtle bg-bg-surface/90 p-8 sm:p-10">
          <div className="inline-flex rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-green">
            Terminal Theme · Steve Jobs Academy Catania
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.8fr]">
            <div>
              <h1 className="terminal-heading text-4xl font-bold sm:text-6xl">Operating Systems Showcase</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
                Un percorso in 8 capitoli per capire davvero come lavora un sistema operativo: dalla teoria essenziale su kernel,
                processi e memoria fino alla pratica Linux con comandi, permessi, utenti e buone abitudini operative.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/chapters/${chapters[0].slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-accent-green/30 bg-accent-green/10 px-5 py-2 text-sm font-medium text-accent-green transition hover:border-accent-green hover:bg-accent-green/15"
                >
                  Inizia dal Capitolo 1
                </Link>
                <a
                  href="#chapters"
                  className="inline-flex min-h-11 items-center rounded-full border border-border-subtle px-5 py-2 text-sm text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan"
                >
                  Esplora i capitoli
                </a>
              </div>
            </div>

            <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { label: 'Capitoli', value: chapters.length, tone: 'text-accent-green' },
                { label: 'Ore stimate', value: `${totalHours}h`, tone: 'text-accent-cyan' },
                { label: 'Focus', value: 'Linux pratico', tone: 'text-accent-amber' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-border-subtle bg-black/20 p-5">
                  <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-text-secondary">{item.label}</p>
                  <p className={`mt-3 text-2xl font-semibold ${item.tone}`}>{item.value}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border-subtle bg-bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Ricerca rapida</p>
              <h2 className="mt-2 text-2xl font-semibold text-text-primary">Trova concetti, capitoli e temi chiave</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-text-secondary">
              Cerca termini come kernel, processi, file system, sudo o permessi per saltare subito al capitolo giusto.
            </p>
          </div>
          <div className="mt-6">
            <SearchBar />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Teoria utile, non polverosa',
              text: 'Ogni concetto tecnico viene agganciato a un problema reale: non accumuli definizioni, costruisci comprensione.',
            },
            {
              title: 'Linux come laboratorio',
              text: 'Dal capitolo 6 in poi il percorso mette le mani sul sistema con comandi, output attesi e warning pratici.',
            },
            {
              title: 'Mindset operativo sano',
              text: 'L’obiettivo finale non è ricordare comandi a memoria, ma usarli con contesto, metodo e cautela.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border-subtle bg-bg-surface p-6">
              <h3 className="terminal-heading text-lg font-semibold text-accent-cyan">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.text}</p>
            </div>
          ))}
        </section>

        <section id="chapters" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Percorso modulo</p>
              <h2 className="mt-2 text-3xl font-semibold text-text-primary">Roadmap completa dei capitoli</h2>
            </div>
            <p className="text-sm text-text-secondary">Dal quadro generale all’uso reale di Linux.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {chapters.map((chapter) => (
              <article key={chapter.slug} className="flex h-full flex-col rounded-[1.75rem] border border-border-subtle bg-bg-surface p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl">{chapterEmojis[chapter.id] ?? '📘'}</span>
                  <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                    {chapter.duration}
                  </span>
                </div>
                <p className="terminal-heading mt-5 text-xs uppercase tracking-[0.24em] text-text-secondary">
                  Capitolo {String(chapter.id).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-text-primary">{chapter.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">{chapter.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {chapter.objectives.slice(0, 2).map((objective) => (
                    <span key={objective} className="rounded-full border border-border-subtle bg-black/20 px-3 py-1 text-xs text-text-secondary">
                      {objective}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/chapters/${chapter.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green transition hover:border-accent-green hover:bg-accent-green/15"
                >
                  Apri capitolo →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
