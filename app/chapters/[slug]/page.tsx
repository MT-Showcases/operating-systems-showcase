import SectionMediaSlots from '@/components/SectionMediaSlots';
import { chapters, chaptersBySlug } from '@/data/chapters';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import ChapterQuiz from '@/components/ChapterQuiz';
import SourceToggle from '@/components/SourceToggle';
import Breadcrumb from '@/components/Breadcrumb';
import SidebarToggleWrapper from '@/components/SidebarToggleWrapper';
import BackToTopButton from '@/components/BackToTopButton';
import GlossaryTerm from '@/components/GlossaryTerm';
import QuizScoreDashboard from '@/components/QuizScoreDashboard';
import ChapterNav from '@/components/ChapterNav';
import { getTermsByIds } from '@/data/glossary';
import { ChevronRight } from 'lucide-react';

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
            <div className="border-2 border-accent-cyan/40 bg-bg-surface px-5 py-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">
                  Capitolo {chapterNum} di {totalChapters}
                </span>
                <span className="terminal-heading text-xs text-text-secondary">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-1.5 bg-black/30 overflow-hidden">
                <div
                  className="h-1.5 bg-accent-green transition-all duration-700"
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

            <SectionMediaSlots
              chapterId={chapter.id}
              chapterSlug={chapter.slug}
              sectionIndex={0}
              sectionTitle={chapter.title}
              sectionContent={chapter.description}
              media={chapter.media}
              hideSourceToggle
            />
            
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

            {chapter.pilotContent?.whyItMatters?.length ? (
              <section className="mb-8 border-2 border-accent-green/40 bg-bg-surface p-6">
                <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Perché conta</p>
                <div className="mt-4 space-y-4 text-sm leading-8 text-text-secondary">
                  {chapter.pilotContent.whyItMatters.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
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
                </div>
              ))}
            </div>

            <KeyTakeaway items={chapter.keyTakeaways} />

            {chapter.pilotContent?.commonMistakes?.length ? (
              <section className="mt-8 border-2 border-accent-amber/40 bg-bg-surface p-6">
                <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-amber">Errori comuni</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
                  {chapter.pilotContent.commonMistakes.map((mistake) => (
                    <li key={mistake} className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-amber" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {chapter.pilotContent?.realWorld?.length ? (
              <section className="mt-8 border-2 border-accent-cyan/40 bg-bg-surface p-6">
                <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Nel mondo reale</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
                  {chapter.pilotContent.realWorld.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {chapter.pilotContent?.deepDive?.length ? (
              <section className="mt-8 border-2 border-accent-green/30 bg-bg-surface p-6">
                <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Approfondisci</p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {chapter.pilotContent.deepDive.map((resource) => (
                    <div key={`${resource.level}-${resource.title}`} className="border-2 border-border-subtle bg-black/20 p-4">
                      <p className="terminal-heading text-[11px] uppercase tracking-[0.22em] text-accent-green">{resource.level}</p>
                      <h3 className="mt-2 text-sm font-semibold text-text-primary">{resource.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-text-secondary">{resource.description}</p>
                      {resource.url ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 border border-accent-cyan/40 px-3 py-1.5 text-xs text-accent-cyan transition hover:bg-accent-cyan/10"
                        >
                          Apri risorsa <ChevronRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {chapter.pilotContent?.miniTask?.length ? (
              <section className="mt-8 border-2 border-accent-cyan/40 bg-bg-surface p-6">
                <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Mini task</p>
                <div className="mt-4 space-y-4 text-sm leading-8 text-text-secondary">
                  {chapter.pilotContent.miniTask.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ) : null}

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
