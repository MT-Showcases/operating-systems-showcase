'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { TUTOR_NAME, TUTOR_PLACEHOLDER, TUTOR_TAGLINE } from '@/lib/tutor-config';
import useBodyScrollLock from '@/lib/useBodyScrollLock';

type AnswerData = { summary: string; bullets?: string[]; suggestions?: Array<{ label: string; url: string }> };
type Msg = { role: 'user' | 'assistant'; text: string; data?: AnswerData };
type Source = { title: string; url: string; filePath?: string };

const STORAGE_KEY = 'os_tutor_session_v1';

function normalizeAssistantText(text: string): string {
  return text.replace(/\*\*/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

export default function TutorFloatingChat() {
  const pathname = usePathname();
  const chapterSlug = useMemo(() => pathname?.match(/^\/chapters\/([^/]+)/)?.[1], [pathname]);

  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [lastSources, setLastSources] = useState<Source[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useBodyScrollLock(open);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { messages?: Msg[] };
      if (parsed.messages) setMessages(parsed.messages);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [messages, open]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [question]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ prompt?: string }>).detail;
      setOpen(true);
      if (detail?.prompt) setQuestion(detail.prompt);
    };
    window.addEventListener('nix:open', handler);
    return () => window.removeEventListener('nix:open', handler);
  }, []);

  const ask = async () => {
    const q = question.trim();
    if (!q || loading) return;
    const history = [...messages, { role: 'user', text: q }].map((m) => ({ role: m.role, text: m.text }));
    setQuestion('');
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          chapterSlug,
          pathname: pathname || '/',
          history,
        }),
      });
      const data = await res.json();
      const answerText = normalizeAssistantText(data.answer || 'Nessuna risposta disponibile.');
      setMessages((prev) => [...prev, { role: 'assistant', text: answerText, data: data.answerData }]);
      setLastSources(data.sources || []);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Errore temporaneo. Riprova tra poco.' }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setLastSources([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-5 z-90 rounded-none bg-accent-green text-bg-primary px-4 py-3 font-semibold flex items-center gap-2 hover:bg-accent-cyan hover:text-bg-primary transition"
        aria-label={`Apri ${TUTOR_NAME}`}
      >
        ✓ {TUTOR_NAME}
      </button>

      {open ? (
        <>
          <div className="fixed inset-0 z-89 bg-black/60 sm:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="fixed bottom-24 right-4 z-90 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-none border border-accent-cyan/40 bg-bg-surface shadow-2xl">
            <div className="p-3 border-b border-accent-cyan/40 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-accent-cyan">{TUTOR_NAME}</p>
                <p className="text-[11px] text-text-secondary">{TUTOR_TAGLINE}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={clearChat} className="text-xs text-text-secondary hover:text-text-primary">Reset</button>
                <button onClick={() => setOpen(false)} className="text-text-secondary hover:text-text-primary" aria-label="Chiudi"><X className="h-4 w-4" /></button>
              </div>
            </div>

            <div ref={scrollRef} className="h-80 overflow-y-auto p-3 space-y-2">
              {messages.length === 0 ? <p className="text-xs text-text-secondary">{TUTOR_TAGLINE}</p> : null}
              {messages.map((message, index) => (
                <div key={index} className={`text-sm p-2 rounded-none ${message.role === 'user' ? 'bg-accent-cyan/10 ml-8' : 'bg-bg-primary mr-8'}`}>
                  <div className="mb-1 text-[11px] uppercase tracking-wide text-text-secondary">{message.role === 'user' ? 'Tu' : TUTOR_NAME}</div>
                  <p className="whitespace-pre-wrap text-text-primary">{message.text}</p>
                  {message.role === 'assistant' && message.data?.bullets && message.data.bullets.length > 0 ? (
                    <ul className="list-disc ml-5 mt-2 text-xs text-text-secondary space-y-1">
                      {message.data.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
                    </ul>
                  ) : null}
                  {message.role === 'assistant' && message.data?.suggestions && message.data.suggestions.length > 0 ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.data.suggestions.map((suggestion, suggestionIndex) => (
                        <a key={suggestionIndex} href={suggestion.url} className="text-[11px] px-2 py-1 rounded bg-accent-green/10 text-accent-green hover:bg-accent-green/20">
                          {suggestion.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              {loading ? <div className="text-sm p-2 rounded-none bg-bg-primary mr-8 text-text-secondary">Sto rispondendo…</div> : null}
              {lastSources.length > 0 ? (
                <div className="pt-2">
                  <p className="text-[11px] text-text-secondary mb-1">Fonti</p>
                  <ul className="space-y-1">
                    {lastSources.slice(0, 4).map((source, index) => (
                      <li key={index} className="text-[11px] text-text-secondary">
                        <a href={source.url} className="text-accent-cyan hover:underline">{source.title}</a>
                        {source.filePath ? <span> · {source.filePath}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="p-3 border-t border-accent-cyan/40 flex gap-2 items-end">
              <textarea
                ref={textareaRef}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    ask();
                  }
                }}
                placeholder={TUTOR_PLACEHOLDER}
                rows={1}
                className="flex-1 rounded-none bg-bg-primary border border-accent-cyan/40 px-3 py-2 text-sm resize-none min-h-11 max-h-48 overflow-y-auto text-text-primary"
              />
              <button onClick={ask} disabled={loading} className="rounded-none bg-accent-green/15 text-accent-green px-3 py-2 text-sm font-semibold disabled:opacity-50">
                {loading ? '...' : 'Invia'}
              </button>
            </div>
            <p className="px-3 pb-3 text-[11px] text-text-secondary">
              Disclaimer: {TUTOR_NAME} è un assistente AI e può commettere errori. Verifica sempre i passaggi importanti.
            </p>
          </div>
        </>
      ) : null}
    </>
  );
}
