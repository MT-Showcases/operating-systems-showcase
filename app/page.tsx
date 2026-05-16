import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary px-6 py-10 text-text-primary sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-3xl border border-border-subtle bg-bg-surface/80 p-8 backdrop-blur">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-green">
            Terminal Theme · SJA Catania
          </div>
          <h1 className="terminal-heading text-4xl font-bold text-accent-green sm:text-5xl">
            Sistemi Operativi
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
            Showcase didattico interattivo per la Steve Jobs Academy Catania. Struttura pronta per capitoli,
            quiz, glossario e mini-lab Linux.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Stato", value: "In costruzione", tone: "text-accent-amber" },
              { label: "Capitoli", value: `${chapters.length}/8`, tone: "text-accent-cyan" },
              { label: "Focus", value: "Linux pratico", tone: "text-accent-green" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border-subtle bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-text-secondary">{item.label}</p>
                <p className={`terminal-heading mt-2 text-lg font-semibold ${item.tone}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-border-subtle bg-bg-surface p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="terminal-heading text-xl font-semibold text-text-primary">
                Roadmap capitoli
              </h2>
              <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                Placeholder pronto
              </span>
            </div>
            <div className="rounded-2xl border border-dashed border-border-subtle bg-black/10 p-5 text-sm leading-7 text-text-secondary">
              I contenuti arriveranno dai subagenti capitolo. La struttura dati e le route sono già predisposte per
              ospitare gli slug `what-is-os`, `hardware-cpu`, `kernel`, `processes`, `memory-filesystem`,
              `linux-fundamentals`, `linux-commands`, `security-best-practices`.
            </div>
          </div>

          <aside className="rounded-3xl border border-border-subtle bg-bg-surface p-6">
            <h2 className="terminal-heading text-xl font-semibold text-text-primary">
              Prossimo step
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Aggiungere `data/chapters/ch01.ts` e popolare la route capitolo con componenti dedicati.
            </p>
            <Link
              href="/chapters/what-is-os"
              className="mt-6 inline-flex rounded-full border border-accent-green/40 bg-accent-green/10 px-4 py-2 text-sm font-medium text-accent-green transition hover:border-accent-green hover:bg-accent-green/15"
            >
              Test route capitolo
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
