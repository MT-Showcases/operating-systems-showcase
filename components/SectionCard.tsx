'use client';

import type { CommandReference, TerminalCommandBlock } from '@/data/types';
import { Lock, Terminal, Settings, Folder, Cpu, ChevronRight, HardDrive, Network, BookOpen, Shield, Clock, Monitor, MessageSquare } from 'lucide-react';
import TerminalCommand from './TerminalCommand';
import CommandReferenceCard from './CommandReferenceCard';
import { renderInline, renderParagraph } from './RichText';

interface SectionCardProps {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  glossaryIds: string[];
  terminalCommands?: TerminalCommandBlock[];
  commandReferences?: CommandReference[];
}


function getSectionIcon(title: string) {
  const lower = title.toLowerCase();
  const iconProps = 'w-6 h-6 text-accent-cyan';
  if (lower.includes('permessi') || lower.includes('sicurezza') || lower.includes('utent') || lower.includes('root') || lower.includes('sudo')) return <Lock className={iconProps} strokeWidth={2} />;
  if (lower.includes('linux') || lower.includes('shell') || lower.includes('terminale') || lower.includes('directory') || lower.includes('navigare') || lower.includes('comando') || lower.includes('errori') || lower.includes('abitudine')) return <Terminal className={iconProps} strokeWidth={2} />;
  if (lower.includes('process') || lower.includes('scheduling') || lower.includes('stati') || lower.includes('thread')) return <Settings className={iconProps} strokeWidth={2} />;
  if (lower.includes('memoria') || lower.includes('file') || lower.includes('storage') || lower.includes('copiare') || lower.includes('spostare')) return <Folder className={iconProps} strokeWidth={2} />;
  if (lower.includes('cpu') || lower.includes('architettura') || lower.includes('ram')) return <Cpu className={iconProps} strokeWidth={2} />;
  if (lower.includes('input') || lower.includes('output') || lower.includes('dispositiv')) return <HardDrive className={iconProps} strokeWidth={2} />;
  if (lower.includes('kernel') || lower.includes('system call') || lower.includes('user space')) return <Shield className={iconProps} strokeWidth={2} />;
  if (lower.includes('rete') || lower.includes('network')) return <Network className={iconProps} strokeWidth={2} />;
  if (lower.includes('virtual') || lower.includes('clock') || lower.includes('tempo')) return <Clock className={iconProps} strokeWidth={2} />;
  if (lower.includes('monitor') || lower.includes('schermo')) return <Monitor className={iconProps} strokeWidth={2} />;
  return <BookOpen className={iconProps} strokeWidth={2} />;
}

export default function SectionCard({
  id,
  title,
  content,
  keyPoints,
  glossaryIds,
  terminalCommands,
  commandReferences,
}: SectionCardProps) {
  const paragraphs = content.split(/\n\n+/g);

  return (
    <section id={id} className="scroll-mt-24 overflow-hidden border-2 border-accent-cyan bg-bg-primary p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border-2 border-accent-cyan/60 bg-bg-surface">
            {getSectionIcon(title)}
          </div>
          <div>
            <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-text-secondary">Sezione operativa</p>
            <h2 className="terminal-heading text-2xl font-semibold text-text-primary">{title}</h2>
          </div>
        </div>

      </div>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph, index) => renderParagraph(paragraph, glossaryIds, `${id}-${index}`))}
      </div>

      {keyPoints && keyPoints.length > 0 ? (
        <div className="mt-6 border-2 border-accent-green/60 bg-bg-surface p-4">
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Da tenere a mente</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-text-primary">
            {keyPoints.map((point, i) => (
              <li key={`kp-${i}`} className="flex gap-3">
                <ChevronRight size={18} className="mt-0.5 flex-shrink-0 text-accent-green" />
                <span>{renderInline(point, glossaryIds, `kp-${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {terminalCommands && terminalCommands.length > 0 ? (
        <div className="mt-6 space-y-4">
          {terminalCommands.map((block) => (
            <TerminalCommand key={`${id}-${block.command}`} {...block} />
          ))}
        </div>
      ) : null}

      {commandReferences && commandReferences.length > 0 ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {commandReferences.map((reference) => (
            <CommandReferenceCard key={`${id}-${reference.command}`} {...reference} />
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent('nix:open', { detail: { prompt: `Spiegami questa sezione: ${title}` } })
            );
          }}
          className="inline-flex items-center gap-2 border border-accent-cyan/40 bg-bg-surface px-3 py-1.5 text-xs text-accent-cyan transition hover:border-accent-cyan hover:bg-accent-cyan/10"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          Chiedi a Nix
        </button>
      </div>
    </section>
  );
}
