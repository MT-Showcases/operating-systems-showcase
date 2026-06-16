'use client';

import { getTermsByIds } from '@/data/glossary';
import GlossaryTerm from '@/components/glossary/GlossaryTerm';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function wrapGlossaryTerms(text: string, glossaryIds: string[], keyPrefix: string) {
  const terms = getTermsByIds(glossaryIds)
    .flatMap((term) => [term.term, ...(term.aliases ?? [])].map((label) => ({ id: term.id, label })))
    .sort((a, b) => b.label.length - a.label.length);

  if (terms.length === 0) return [<span key={keyPrefix}>{text}</span>];

  const regex = new RegExp(`\\b(${terms.map((term) => escapeRegExp(term.label)).join('|')})\\b`, 'gi');
  const parts = text.split(regex).filter(Boolean);

  return parts.map((part, index) => {
    const match = terms.find((term) => term.label.toLowerCase() === part.toLowerCase());
    if (!match) return <span key={`${keyPrefix}-${index}`}>{part}</span>;
    return (
      <GlossaryTerm key={`${keyPrefix}-${match.id}-${index}`} termId={match.id}>
        {part}
      </GlossaryTerm>
    );
  });
}

export function renderInline(text: string, glossaryIds: string[], keyPrefix: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      const content = part.slice(1, -1);
      return (
        <code
          key={`${keyPrefix}-code-${index}`}
          className="border border-accent-cyan/30 bg-bg-primary px-1.5 py-0.5 font-mono text-[0.9em] text-accent-cyan"
        >
          {content}
        </code>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-strong-${index}`} className="font-semibold text-text-primary">
          {wrapGlossaryTerms(content, glossaryIds, `${keyPrefix}-strong-${index}`)}
        </strong>
      );
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      const content = part.slice(1, -1);
      return (
        <em key={`${keyPrefix}-em-${index}`} className="italic text-text-primary/90">
          {wrapGlossaryTerms(content, glossaryIds, `${keyPrefix}-em-${index}`)}
        </em>
      );
    }

    return wrapGlossaryTerms(part, glossaryIds, `${keyPrefix}-plain-${index}`);
  });
}

export function renderParagraph(text: string, glossaryIds: string[], key: string) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
  const isList = lines.every((l) => l.startsWith('- '));

  if (isList) {
    return (
      <ul key={key} className="space-y-2 pl-5 text-sm leading-7 text-text-secondary">
        {lines.map((line, i) => (
          <li key={`${key}-li-${i}`} className="list-disc">
            {renderInline(line.replace(/^-\s*/, ''), glossaryIds, `${key}-li-${i}`)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={key} className="text-sm leading-8 text-text-secondary">
      {renderInline(trimmed, glossaryIds, key)}
    </p>
  );
}

export function renderBlocks(text: string, glossaryIds: string[], keyPrefix: string) {
  const blocks = text
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => renderParagraph(block, glossaryIds, `${keyPrefix}-${index}`));
}

interface RichTextProps {
  text: string;
  glossaryIds: string[];
  keyPrefix?: string;
  className?: string;
}

/**
 * Componente inline: rende una stringa con bold/italic + glossario
 */
export default function RichText({ text, glossaryIds, keyPrefix = 'rt', className }: RichTextProps) {
  return (
    <span className={className}>
      {renderInline(text, glossaryIds, keyPrefix)}
    </span>
  );
}
