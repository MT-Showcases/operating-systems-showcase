'use client';

import type { ProjectLab } from '@/data/types';
import { Check, ChevronDown, ChevronUp, Copy, Download, FlaskConical, Trophy } from 'lucide-react';
import TerminalCommand from '@/components/content/TerminalCommand';
import NixButton from '@/components/tutor/NixButton';
import UserGroupTree from '@/components/content/UserGroupTree';
import { renderInline } from '@/components/ui/RichText';
import { useState } from 'react';

function buildStepPrompt(goal: string, command: string, context?: string | string[]): string {
  const contextStr = Array.isArray(context) ? context.join(' ') : context;
  return [
    `Passo del progetto: "${goal}"`,
    contextStr ? `Contesto: ${contextStr}` : '',
    `Comando: ${command}`,
    '',
    'Spiegami perché si fa così, cosa può andare storto e come verifico che il risultato sia corretto.',
  ]
    .filter(Boolean)
    .join('\n');
}

interface ProjectLabBlockProps {
  projectLab: ProjectLab;
  glossaryIds?: string[];
}

function DownloadLinkRow({ link }: { link: ProjectLab['downloadLinks'] extends (infer T)[] | undefined ? T : never }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyContent() {
    if (!link.content) return;
    navigator.clipboard.writeText(link.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="border border-accent-cyan/40 bg-bg-surface">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2.5">
        <a
          href={`/downloads/${link.filename}`}
          download
          className="inline-flex items-center gap-2 border border-accent-cyan/50 bg-accent-cyan/10 px-3 py-1.5 text-sm font-medium text-accent-cyan transition hover:bg-accent-cyan/20 hover:border-accent-cyan"
        >
          <Download className="h-4 w-4 shrink-0" />
          {link.label}
        </a>
        {link.description && (
          <span className="text-text-secondary text-xs">{link.description}</span>
        )}
        {link.content && (
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={copyContent}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-secondary border border-border-subtle hover:text-accent-cyan hover:border-accent-cyan/40 transition"
            >
              {copied ? <Check className="h-3 w-3 text-accent-green" /> : <Copy className="h-3 w-3" />}
              {copied ? 'Copiato' : 'Copia'}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-secondary border border-border-subtle hover:text-accent-cyan hover:border-accent-cyan/40 transition"
            >
              {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              {open ? 'Nascondi' : 'Mostra'}
            </button>
          </div>
        )}
      </div>
      {open && link.content && (
        <pre className="border-t border-border-subtle bg-bg-primary px-4 py-4 text-xs text-text-secondary font-mono leading-6 overflow-x-auto whitespace-pre">
          {link.content}
        </pre>
      )}
    </div>
  );
}

export default function ProjectLabBlock({ projectLab, glossaryIds = [] }: ProjectLabBlockProps) {
  const { title, scenario, diagram, downloadLinks, steps, winCondition } = projectLab;

  return (
    <div className="border-2 border-accent-green/50 bg-bg-primary overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-accent-green/30 bg-bg-surface px-5 py-4">
        <FlaskConical className="h-5 w-5 shrink-0 text-accent-green" strokeWidth={1.5} />
        <div>
          <p className="terminal-heading text-[9px] uppercase tracking-[0.28em] text-accent-green/60">
            Progetto guidato
          </p>
          <p className="terminal-heading mt-0.5 text-sm font-semibold text-accent-green">{title}</p>
        </div>
      </div>

      <div className="px-5 py-6 space-y-8">
        {/* Scenario */}
        <div>
          <p className="terminal-heading text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-3">
            Il tuo mandato
          </p>
          <p className="text-sm leading-7 text-text-primary border-l-2 border-accent-green/40 pl-4">
            {renderInline(scenario, glossaryIds, 'proj-scenario')}
          </p>
        </div>

        {/* Downloads */}
        {downloadLinks && downloadLinks.length > 0 && (
          <div>
            <p className="terminal-heading text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-3">
              Script e risorse
            </p>
            <div className="flex flex-col gap-2">
              {downloadLinks.map((link) => (
                <DownloadLinkRow key={link.filename} link={link} />
              ))}
            </div>
          </div>
        )}

        {/* Diagram */}
        <div>
          <p className="terminal-heading text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-4">
            Struttura del sistema
          </p>
          <div className="border border-border-subtle bg-bg-surface/40 p-4 overflow-x-auto">
            <UserGroupTree root={diagram} />
          </div>
        </div>

        {/* Steps */}
        <div>
          <p className="terminal-heading text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-4">
            Procedura — {steps.length} passi
          </p>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                {/* Step number + connector */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center border-2 border-accent-green/50 bg-bg-surface terminal-heading text-xs font-bold text-accent-green">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-accent-green/15 min-h-6" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0 pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-green/80">
                      {step.goal}
                    </p>
                    <NixButton
                      size="xs"
                      prompt={buildStepPrompt(step.goal, step.command.command, step.context)}
                    />
                  </div>

                  {step.context && (
                    Array.isArray(step.context) ? (
                      <ul className="mb-3 space-y-1">
                        {step.context.map((line, j) => (
                          <li key={j} className="flex gap-2 text-sm leading-6 text-text-secondary italic">
                            <span className="shrink-0 text-accent-green/50">·</span>
                            <span className="flex-1 [&_strong]:whitespace-nowrap">{renderInline(line, [], `proj-ctx-${i}-${j}`)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-3 text-sm leading-6 text-text-secondary italic">
                        {renderInline(step.context, [], `proj-ctx-${i}`)}
                      </p>
                    )
                  )}

                  <TerminalCommand
                    {...step.command}
                    showNix={false}
                    glossaryIds={glossaryIds}
                  />

                  {step.whyItMatters && (
                    <div className="mt-3 flex gap-2 border-l-2 border-accent-amber/40 pl-3">
                      <p className="text-xs leading-6 text-text-secondary">
                        <span className="terminal-heading text-accent-amber text-[10px] uppercase tracking-wider mr-2">
                          perché:
                        </span>
                        {renderInline(step.whyItMatters, glossaryIds, `proj-why-${i}`)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Win condition */}
        {winCondition && (
          <div className="flex items-start gap-3 border-2 border-accent-green/40 bg-accent-green/5 p-4">
            <Trophy className="h-5 w-5 shrink-0 text-accent-green mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="terminal-heading text-[10px] uppercase tracking-[0.22em] text-accent-green mb-1">
                Hai completato il progetto se…
              </p>
              <p className="text-sm leading-7 text-text-primary">{renderInline(winCondition, glossaryIds, 'proj-win')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
