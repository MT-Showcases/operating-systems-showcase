'use client';

import { useMemo, useState } from 'react';
import { examQuestions } from '@/data/exam';
import type { ExamQuestion } from '@/data/types';
import { normalizeMultipleSelectQuestion, normalizeQuestion, buildWrongAnswerPrompt } from '@/lib/quiz-factory';
import { AlertCircle, CheckCircle2, ChevronRight, ClipboardList, RotateCcw, Trophy } from 'lucide-react';
import NixButton from '@/components/tutor/NixButton';
import ExamExplanation from '@/components/exam/ExamExplanation';

const EXAM_SIZE = 30;

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickBalancedQuestions(questions: ExamQuestion[], total: number): ExamQuestion[] {
  const byChapter = new Map<string, ExamQuestion[]>();
  for (const q of questions) {
    const pool = byChapter.get(q.chapterSlug) ?? [];
    pool.push(q);
    byChapter.set(q.chapterSlug, pool);
  }

  const pools = new Map<string, ExamQuestion[]>();
  for (const [key, qs] of byChapter) pools.set(key, shuffleArray(qs));

  const chapterKeys = [...pools.keys()];
  const pointers = new Map<string, number>(chapterKeys.map((k) => [k, 0]));
  const selected: ExamQuestion[] = [];

  while (selected.length < total) {
    let added = 0;
    for (const key of chapterKeys) {
      if (selected.length >= total) break;
      const pool = pools.get(key)!;
      const ptr = pointers.get(key)!;
      if (ptr < pool.length) {
        selected.push(pool[ptr]);
        pointers.set(key, ptr + 1);
        added++;
      }
    }
    if (added === 0) break;
  }

  return shuffleArray(selected);
}

type ChoiceSessionQuestion = {
  question: ExamQuestion;
  kind: 'choice';
  options: string[];
  correctIndices: number[];
};

type ReorderSessionQuestion = {
  question: ExamQuestion;
  kind: 'reorder';
  initialOrder: string[];
  correctOrder: string[];
};

type MatchSessionQuestion = {
  question: ExamQuestion;
  kind: 'match';
  pairs: Array<{ left: string; right: string }>;
  rightOptions: string[];
};

type SessionQuestion = ChoiceSessionQuestion | ReorderSessionQuestion | MatchSessionQuestion;

interface AnswerEntry {
  selectedIndices?: number[];
  orderedItems?: string[];
  matchSelections?: Record<string, string>;
  submitted: boolean;
}

function areSameNumberSets(left: number[], right: number[]) {
  if (left.length !== right.length) return false;

  const leftSorted = [...left].sort((a, b) => a - b);
  const rightSorted = [...right].sort((a, b) => a - b);
  return leftSorted.every((value, index) => value === rightSorted[index]);
}

function areSameStringArrays(left: string[], right: string[]) {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function isAnswerCorrect(answer: AnswerEntry | undefined, sessionQuestion: SessionQuestion) {
  if (!answer?.submitted) return false;

  if (sessionQuestion.kind === 'choice') {
    return areSameNumberSets(answer.selectedIndices ?? [], sessionQuestion.correctIndices);
  }

  if (sessionQuestion.kind === 'reorder') {
    return areSameStringArrays(answer.orderedItems ?? [], sessionQuestion.correctOrder);
  }

  const selections = answer.matchSelections ?? {};
  return sessionQuestion.pairs.every((pair) => selections[pair.left] === pair.right);
}

function moveItem(items: string[], fromIndex: number, toIndex: number) {
  const next = [...items];
  const [item] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, item);
  return next;
}

function buildCorrectAnswerLabel(sessionQuestion: SessionQuestion) {
  if (sessionQuestion.kind === 'choice') {
    return sessionQuestion.correctIndices.map((index) => sessionQuestion.options[index]).filter(Boolean).join(', ');
  }

  if (sessionQuestion.kind === 'reorder') {
    return sessionQuestion.correctOrder.join(' -> ');
  }

  return sessionQuestion.pairs.map((pair) => `${pair.left} -> ${pair.right}`).join('; ');
}

function buildSelectedAnswerLabel(answer: AnswerEntry | undefined, sessionQuestion: SessionQuestion) {
  if (!answer) return null;

  if (sessionQuestion.kind === 'choice') {
    const labels = (answer.selectedIndices ?? []).map((index) => sessionQuestion.options[index]).filter(Boolean);
    return labels.length > 0 ? labels.join(', ') : null;
  }

  if (sessionQuestion.kind === 'reorder') {
    const items = answer.orderedItems ?? [];
    return items.length > 0 ? items.join(' -> ') : null;
  }

  const selections = answer.matchSelections ?? {};
  const mapped = sessionQuestion.pairs
    .map((pair) => {
      const value = selections[pair.left];
      return value ? `${pair.left} -> ${value}` : null;
    })
    .filter(Boolean);

  return mapped.length > 0 ? mapped.join('; ') : null;
}

function prepareSession(questions: ExamQuestion[]): SessionQuestion[] {
  return questions.map((q) => {
    if (q.type === 'multiple_select') {
      const { options, correctAnswers } = normalizeMultipleSelectQuestion(q);
      const shuffledIndices = shuffleArray(options.map((_, i) => i));
      const shuffledOptions = shuffledIndices.map((i) => options[i]);
      const correctSet = new Set(correctAnswers);

      return {
        question: q,
        kind: 'choice',
        options: shuffledOptions,
        correctIndices: shuffledOptions
          .map((option, index) => (correctSet.has(option) ? index : -1))
          .filter((index) => index !== -1),
      };
    }

    if (q.type === 'reorder') {
      const correctOrder = Array.isArray(q.correctAnswer) ? q.correctAnswer.map(String) : [];
      const sourceItems = q.options?.length ? q.options : correctOrder;
      return {
        question: q,
        kind: 'reorder',
        initialOrder: shuffleArray(sourceItems),
        correctOrder,
      };
    }

    if (q.type === 'match') {
      const pairs = q.matchPairs ?? [];
      return {
        question: q,
        kind: 'match',
        pairs,
        rightOptions: shuffleArray(pairs.map((pair) => pair.right)),
      };
    }

    const { options, correctIndex } = normalizeQuestion(q);
    return {
      question: q,
      kind: 'choice',
      options,
      correctIndices: [correctIndex],
    };
  });
}

type Phase = 'start' | 'question' | 'result';

export default function ExamSession() {
  const [phase, setPhase] = useState<Phase>('start');
  const [session, setSession] = useState<SessionQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerEntry>>({});

  function startExam() {
    const picked = pickBalancedQuestions(examQuestions, EXAM_SIZE);
    setSession(prepareSession(picked));
    setCurrentIndex(0);
    setAnswers({});
    setPhase('question');
  }

  const current = session[currentIndex];
  const currentAnswer = answers[currentIndex];
  const answered = currentAnswer?.submitted ?? false;
  const isLast = currentIndex === session.length - 1;

  const score = useMemo(
    () => session.reduce((total, sq, i) => total + (isAnswerCorrect(answers[i], sq) ? 1 : 0), 0),
    [session, answers]
  );

  const breakdown = useMemo(() => {
    const map = new Map<string, { title: string; correct: number; total: number }>();
    session.forEach((sq, i) => {
      const key = sq.question.chapterSlug;
      const entry = map.get(key) ?? { title: sq.question.chapterTitle, correct: 0, total: 0 };
      entry.total++;
      if (isAnswerCorrect(answers[i], sq)) entry.correct++;
      map.set(key, entry);
    });
    return [...map.values()].sort((a, b) => a.correct / a.total - b.correct / b.total);
  }, [session, answers]);

  const totalQuestions = session.length;
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const passed = scorePercent >= 70;

  if (phase === 'start') {
    return (
      <div className="mx-auto max-w-2xl border-2 border-accent-green/40 bg-bg-surface p-8 pb-24 text-center space-y-6 md:pb-8">
        <div className="flex justify-center">
          <ClipboardList className="h-10 w-10 text-accent-green" strokeWidth={1.5} />
        </div>
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.28em] text-accent-green/60 mb-2">
            Esame finale
          </p>
          <h2 className="text-2xl font-bold text-text-primary">Sistemi Operativi</h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary max-w-sm mx-auto">
            {EXAM_SIZE} domande casuali tratte da tutti i 16 capitoli. Le opzioni vengono mescolate
            ad ogni tentativo. Soglia di superamento: 70%.
          </p>
        </div>
        <ul className="text-left text-sm text-text-secondary space-y-2 border border-border-subtle p-4 bg-bg-primary max-w-xs mx-auto">
          <li className="flex gap-2"><span className="text-accent-green">·</span> {examQuestions.length} domande nel database</li>
          <li className="flex gap-2"><span className="text-accent-green">·</span> {EXAM_SIZE} domande per tentativo (bilanciate per capitolo)</li>
          <li className="flex gap-2"><span className="text-accent-green">·</span> Mix di scelta singola, multipla, matching e riordino</li>
          <li className="flex gap-2"><span className="text-accent-green">·</span> Alcune domande richiedono conferma esplicita</li>
          <li className="flex gap-2"><span className="text-accent-green">·</span> Puoi rifare l&apos;esame quante volte vuoi</li>
        </ul>
        <button
          type="button"
          onClick={startExam}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 border-2 border-accent-green bg-accent-green/10 px-8 py-3 text-sm font-semibold text-accent-green transition hover:bg-accent-green/20 sm:w-auto"
        >
          Inizia Esame <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="mx-auto max-w-2xl space-y-6 pb-20 md:pb-0">
        <div className={`border-2 p-6 text-center space-y-3 ${passed ? 'border-accent-green/50 bg-accent-green/5' : 'border-accent-amber/50 bg-accent-amber/5'}`}>
          <Trophy className={`mx-auto h-8 w-8 ${passed ? 'text-accent-green' : 'text-accent-amber'}`} strokeWidth={1.5} />
          <div>
            <p className={`terminal-heading text-xs uppercase tracking-[0.28em] mb-1 ${passed ? 'text-accent-green/70' : 'text-accent-amber/70'}`}>
              {passed ? 'Esame superato' : 'Esame non superato'}
            </p>
            <p className="text-4xl font-extrabold text-text-primary">{scorePercent}%</p>
            <p className="mt-1 text-sm text-text-secondary">{score} su {totalQuestions} risposte corrette</p>
          </div>
          {!passed && (
            <p className="text-xs text-text-secondary">Soglia di superamento: 70%. Riprova — le domande e le opzioni saranno diverse.</p>
          )}
        </div>

        <div className="border border-border-subtle bg-bg-surface p-5 space-y-4">
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-text-secondary">
            Risultati per capitolo
          </p>
          <ul className="space-y-3">
            {breakdown.map(({ title, correct, total }) => {
              const pct = Math.round((correct / total) * 100);
              const ok = pct >= 70;
              return (
                <li key={title} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary truncate pr-2">{title}</span>
                    <span className={`shrink-0 font-semibold ${ok ? 'text-accent-green' : 'text-accent-amber'}`}>
                      {correct}/{total}
                    </span>
                  </div>
                  <div className="h-1.5 bg-bg-primary">
                    <div
                      className={`h-1.5 transition-all ${ok ? 'bg-accent-green' : 'bg-accent-amber'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={startExam}
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-accent-green bg-accent-green/10 py-3 text-sm font-semibold text-accent-green transition hover:bg-accent-green/20"
          >
            <RotateCcw className="h-4 w-4" /> Nuovo tentativo
          </button>
        </div>
      </div>
    );
  }

  if (!current) {
    return null;
  }

  const isMultipleSelect = current.kind === 'choice' && current.question.type === 'multiple_select';
  const isReorder = current.kind === 'reorder';
  const isMatch = current.kind === 'match';
  const selectedLabel = buildSelectedAnswerLabel(currentAnswer, current);
  const correctLabel = buildCorrectAnswerLabel(current);
  const displayedOrder = isReorder ? currentAnswer?.orderedItems ?? current.initialOrder : [];
  const matchSelections = isMatch ? currentAnswer?.matchSelections ?? {} : {};

  const canSubmitCurrent = (() => {
    if (current.kind === 'choice') {
      return isMultipleSelect ? (currentAnswer?.selectedIndices?.length ?? 0) > 0 : answered;
    }

    if (current.kind === 'reorder') {
      return displayedOrder.length === current.correctOrder.length;
    }

    return current.pairs.every((pair) => Boolean(matchSelections[pair.left]));
  })();

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-20 md:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-green">Esame finale</p>
          <p className="mt-1 text-xs text-text-secondary">{current.question.chapterTitle}</p>
        </div>
        <span className="border-2 border-accent-green/40 bg-bg-surface px-3 py-1 text-xs text-text-secondary">
          {currentIndex + 1} / {session.length}
        </span>
      </div>

      <div className="h-2 bg-bg-surface border border-border-subtle">
        <div
          className="h-full bg-accent-green transition-[width]"
          style={{ width: `${((currentIndex + 1) / session.length) * 100}%` }}
        />
      </div>

      <div className="border-2 border-accent-green/40 bg-bg-surface p-5 space-y-5">
        <p className="text-base font-medium leading-8 text-text-primary">{current.question.question}</p>

        {current.kind === 'choice' ? (
          <>
            {isMultipleSelect ? (
              <p className="text-xs uppercase tracking-[0.16em] text-accent-cyan">
                Seleziona tutte le risposte corrette, poi conferma.
              </p>
            ) : null}

            <div className="space-y-3">
              {current.options.map((option, optionIndex) => {
                const isPicked = (currentAnswer?.selectedIndices ?? []).includes(optionIndex);
                const isCorrect = current.correctIndices.includes(optionIndex);

                let cls = 'border-accent-green/30 text-text-primary hover:border-accent-green/70';
                if (answered && isPicked && isCorrect) cls = 'border-accent-green bg-accent-green/10 text-accent-green';
                if (answered && isPicked && !isCorrect) cls = 'border-accent-amber bg-accent-amber/5 text-text-primary';
                if (answered && !isPicked && isCorrect) cls = 'border-accent-green/50 bg-accent-green/5 text-text-primary';
                if (!answered && isPicked) cls = 'border-accent-cyan/70 bg-accent-cyan/10 text-text-primary';

                return (
                    <button
                      key={`${option}-${optionIndex}`}
                    type="button"
                    disabled={answered}
                    onClick={() => {
                      if (isMultipleSelect) {
                        setAnswers((prev) => {
                          const existing = prev[currentIndex];
                          const nextSelection = existing?.selectedIndices?.includes(optionIndex)
                            ? existing.selectedIndices.filter((index) => index !== optionIndex)
                            : [...(existing?.selectedIndices ?? []), optionIndex];

                          return {
                            ...prev,
                            [currentIndex]: {
                              selectedIndices: nextSelection,
                              submitted: false,
                            },
                          };
                        });
                        return;
                      }

                      setAnswers((prev) => ({
                        ...prev,
                        [currentIndex]: {
                          selectedIndices: [optionIndex],
                          submitted: true,
                        },
                      }));
                    }}
                    className={`min-h-11 w-full border-2 px-4 py-3 text-left text-sm transition disabled:cursor-not-allowed ${cls}`}
                  >
                    <span className="flex items-start gap-3">
                      {isMultipleSelect ? (
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${
                            isPicked ? 'border-accent-cyan bg-accent-cyan/20' : 'border-border-subtle'
                          }`}
                        >
                          {isPicked ? <span className="h-2 w-2 bg-accent-cyan" /> : null}
                        </span>
                      ) : null}
                      <span>{option}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {isReorder ? (
          <>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-cyan">
              Riordina gli elementi con i pulsanti, poi conferma.
            </p>
            <div className="space-y-3">
              {displayedOrder.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center justify-between gap-3 border border-accent-cyan/30 bg-bg-primary px-4 py-3"
                >
                  <span className="text-sm text-text-primary">
                    {index + 1}. {item}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={answered || index === 0}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [currentIndex]: {
                            orderedItems: moveItem(displayedOrder, index, index - 1),
                            submitted: false,
                          },
                        }))
                      }
                      className="min-h-9 border border-accent-cyan/40 px-3 text-xs text-accent-cyan transition disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Su
                    </button>
                    <button
                      type="button"
                      disabled={answered || index === displayedOrder.length - 1}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [currentIndex]: {
                            orderedItems: moveItem(displayedOrder, index, index + 1),
                            submitted: false,
                          },
                        }))
                      }
                      className="min-h-9 border border-accent-cyan/40 px-3 text-xs text-accent-cyan transition disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Giu
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {isMatch ? (
          <>
            <p className="text-xs uppercase tracking-[0.16em] text-accent-cyan">
              Associa ogni elemento di sinistra alla descrizione corretta.
            </p>
            <div className="space-y-3">
              {current.pairs.map((pair) => (
                <div key={pair.left} className="border border-accent-cyan/30 bg-bg-primary p-4 space-y-3">
                  <p className="text-sm font-semibold text-text-primary">{pair.left}</p>
                  <select
                    value={matchSelections[pair.left] ?? ''}
                    disabled={answered}
                    onChange={(event) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [currentIndex]: {
                          matchSelections: {
                            ...(prev[currentIndex]?.matchSelections ?? {}),
                            [pair.left]: event.target.value,
                          },
                          submitted: false,
                        },
                      }))
                    }
                    className="min-h-11 w-full border border-accent-cyan/40 bg-bg-surface px-3 text-sm text-text-primary outline-none"
                  >
                    <option value="">Seleziona abbinamento</option>
                    {current.rightOptions.map((option) => (
                      <option key={`${pair.left}-${option}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {(isMultipleSelect || isReorder || isMatch) && !answered ? (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() =>
                setAnswers((prev) => ({
                  ...prev,
                  [currentIndex]: {
                    selectedIndices: current.kind === 'choice' ? currentAnswer?.selectedIndices ?? [] : undefined,
                    orderedItems: current.kind === 'reorder' ? displayedOrder : undefined,
                    matchSelections: current.kind === 'match' ? matchSelections : undefined,
                    submitted: true,
                  },
                }))
              }
              disabled={!canSubmitCurrent}
              className="min-h-11 border-2 border-accent-cyan/40 bg-bg-primary px-4 py-2 text-sm font-semibold text-accent-cyan transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              Conferma risposta
            </button>
          </div>
        ) : null}

        {answered ? (
          <div className="border-2 border-accent-green/20 bg-bg-primary/60 p-4 text-sm leading-7 text-text-secondary">
            <div className="flex items-center gap-2 mb-2">
              {isAnswerCorrect(currentAnswer, current) ? (
                <>
                  <CheckCircle2 size={18} className="text-accent-green shrink-0" strokeWidth={2.5} />
                  <span className="font-medium text-text-primary">Risposta corretta.</span>
                </>
              ) : (
                <>
                  <AlertCircle size={18} className="text-accent-amber shrink-0" strokeWidth={2.5} />
                  <span className="font-medium text-text-primary">Non è la risposta giusta.</span>
                </>
              )}
            </div>
            <ExamExplanation text={current.question.explanation} />
            {!isAnswerCorrect(currentAnswer, current) && selectedLabel ? (
              <div className="mt-3 flex justify-end">
                <NixButton prompt={buildWrongAnswerPrompt(current.question, selectedLabel, correctLabel)} size="xs" />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          className="min-h-11 border-2 border-accent-green/30 px-4 py-2 text-sm text-text-primary transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Indietro
        </button>

        {isLast ? (
          <button
            type="button"
            disabled={!answered}
            onClick={() => setPhase('result')}
            className="min-h-11 border-2 border-accent-green bg-accent-green/10 px-6 py-2 text-sm font-semibold text-accent-green transition disabled:cursor-not-allowed disabled:opacity-40 flex items-center gap-2"
          >
            <Trophy className="h-4 w-4" /> Vedi risultati
          </button>
        ) : (
          <button
            type="button"
            disabled={!answered}
            onClick={() => setCurrentIndex((i) => Math.min(i + 1, session.length - 1))}
            className="min-h-11 border-2 border-accent-green/30 bg-bg-surface px-4 py-2 text-sm text-accent-green transition disabled:cursor-not-allowed disabled:opacity-40 flex items-center gap-2"
          >
            Avanti <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
