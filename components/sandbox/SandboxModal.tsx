'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ChevronRight, ExternalLink, X } from 'lucide-react';

const KILLERCODA_UBUNTU_URL = 'https://killercoda.com/playgrounds/scenario/ubuntu';
const KILLERCODA_PLAYGROUNDS_URL = 'https://killercoda.com/playgrounds';

interface SandboxModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SandboxModal({ open, onOpenChange }: SandboxModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[60] max-h-[90vh] w-[min(92vw,860px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-accent-cyan/40 bg-bg-surface p-6 text-text-primary shadow-2xl">
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-accent-cyan/40 pb-4">
            <div className="flex-1">
              <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Sandbox Linux</p>
              <Dialog.Title className="mt-2 text-3xl font-semibold text-text-primary">Pratica rapida su Linux reale</Dialog.Title>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
                Ambiente libero di prova per comandi Linux reali tramite playground esterno. La sessione può essere effimera, quindi è perfetta per pratica veloce, test di comandi e piccoli workflow operativi.
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-accent-cyan/40 text-text-secondary transition hover:border-accent-cyan hover:text-accent-cyan"
                aria-label="Chiudi sandbox"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <section className="border-2 border-accent-green/40 bg-bg-primary/40 p-5">
              <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-green">Linux reale</p>
              <h2 className="mt-2 text-2xl font-bold text-text-primary">Ubuntu Playground Killercoda</h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Se vuoi una vera macchina Linux stile playground, Killercoda è la strada più semplice: apri il terminale, provi i comandi e lavori in una sessione già pronta senza configurare nulla in locale.
              </p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                La sessione è effimera: se chiudi o ricarichi puoi perderla, ed è esattamente il motivo per cui è utile per pratica rapida, prove, errori controllati e piccoli test operativi.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={KILLERCODA_UBUNTU_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-accent-green/40 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green transition hover:bg-accent-green/20"
                >
                  Apri Ubuntu Playground <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={KILLERCODA_PLAYGROUNDS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan/20"
                >
                  Sfoglia tutti i playground <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <div className="border border-accent-cyan/25 bg-bg-primary/30 p-4">
                <p className="terminal-heading text-[10px] uppercase tracking-[0.2em] text-accent-cyan">Quando usarlo</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Per provare comandi Linux reali, fare esercizi rapidi, testare pipeline e validare piccoli workflow senza toccare il tuo ambiente locale.
                </p>
              </div>
              <div className="border border-accent-cyan/25 bg-bg-primary/30 p-4">
                <p className="terminal-heading text-[10px] uppercase tracking-[0.2em] text-accent-cyan">Cosa aspettarti</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Sessione temporanea, ambiente pronto all&apos;uso e libertà di sperimentare. Non trattarlo come ambiente persistente o produzione.
                </p>
              </div>
              <div className="border border-accent-cyan/25 bg-bg-primary/30 p-4">
                <p className="terminal-heading text-[10px] uppercase tracking-[0.2em] text-accent-cyan">Approccio giusto</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Parti da comandi semplici, verifica ogni step e usa il playground per capire davvero output, errori e stato finale dei comandi.
                </p>
              </div>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
