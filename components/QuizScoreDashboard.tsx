'use client';

import { useCallback, useMemo, useRef, useSyncExternalStore } from 'react';
import { buildQuizStorageKey } from '@/lib/quiz-storage';

type ScoreEntry = { correct: number; total: number; completedAt?: string };
type ScoreMap = Record<string, ScoreEntry>;
const EMPTY_SCORES: ScoreMap = {};

function loadScores(chapterSlugs: string[]): ScoreMap {
  if (typeof window === 'undefined') return EMPTY_SCORES;
  const out: ScoreMap = {};
  for (const slug of chapterSlugs) {
    try {
      const raw = window.localStorage.getItem(buildQuizStorageKey(slug));
      if (!raw) continue;
      const parsed = JSON.parse(raw) as ScoreEntry;
      if (typeof parsed.correct === 'number' && typeof parsed.total === 'number') {
        out[slug] = parsed;
      }
    } catch {
      // ignore malformed local storage
    }
  }
  return out;
}

interface QuizScoreDashboardProps {
  quizChapterSlugs: string[];
}

function areScoresEqual(a: ScoreMap, b: ScoreMap): boolean {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    const left = a[key];
    const right = b[key];
    if (!right) return false;
    if (left.correct !== right.correct || left.total !== right.total || left.completedAt !== right.completedAt) {
      return false;
    }
  }

  return true;
}

export default function QuizScoreDashboard({ quizChapterSlugs }: QuizScoreDashboardProps) {
  const cachedSnapshotRef = useRef<ScoreMap>(EMPTY_SCORES);

  const subscribe = useCallback((onStoreChange: () => void) => {
    if (typeof window === 'undefined') return () => undefined;
    const handler = () => onStoreChange();
    window.addEventListener('storage', handler);
    window.addEventListener('quiz-score-updated', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('quiz-score-updated', handler);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    const next = loadScores(quizChapterSlugs);
    const prev = cachedSnapshotRef.current;

    if (areScoresEqual(prev, next)) return prev;
    cachedSnapshotRef.current = next;
    return next;
  }, [quizChapterSlugs]);

  const getServerSnapshot = useCallback<() => ScoreMap>(() => EMPTY_SCORES, []);
  const scores = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const totals = useMemo(
    () => Object.values(scores).reduce((acc, score) => ({ correct: acc.correct + score.correct, total: acc.total + score.total }), { correct: 0, total: 0 }),
    [scores]
  );

  const resetScores = () => {
    if (typeof window === 'undefined') return;
    for (const slug of quizChapterSlugs) {
      window.localStorage.removeItem(buildQuizStorageKey(slug));
    }
    window.dispatchEvent(new Event('quiz-score-updated'));
  };

  return (
    <div className="rounded-none border border-accent-cyan/40 bg-bg-surface p-5 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-accent-cyan">Progress Dashboard Quiz</h3>
          <p className="text-sm text-text-secondary mt-1">
            Hai completato <span className="font-semibold text-text-primary">{totals.correct}/{totals.total || 0}</span> domande su <span className="font-semibold text-text-primary">{quizChapterSlugs.length}</span> capitoli con quiz.
          </p>
          <p className="text-xs text-text-secondary mt-1">Capitoli completati: {Object.keys(scores).length}/{quizChapterSlugs.length}</p>
        </div>

        <button onClick={resetScores} className="min-h-11 px-4 py-2 rounded-none border border-red-500/40 text-red-300 hover:bg-red-500/10 transition-all duration-300">
          Reset score
        </button>
      </div>
    </div>
  );
}
