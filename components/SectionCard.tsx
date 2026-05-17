import { getTermsByIds } from '@/data/glossary';
import type { CommandReference, TerminalCommandBlock } from '@/data/types';
import { Lock, Terminal, Settings, Folder, Cpu, ChevronRight } from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';
import TerminalCommand from './TerminalCommand';
import CommandReferenceCard from './CommandReferenceCard';

interface SectionCardProps {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  glossaryIds: string[];
  terminalCommands?: TerminalCommandBlock[];
  commandReferences?: CommandReference[];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderInline(text: string, glossaryIds: string[]) {
  const terms = getTermsByIds(glossaryIds)
    .flatMap((term) => [term.term, ...(term.aliases ?? [])].map((label) => ({ id: term.id, label })))
    .sort((a, b) => b.label.length - a.label.length);

  if (terms.length === 0) return [text];

  const regex = new RegExp(`(${terms.map((term) => escapeRegExp(term.label)).join('|')})`, 'gi');
  const parts = text.split(regex).filter(Boolean);

  return parts.map((part, index) => {
    const match = terms.find((term) => term.label.toLowerCase() === part.toLowerCase());
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <GlossaryTerm key={`${match.id}-${index}`} termId={match.id}>
        {part}
      </GlossaryTerm>
    );
  });
}

function renderParagraph(paragraph: string, glossaryIds: string[], key: string) {
  const trimmed = paragraph.trim();
  if (!trimmed) return null;

  const lines = trimmed.split('\n').map((line) => line.trim()).filter(Boolean);
  const isList = lines.every((line) => line.startsWith('- '));

  if (isList) {
    return (
      <ul key={key} className="space-y-2 pl-5 text-sm leading-7 text-text-secondary">
        {lines.map((line) => (
          <li key={line} className="list-disc">
            {renderInline(line.replace(/^-\s*/, ''), glossaryIds)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={key} className="text-sm leading-8 text-text-secondary">
      {renderInline(trimmed, glossaryIds)}
    </p>
  );
}

function getSectionIcon(title: string) {
  const lower = title.toLowerCase();
  const iconProps = 'w-6 h-6 text-accent-cyan';
  if (lower.includes('permessi') || lower.includes('sicurezza')) return <Lock className={iconProps} strokeWidth={2} />;
  if (lower.includes('linux') || lower.includes('shell')) return <Terminal className={iconProps} strokeWidth={2} />;
  if (lower.includes('process')) return <Settings className={iconProps} strokeWidth={2} />;
  if (lower.includes('memoria') || lower.includes('file')) return <Folder className={iconProps} strokeWidth={2} />;
  if (lower.includes('cpu') || lower.includes('architettura')) return <Cpu className={iconProps} strokeWidth={2} />;
  return null;
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
    <section id={id} className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-border-subtle bg-[linear-gradient(180deg,rgba(22,27,34,0.98),rgba(13,17,23,0.98))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10">
            {getSectionIcon(title)}
          </div>
          <div>
            <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-text-secondary">Sezione operativa</p>
            <h2 className="terminal-heading text-2xl font-semibold text-text-primary">{title}</h2>
          </div>
        </div>
        <span className="hidden rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-green md:inline-flex">
          focus
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph, index) => renderParagraph(paragraph, glossaryIds, `${id}-${index}`))}
      </div>

      {keyPoints && keyPoints.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-accent-green/20 bg-accent-green/8 p-4">
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Da tenere a mente</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-text-primary">
            {keyPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <ChevronRight size={18} className="mt-0.5 flex-shrink-0 text-accent-green" />
                <span>{point}</span>
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
    </section>
  );
}
