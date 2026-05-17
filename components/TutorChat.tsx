'use client';

import { useState } from 'react';
import { TUTOR_NAME } from '@/lib/tutor-config';

type Source = {
  title: string;
  url: string;
  sourceType: 'chapter' | 'glossary' | 'lab_zip';
  zipName?: string;
  filePath?: string;
};

export default function TutorChat({ chapterSlug }: { chapterSlug: string }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState<Source[]>([]);

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, chapterSlug }),
      });
      const data = await res.json();
      setAnswer(data.answer || 'Nessuna risposta disponibile.');
      setSources(data.sources || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 rounded-3xl border border-accent-cyan/20 bg-bg-surface p-5">
      <h3 className="text-accent-cyan font-semibold mb-2">{TUTOR_NAME} (beta)</h3>
      <p className="text-xs text-text-secondary mb-1">Fai domande sul capitolo, sul glossario o sui concetti Linux/OS trattati.</p>
      <p className="text-[11px] text-text-secondary mb-3">Disclaimer: {TUTOR_NAME} è un assistente AI e può commettere errori. Verifica sempre i passaggi importanti.</p>

      <div className="flex gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Es: quando uso sudo invece di root?"
          className="flex-1 rounded-md bg-bg-primary border border-border-subtle px-3 py-2 text-sm text-text-primary"
        />
        <button onClick={ask} disabled={loading} className="rounded-md bg-accent-green/15 text-accent-green px-3 py-2 text-sm font-semibold disabled:opacity-50">
          {loading ? '...' : 'Chiedi'}
        </button>
      </div>

      {answer && (
        <div className="mt-4 space-y-3">
          <div className="text-sm text-text-primary whitespace-pre-wrap">{answer}</div>
          {sources.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-text-primary mb-1">Fonti usate</p>
              <ul className="space-y-1">
                {sources.map((s, i) => (
                  <li key={`${s.url}-${i}`} className="text-xs text-text-secondary">
                    <a href={s.url} className="text-accent-cyan hover:underline">{s.title}</a>
                    {s.filePath ? <span> · {s.filePath}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
