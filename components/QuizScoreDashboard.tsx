'use client';

import { useMemo, useState } from 'react';
import { chapters } from '@/data/chapters';
import { buildQuizStorageKey } from '@/lib/quiz-storage';

type ScoreEntry = { correct: number; total: number; completedAt?: string };

function loadScores(): Record<string, ScoreEntry> {
  if (typeof window === 'undefined') return {};
  const out: Record<string, ScoreEntry> = {};
  for (const chapter of chapters) {
    try {
      const raw = window.localStorage.getItem(buildQuizStorageKey(chapter.slug));
      if (!raw) continue;
      const parsed = JSON.parse(raw) as ScoreEntry;
      if (typeof parsed.correct === 'number' && typeof parsed.total === 'number') {
        out[chapter.slug] = parsed;
      }
    } catch {
      // ignore malformed local storage
    }
  }
  return out;
}

export default function QuizScoreDashboard() {
  const [scores, setScores] = useState<Record<string, ScoreEntry>>(() => loadScores());

  const quizChapters = useMemo(() => chapters.filter((chapter) => (chapter.quiz?.length ?? 0) > 0), []);
  const totals = useMemo(
    () => Object.values(scores).reduce((acc, score) => ({ correct: acc.correct + score.correct, total: acc.total + score.total }), { correct: 0, total: 0 }),
    [scores]
  );

  const resetScores = () => {
    if (typeof window === 'undefined') return;
    for (const chapter of quizChapters) {
      window.localStorage.removeItem(buildQuizStorageKey(chapter.slug));
    }
    setScores({});
  };

  return (
    <div className="rounded-none border border-accent-cyan/40 bg-bg-surface p-5 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-accent-cyan">Progress Dashboard Quiz</h3>
          <p className="text-sm text-text-secondary mt-1">
            Hai completato <span className="font-semibold text-text-primary">{totals.correct}/{totals.total || 0}</span> domande su <span className="font-semibold text-text-primary">{quizChapters.length}</span> capitoli con quiz.
          </p>
          <p className="text-xs text-text-secondary mt-1">Capitoli completati: {Object.keys(scores).length}/{quizChapters.length}</p>
        </div>

        <button onClick={resetScores} className="min-h-11 px-4 py-2 rounded-none border border-red-500/40 text-red-300 hover:bg-red-500/10 transition-all duration-300">
          Reset score
        </button>
      </div>
    </div>
  );
}
