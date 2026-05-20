'use client';

import type { CommandReference, InfoTable, LabBlock, TerminalCommandBlock } from '@/data/types';
import { Lock, Terminal, Settings, Folder, Cpu, ChevronRight, HardDrive, Network, BookOpen, Shield, Clock, Monitor } from 'lucide-react';
import TerminalCommand from './TerminalCommand';
import CommandReferenceCard from './CommandReferenceCard';
import InfoTableComponent from './InfoTable';
import LabBlockComponent from './LabBlock';
import NixButton from './NixButton';
import { renderInline, renderParagraph } from './RichText';
import { useState } from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  glossaryIds: string[];
  terminalCommands?: TerminalCommandBlock[];
  commandReferences?: CommandReference[];
  infoTables?: InfoTable[];
  labBlock?: LabBlock;
  isCompactChapter?: boolean;
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
  infoTables,
  labBlock,
  isCompactChapter = false,
}: SectionCardProps) {
  const paragraphs = content.split(/\n\n+/g);
  // Collapsible state
  const [showLab, setShowLab] = useState(!isCompactChapter);
  const [showReferences, setShowReferences] = useState(!isCompactChapter);
  const [showTerminals, setShowTerminals] = useState(!isCompactChapter);

  return (
    <section id={id} className={`scroll-mt-24 overflow-hidden border-2 border-accent-cyan bg-bg-primary ${isCompactChapter ? 'p-5' : 'p-6'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border-2 border-accent-cyan/60 bg-bg-surface">
            {getSectionIcon(title)}
          </div>
          <div>
            <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-text-secondary">Sezione operativa</p>
            <h2 className={`terminal-heading font-semibold text-text-primary ${isCompactChapter ? 'text-xl' : 'text-2xl'}`}>{title}</h2>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph, index) => renderParagraph(paragraph, glossaryIds, `${id}-${index}`))}
      </div>

      {keyPoints && keyPoints.length > 0 ? (
        <div className={`mt-6 border-2 border-accent-green/60 bg-bg-surface ${isCompactChapter ? 'p-3' : 'p-4'}`}>
          <p className="text-left text-accent-green font-medium text-[10px] uppercase tracking-[0.18em]">
            Da tenere a mente
          </p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-text-primary">
            {keyPoints.map((point, i) => (
              <li key={`kp-${i}`} className="flex gap-2">
                <ChevronRight size={15} className="mt-0.5 shrink-0 text-accent-green" />
                <span>{renderInline(point, glossaryIds, `kp-${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {infoTables && infoTables.length > 0 ? (
        <div className="mt-6 space-y-4">
          {infoTables.map((table, i) => (
            <InfoTableComponent key={`${id}-table-${i}`} {...table} />
          ))}
        </div>
      ) : null}

      {labBlock ? (
        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-between text-left text-accent-cyan font-semibold text-xs uppercase tracking-[0.22em] border-b border-accent-cyan/30 pb-2 mb-2"
            onClick={() => setShowLab((v) => !v)}
            aria-expanded={showLab}
          >
            {labBlock.title || 'Laboratorio'}
            <span className="ml-2">{showLab ? '▲' : '▼'}</span>
          </button>
          {showLab ? <LabBlockComponent {...labBlock} glossaryIds={glossaryIds} /> : null}
        </div>
      ) : null}

      {terminalCommands && terminalCommands.length > 0 ? (
        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-between text-left text-accent-cyan font-semibold text-xs uppercase tracking-[0.22em] border-b border-accent-cyan/30 pb-2 mb-2"
            onClick={() => setShowTerminals((v) => !v)}
            aria-expanded={showTerminals}
          >
            Comandi terminale
            <span className="ml-2">{showTerminals ? '▲' : '▼'}</span>
          </button>
          {showTerminals ? (
            <div className="space-y-4">
              {terminalCommands.map((block) => (
                <TerminalCommand key={`${id}-${block.command}`} {...block} glossaryIds={glossaryIds} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {commandReferences && commandReferences.length > 0 ? (
        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-between text-left text-accent-cyan font-semibold text-xs uppercase tracking-[0.22em] border-b border-accent-cyan/30 pb-2 mb-2"
            onClick={() => setShowReferences((v) => !v)}
            aria-expanded={showReferences}
          >
            Riferimenti rapidi
            <span className="ml-2">{showReferences ? '▲' : '▼'}</span>
          </button>
          {showReferences ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {commandReferences.map((reference) => (
                <CommandReferenceCard key={`${id}-${reference.command}`} {...reference} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 flex justify-end">
        <NixButton
          prompt={`Sezione: "${title}"\n\n${keyPoints?.length ? 'Concetti chiave: ' + keyPoints.join(' | ') + '\n\n' : ''}Riassumi i concetti principali di questa sezione e chiarisci eventuali punti che possono creare confusione.`}
        />
      </div>
    </section>
  );
}
