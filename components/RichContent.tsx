'use client';

import React from 'react';
import GlossaryTooltip from './GlossaryTooltip';
import { glossaryTerms } from '@/data/glossary';

const SORTED_TERMS = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

type Token =
  | { type: 'bold'; value: string }
  | { type: 'italic'; value: string }
  | { type: 'highlight'; value: string }
  | { type: 'newline' }
  | { type: 'text'; value: string };

function tokenizeMarkdown(text: string): Token[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|<<[^>]+>>|\n)/g).filter(Boolean);
  const tokens: Token[] = [];
  for (const part of parts) {
    if (part === '\n') tokens.push({ type: 'newline' });
    else if (part.startsWith('**') && part.endsWith('**')) tokens.push({ type: 'bold', value: part.slice(2, -2) });
    else if (part.startsWith('*') && part.endsWith('*')) tokens.push({ type: 'italic', value: part.slice(1, -1) });
    else if (part.startsWith('<<') && part.endsWith('>>')) tokens.push({ type: 'highlight', value: part.slice(2, -2) });
    else tokens.push({ type: 'text', value: part });
  }
  return tokens;
}

function wrapGlossaryTerms(text: string, selectedIds?: string[]): React.ReactNode[] {
  const selectedTerms = selectedIds && selectedIds.length > 0
    ? SORTED_TERMS.filter((t) => selectedIds.includes(t.id))
    : SORTED_TERMS;

  if (selectedTerms.length === 0) return [text];

  // Sort by length (longest first) to match longer terms before substrings
  const sortedByLength = [...selectedTerms].sort((a, b) => b.term.length - a.term.length);

  const escapedTerms = sortedByLength.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // Use lookahead/lookbehind to avoid matching inside words (including Italian accented chars)
  const patterns = escapedTerms.map((e) => `(?<![\\p{L}\\p{N}])${e}(?![\\p{L}\\p{N}])`);
  const regex = new RegExp(`(${patterns.join('|')})`, 'giu');
  const parts = text.split(regex).filter(Boolean);

  return parts.map((part, index) => {
    const matchedTerm = sortedByLength.find((t) => t.term.toLowerCase() === part.toLowerCase());
    if (!matchedTerm) return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    return (
      <GlossaryTooltip key={`${matchedTerm.id}-${index}`} termId={matchedTerm.id}>
        {part}
      </GlossaryTooltip>
    );
  });
}

function renderToken(token: Token, idx: number, enableGlossary: boolean, glossaryTermIds?: string[]): React.ReactNode {
  const renderText = (value: string) => (enableGlossary ? wrapGlossaryTerms(value, glossaryTermIds) : value);

  switch (token.type) {
    case 'newline':
      return <br key={`tok-${idx}`} />;
    case 'bold':
      return <strong key={`tok-${idx}`} className="font-bold text-text-primary">{renderText(token.value)}</strong>;
    case 'italic':
      return <em key={`tok-${idx}`} className="italic text-text-primary">{renderText(token.value)}</em>;
    case 'highlight':
      return <span key={`tok-${idx}`} className="text-accent-amber font-medium">{renderText(token.value)}</span>;
    case 'text':
      return <React.Fragment key={`tok-${idx}`}>{renderText(token.value)}</React.Fragment>;
  }
}

interface RichContentProps {
  content: string;
  enableGlossary?: boolean;
  glossaryTermIds?: string[];
  className?: string;
}

export default function RichContent({ content, enableGlossary = false, glossaryTermIds, className }: RichContentProps) {
  const tokens = tokenizeMarkdown(content);
  return (
    <div className={`text-sm leading-8 text-text-secondary ${className ?? ''}`}>
      {tokens.map((token, idx) => renderToken(token, idx, enableGlossary, glossaryTermIds))}
    </div>
  );
}
