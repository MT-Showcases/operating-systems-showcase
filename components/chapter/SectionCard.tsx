'use client';

import type { CommandReference, InfoTable, LabBlock, TerminalCommandBlock } from '@/data/types';
import { Lock, Terminal, Settings, Folder, Cpu, ChevronRight, HardDrive, Network, BookOpen, Shield, Clock, Monitor, FlaskConical } from 'lucide-react';
import TerminalCommand from '@/components/content/TerminalCommand';
import CommandReferenceCard from '@/components/content/CommandReferenceCard';
import InfoTableComponent from '@/components/content/InfoTable';
import LabBlockComponent from '@/components/content/LabBlock';
import NixButton from '@/components/tutor/NixButton';
import { renderInline, renderParagraph } from '@/components/ui/RichText';
import { useState, type ReactNode } from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  content: string;
  chapterSlug?: string;
  keyPoints?: string[];
  glossaryIds: string[];
  terminalCommands?: TerminalCommandBlock[];
  commandReferences?: CommandReference[];
  infoTables?: InfoTable[];
  labBlock?: LabBlock;
  isCompactChapter?: boolean;
}


interface CollapsibleSectionProps {
  label: string;
  icon: ReactNode;
  headerClassName: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

function CollapsibleSection({ label, icon, headerClassName, isOpen, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div className="mt-6">
      <button
        type="button"
        className={`w-full flex items-center justify-between text-left font-semibold text-[11px] uppercase tracking-[0.16em] border-b pb-2 mb-2 ${headerClassName}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="inline-flex items-center gap-2">
          {icon}
          {label}
        </span>
        <span className="ml-2 text-text-secondary">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen ? children : null}
    </div>
  );
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
  chapterSlug,
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
  const [showReferences, setShowReferences] = useState(true);
  const [showTerminals, setShowTerminals] = useState(true);

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
        <CollapsibleSection
          label={labBlock.title || 'Laboratorio'}
          icon={<FlaskConical size={14} className="text-accent-green" />}
          headerClassName="text-accent-green border-accent-green/30 btn-glow-green-bottom"
          isOpen={showLab}
          onToggle={() => setShowLab((v) => !v)}
        >
          <LabBlockComponent {...labBlock} glossaryIds={glossaryIds} chapterSlug={chapterSlug} />
        </CollapsibleSection>
      ) : null}

      {terminalCommands && terminalCommands.length > 0 ? (
        <CollapsibleSection
          label="Comandi terminale"
          icon={<Terminal size={14} className="text-accent-cyan" />}
          headerClassName="text-accent-cyan border-accent-cyan/30"
          isOpen={showTerminals}
          onToggle={() => setShowTerminals((v) => !v)}
        >
          <div className="space-y-4">
            {terminalCommands.map((block) => (
              <TerminalCommand key={`${id}-${block.command}`} {...block} glossaryIds={glossaryIds} />
            ))}
          </div>
        </CollapsibleSection>
      ) : null}

      {commandReferences && commandReferences.length > 0 ? (
        <CollapsibleSection
          label="Riferimenti rapidi"
          icon={<BookOpen size={14} className="text-text-secondary" />}
          headerClassName="text-text-secondary border-text-secondary/30"
          isOpen={showReferences}
          onToggle={() => setShowReferences((v) => !v)}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {commandReferences.map((reference) => (
              <CommandReferenceCard key={`${id}-${reference.command}`} {...reference} />
            ))}
          </div>
        </CollapsibleSection>
      ) : null}

      <div className="mt-6 flex justify-end">
        <NixButton
          prompt={`Sezione: "${title}"\n\n${keyPoints?.length ? 'Concetti chiave: ' + keyPoints.join(' | ') + '\n\n' : ''}Riassumi i concetti principali di questa sezione e chiarisci eventuali punti che possono creare confusione.`}
        />
      </div>
    </section>
  );
}
