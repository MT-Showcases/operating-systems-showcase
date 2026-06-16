'use client';

import { renderInline, renderParagraph } from '@/components/ui/RichText';

interface ExamExplanationProps {
  text: string;
}

function splitBlocks(text: string) {
  return text
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function splitSentences(text: string) {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z0-9`"'(])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function renderNarrativeBlock(block: string, keyPrefix: string) {
  const sentences = splitSentences(block);
  if (sentences.length === 0) return null;

  let verdict: 'Vero' | 'Falso' | null = null;
  const firstSentence = sentences[0].replace(/\*+/g, '').trim();
  if (/^Vero\.?$/i.test(firstSentence)) {
    verdict = 'Vero';
    sentences.shift();
  } else if (/^Falso\.?$/i.test(firstSentence)) {
    verdict = 'Falso';
    sentences.shift();
  }

  const [leadSentence, ...remainingSentences] = sentences;
  if (!leadSentence) {
    return renderParagraph(block, [], keyPrefix);
  }

  return (
    <div key={keyPrefix} className="space-y-2">
      {verdict ? (
        <div className="flex flex-wrap items-start gap-2">
          <span
            className={`terminal-heading mt-0.5 border px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${
              verdict === 'Vero'
                ? 'border-accent-green/40 bg-accent-green/10 text-accent-green'
                : 'border-accent-amber/40 bg-accent-amber/10 text-accent-amber'
            }`}
          >
            {verdict}
          </span>
          <p className="min-w-0 flex-1 text-sm font-semibold leading-7 text-text-primary">
            {renderInline(leadSentence, [], `${keyPrefix}-lead`)}
          </p>
        </div>
      ) : (
        <p className="text-sm font-semibold leading-7 text-text-primary">
          {renderInline(leadSentence, [], `${keyPrefix}-lead`)}
        </p>
      )}

      {remainingSentences.length > 0 ? (
        <p className="text-sm leading-7 text-text-secondary">
          {renderInline(remainingSentences.join(' '), [], `${keyPrefix}-rest`)}
        </p>
      ) : null}
    </div>
  );
}

export default function ExamExplanation({ text }: ExamExplanationProps) {
  const blocks = splitBlocks(text);

  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
        if (lines.every((line) => line.startsWith('- '))) {
          return renderParagraph(block, [], `exam-exp-list-${index}`);
        }

        return renderNarrativeBlock(block, `exam-exp-block-${index}`);
      })}
    </div>
  );
}
