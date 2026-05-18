import { chapters, chaptersBySlug } from '@/data/chapters';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import SectionMediaSlots from '@/components/SectionMediaSlots';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import ChapterQuiz from '@/components/ChapterQuiz';
import ChapterMediaSlots from '@/components/ChapterMediaSlots';
import SourceToggle from '@/components/SourceToggle';
import Breadcrumb from '@/components/Breadcrumb';
import SidebarToggleWrapper from '@/components/SidebarToggleWrapper';
import BackToTopButton from '@/components/BackToTopButton';
import GlossaryTerm from '@/components/GlossaryTerm';
import QuizScoreDashboard from '@/components/QuizScoreDashboard';
import TutorChat from '@/components/TutorChat';
import ChapterNav from '@/components/ChapterNav';
import { getTermsByIds } from '@/data/glossary';

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chaptersBySlug[slug];

  if (!chapter) {
    return {
      title: 'Capitolo non trovato',
      description: 'Il capitolo richiesto non esiste.',
    };
  }

  const title = `Capitolo ${String(chapter.id).padStart(2, '0')} — ${chapter.title}`;
  const description = chapter.description;
  const path = `/chapters/${chapter.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function buildChapterSource(chapter: (typeof chapters)[number]) {
  const sections = chapter.sections
    .map((section, index) => {
      const sectionKeyPoints = section.keyPoints?.length
        ? `\nPUNTI CHIAVE SEZIONE:\n- ${section.keyPoints.join('\n- ')}`
        : '';
      const terminalCommands = section.terminalCommands?.length
        ? `\nCOMANDI / TERMINALE:\n${section.terminalCommands
            .map((block) => `- ${block.command}${block.explanation ? ` — ${block.explanation}` : ''}`)
            .join('\n')}`
        : '';
      const references = section.commandReferences?.length
        ? `\nREFERENCE RAPIDE:\n${section.commandReferences
            .map((ref) => `- ${ref.command}: ${ref.description}`)
            .join('\n')}`
        : '';

      return `${index + 1}) ${section.title}\n${section.content}${sectionKeyPoints}${terminalCommands}${references}`;
    })
    .join('\n\n');

  return `CAPITOLO ${String(chapter.id).padStart(2, '0')} — ${chapter.title}
SLUG: ${chapter.slug}

DESCRIZIONE:
${chapter.description}

OBIETTIVI DIDATTICI:
- ${chapter.objectives.join('\n- ')}

SEZIONI COMPLETE:
${sections}

TAKEAWAY FINALI:
- ${chapter.keyTakeaways.join('\n- ')}

ISTRUZIONI PER NOTEBOOKLM / GENERAZIONE CONTENUTI:
- Usa solo il contenuto di questo capitolo come base primaria.
- Mantieni tono didattico, pratico, chiaro, startup-friendly.
- Non introdurre concetti avanzati non presenti nel capitolo senza marcarli come estensione.
- Se generi video, podcast, infografica o dispensa, conserva definizioni, warning ed esempi operativi.
- Se il capitolo include comandi Linux, spiega sempre scopo, rischio ed effetto pratico.

OUTPUT ATTESO:
Genera materiali coerenti con il capitolo (video, podcast, infografica, handout o approfondimento) senza perdere struttura, accuratezza e taglio operativo.`;
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = chaptersBySlug[slug];

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const chapterNum = currentIndex + 1;
  const totalChapters = chapters.length;
  const progressPercent = (chapterNum / totalChapters) * 100;
  const glossaryTerms = getTermsByIds(chapter.glossary ?? []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="pl-12 md:pl-0 mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Capitoli', href: '/#chapters' },
              { label: `${String(chapter.id).padStart(2, '0')} — ${chapter.title}` },
            ]}
          />
        </div>

        <div className="flex gap-0 md:gap-6 lg:gap-8">
          <SidebarToggleWrapper
            currentSlug={slug}
            sections={chapter.sections.map((section) => ({ id: section.id, title: section.title }))}
          />

          <main className="flex-1 min-w-0">
            <div className="bg-bg-surface/80 rounded-none px-5 py-4 mb-6 border border-border-subtle">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-accent-cyan">
                  Capitolo {chapterNum} di {totalChapters}
                </span>
                <span className="text-xs text-text-secondary font-mono">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-black/30 rounded-none overflow-hidden">
                <div
                  className="h-2 rounded-none bg-[linear-gradient(90deg,rgba(57,211,83,1),rgba(88,166,255,1))] transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <ChapterHeader
                title={chapter.title}
                description={chapter.description}
                chapterNumber={chapter.id}
                duration={chapter.duration}
                objectives={chapter.objectives}
              />
            </div>

            <ChapterMediaSlots chapter={chapter} />
            <SourceToggle source={buildChapterSource(chapter)} label="Mostra fonte capitolo" />

            {glossaryTerms.length > 0 ? (
              <section className="rounded-none border border-border-subtle bg-bg-surface p-6 mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Glossario del capitolo</p>
                    <h2 className="mt-2 text-xl font-semibold text-text-primary">Termini da tenere aperti mentre studi</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-text-secondary">
                    Tocca un termine per aprire il drawer e collegare teoria, comandi e pratica Linux.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {glossaryTerms.map((term) => (
                    <span key={term.id} className="rounded-none border border-border-subtle bg-black/20 px-3 py-2 text-sm text-text-primary">
                      <GlossaryTerm termId={term.id}>{term.term}</GlossaryTerm>
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="space-y-8 mb-12">
              {chapter.sections.map((section, idx) => (
                <div key={section.id}>
                  <SectionCard
                    id={section.id}
                    title={section.title}
                    content={section.content}
                    keyPoints={section.keyPoints}
                    glossaryIds={chapter.glossary ?? []}
                    terminalCommands={section.terminalCommands}
                    commandReferences={section.commandReferences}
                  />
                  <SectionMediaSlots
                    chapterId={chapter.id}
                    chapterSlug={chapter.slug}
                    sectionIndex={idx}
                    sectionTitle={section.title}
                    sectionContent={section.content}
                  />
                </div>
              ))}
            </div>

            <KeyTakeaway items={chapter.keyTakeaways} />

            {chapter.discussionPrompts && chapter.discussionPrompts.length > 0 ? (
              <div className="mt-8">
                <DiscussionPrompt prompts={chapter.discussionPrompts} />
              </div>
            ) : null}

            <div className="mt-8">
              <QuizScoreDashboard />
            </div>

            {chapter.quiz && chapter.quiz.length > 0 ? (
              <div className="mt-8">
                <ChapterQuiz quiz={chapter.quiz} chapterSlug={chapter.slug} />
              </div>
            ) : null}

            <TutorChat chapterSlug={chapter.slug} />

            <div className="mt-8">
              <ChapterNav
                previousChapter={previousChapter ? { slug: previousChapter.slug, title: previousChapter.title } : null}
                nextChapter={nextChapter ? { slug: nextChapter.slug, title: nextChapter.title } : null}
                currentChapter={chapter.id}
                totalChapters={chapters.length}
              />
            </div>
          </main>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
