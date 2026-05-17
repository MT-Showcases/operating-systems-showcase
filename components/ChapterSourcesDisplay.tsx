'use client';

import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, FileText, Library, Microscope, Lightbulb } from 'lucide-react';

interface Source {
  id: string;
  title: string;
  origin: string;
  type: 'book' | 'course' | 'tutorial' | 'documentation' | 'paper';
}

interface SourcesData {
  chapter: string;
  slug: string;
  title: string;
  policy: string;
  sources: Source[];
}

interface ChapterSourcesDisplayProps {
  chapterSlug: string;
}

export default function ChapterSourcesDisplay({ chapterSlug }: ChapterSourcesDisplayProps) {
  const [sourcesData, setSourcesData] = useState<SourcesData | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    setError(null);

    // Carica il file sources.json per questo capitolo
    const chapterNum = chapterSlug === 'what-is-os' ? 'ch1' :
                       chapterSlug === 'hardware-cpu' ? 'ch2' :
                       chapterSlug === 'kernel' ? 'ch3' :
                       chapterSlug === 'processes' ? 'ch4' :
                       chapterSlug === 'memory-filesystem' ? 'ch5' :
                       chapterSlug === 'io-devices' ? 'ch6' :
                       chapterSlug === 'linux-cli' ? 'ch7' :
                       chapterSlug === 'security-best-practices' ? 'ch8' : null;

    if (!chapterNum) {
      setError('Capitolo non trovato');
      setLoading(false);
      return;
    }

    fetch(`/sources/${chapterNum}/sources.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Fonti non disponibili');
        return res.json();
      })
      .then((data: SourcesData) => {
        setSourcesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [open, chapterSlug]);

  const getSourceTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      book: 'Libro',
      course: 'Corso online',
      tutorial: 'Tutorial',
      documentation: 'Documentazione',
      paper: 'Paper accademico',
    };
    return labels[type] || type;
  };

  const getSourceTypeIcon = (type: string) => {
    const iconProps = 'w-4 h-4 text-cyan-300';
    switch (type) {
      case 'book':
        return <BookOpen className={iconProps} />;
      case 'course':
        return <GraduationCap className={iconProps} />;
      case 'tutorial':
        return <FileText className={iconProps} />;
      case 'documentation':
        return <Library className={iconProps} />;
      case 'paper':
        return <Microscope className={iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300 text-sm hover:bg-cyan-500/10 transition"
      >
        {open ? '▼' : '▶'} {open ? 'Nascondi' : 'Mostra'} fonti capitolo
      </button>

      {open && (
        <div className="mt-4 rounded-lg border border-cyan-500/30 bg-navy-900/50 p-6">
          {loading && (
            <p className="text-gray-400 text-sm">Caricamento fonti...</p>
          )}

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {sourcesData && (
            <div className="space-y-4">
              <div className="mb-4 pb-4 border-b border-navy-700">
                <p className="text-xs uppercase tracking-[0.12em] text-cyan-300 font-semibold flex items-center gap-2"><BookOpen className="w-4 h-4" /> Fonti NotebookLM</p>
                <h3 className="text-base font-semibold text-text-primary mt-2">{sourcesData.title}</h3>
                <p className="text-sm text-gray-400 mt-1 italic">{sourcesData.policy}</p>
              </div>

              <div className="space-y-3">
                {sourcesData.sources.map((source) => (
                  <a
                    key={source.id}
                    href={source.origin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg border border-navy-600 hover:border-cyan-500/50 bg-navy-800/30 hover:bg-navy-800/60 transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getSourceTypeIcon(source.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-text-primary text-sm break-words">{source.title}</p>
                        <p className="text-xs text-cyan-300 mt-1 break-all">{source.origin}</p>
                        <p className="text-xs text-gray-500 mt-1">{getSourceTypeLabel(source.type)}</p>
                      </div>
                      <span className="text-lg flex-shrink-0">→</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-navy-700">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Queste fonti sono state utilizzate per preparare il contenuto via NotebookLM.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
