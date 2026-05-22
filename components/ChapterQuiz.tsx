'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';
import type { QuizQuestion } from '@/data/types';
import { buildQuizStorageKey } from '@/lib/quiz-storage';
import NixButton from './NixButton';

interface ChapterQuizProps {
  quiz: QuizQuestion[];
  chapterSlug: string;
}

function normalizeQuestion(question: QuizQuestion) {
  if (question.type === 'true_false') {
    return {
      options: ['Vero', 'Falso'],
      correctIndex: question.correctAnswer === true ? 0 : 1,
    };
  }

  return {
    options: question.options ?? [],
    correctIndex: Number(question.correctAnswer),
  };
}

function buildWrongAnswerPrompt(question: QuizQuestion, selectedLabel: string, correctLabel: string) {
  return [
    `Domanda quiz: ${question.question}`,
    `Risposta scelta: ${selectedLabel}`,
    `Risposta corretta: ${correctLabel}`,
    `Spiegazione disponibile: ${question.explanation}`,
    '',
    'Spiegami in modo semplice perche la mia risposta e sbagliata, quale concetto del sistema operativo sto confondendo e fammi un esempio concreto.',
  ].join('\n');
}

export default function ChapterQuiz({ quiz, chapterSlug }: ChapterQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const currentQuestion = quiz[currentIndex];
  const normalized = normalizeQuestion(currentQuestion);
  const selected = answers[currentIndex];
  const completed = Object.keys(answers).length === quiz.length;
  const correctLabel = normalized.options[normalized.correctIndex] ?? String(currentQuestion.correctAnswer);
  const selectedLabel = selected !== undefined ? normalized.options[selected] ?? String(selected) : null;

  const score = useMemo(
    () =>
      quiz.reduce((total, question, index) => {
        const { correctIndex } = normalizeQuestion(question);
        return total + (answers[index] === correctIndex ? 1 : 0);
      }, 0),
    [answers, quiz]
  );

  useEffect(() => {
    if (!completed || typeof window === 'undefined') return;
    window.localStorage.setItem(
      buildQuizStorageKey(chapterSlug),
      JSON.stringify({ correct: score, total: quiz.length, completedAt: new Date().toISOString() })
    );
  }, [chapterSlug, completed, quiz.length, score]);

  const canGoNext = answers[currentIndex] !== undefined;

  return (
    <section className=" border-2 border-accent-cyan/40 bg-bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-cyan">Quiz capitolo</p>
          <h3 className="mt-2 text-xl font-semibold text-text-primary">Verifica rapida</h3>
        </div>
        <span className=" border-2 border-accent-cyan/40 bg-bg-surface px-3 py-1 text-xs text-text-secondary">
          {currentIndex + 1}/{quiz.length}
        </span>
      </div>

      <div className="mt-4 h-2 bg-bg-surface">
        <div className="h-2 bg-accent-green transition-[width]" style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }} />
      </div>

      <div className="mt-6 border-2 border-accent-cyan/40 bg-bg-surface p-5">
        <p className="text-base font-medium leading-8 text-text-primary">{currentQuestion.question}</p>
        <div className="mt-5 space-y-3">
          {normalized.options.map((option, optionIndex) => {
            const picked = answers[currentIndex];
            const checked = picked !== undefined;
            const isPicked = picked === optionIndex;
            const isCorrect = normalized.correctIndex === optionIndex;

            let className = 'border-accent-cyan/40 text-text-primary hover:border-accent-cyan';
            if (checked && isPicked && isCorrect) className = 'border-accent-green bg-bg-surface text-accent-green';
            if (checked && isPicked && !isCorrect) className = 'border-accent-amber bg-bg-surface text-text-primary';
            if (checked && !isPicked && isCorrect) className = 'border-accent-green/40 bg-accent-green/5 text-text-primary';

            return (
              <button
                key={option}
                type="button"
                disabled={checked}
                onClick={() => setAnswers((previous) => ({ ...previous, [currentIndex]: optionIndex }))}
                className={`min-h-11 w-full border-2 px-4 py-3 text-left text-sm transition disabled:cursor-not-allowed ${className}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected !== undefined ? (
          <div className="mt-4 border-2 border-accent-cyan/40 bg-bg-primary/60 p-4 text-sm leading-7 text-text-secondary">
            <div className="flex items-center gap-2">
              {selected === normalized.correctIndex ? (
                <>
                  <CheckCircle2 size={20} className="text-accent-green" strokeWidth={2.5} />
                  <span className="font-medium text-text-primary">Risposta corretta.</span>
                </>
              ) : (
                <>
                  <AlertCircle size={20} className="text-accent-amber" strokeWidth={2.5} />
                  <span className="font-medium text-text-primary">Non è la risposta giusta.</span>
                </>
              )}
            </div>
            <p className="mt-2">{currentQuestion.explanation}</p>
            {selected !== normalized.correctIndex && selectedLabel ? (
              <div className="mt-3 flex justify-end">
                <NixButton prompt={buildWrongAnswerPrompt(currentQuestion, selectedLabel, correctLabel)} size="xs" />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrentIndex((value) => Math.max(value - 1, 0))}
          disabled={currentIndex === 0}
          className="min-h-11 border-2 border-accent-cyan/40 px-4 py-2 text-sm text-text-primary transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Indietro
        </button>

        {currentIndex < quiz.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentIndex((value) => Math.min(value + 1, quiz.length - 1))}
            disabled={!canGoNext}
            className="min-h-11 border-2 border-accent-green/30 bg-bg-surface px-4 py-2 text-sm text-accent-green transition disabled:cursor-not-allowed disabled:opacity-40 flex items-center gap-2"
          >
            Avanti <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <span className=" border-2 border-accent-cyan/20 bg-bg-surface px-4 py-2 text-sm text-accent-cyan">
            {completed ? `Risultato finale: ${score}/${quiz.length}` : 'Rispondi per chiudere il quiz'}
          </span>
        )}
      </div>
    </section>
  );
}
