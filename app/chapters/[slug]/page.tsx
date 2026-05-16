import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { chapters, chaptersBySlug } from '@/data/chapters';
import { getTermsByIds } from '@/data/glossary';
import ChapterHeader from '@/components/ChapterHeader';
import ChapterNav from '@/components/ChapterNav';
import ChapterQuiz from '@/components/ChapterQuiz';
import ChapterSidebar from '@/components/ChapterSidebar';
import ChapterSourcesDisplay from '@/components/ChapterSourcesDisplay';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import GlossaryTerm from '@/components/GlossaryTerm';
import KeyTakeaway from '@/components/KeyTakeaway';
import SectionCard from '@/components/SectionCard';
import BackToTopButton from '@/components/BackToTopButton';

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

interface ChapterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chaptersBySlug[slug];

  if (!chapter) {
    return {
      title: 'Capitolo non trovato',
      description: 'Il capitolo richiesto non esiste.',
    };
  }

  return {
    title: `Capitolo ${String(chapter.id).padStart(2, '0')} — ${chapter.title}`,
    description: chapter.description,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = chaptersBySlug[slug];

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((item) => item.slug === slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const glossaryTerms = getTermsByIds(chapter.glossary);

  return (
    <main className="min-h-screen px-6 py-10 text-text-primary sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
          <Link href="/" className="transition hover:text-accent-cyan">Home</Link>
          <span>/</span>
          <span className="text-text-primary">{chapter.title}</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ChapterSidebar
            currentSlug={chapter.slug}
            sections={chapter.sections.map((section) => ({ id: section.id, title: section.title }))}
          />

          <div className="min-w-0 flex-1 space-y-8">
            <ChapterHeader
              title={chapter.title}
              description={chapter.description}
              chapterNumber={chapter.id}
              duration={chapter.duration}
              objectives={chapter.objectives}
            />

            <ChapterSourcesDisplay chapterSlug={chapter.slug} />

            <section className="rounded-3xl border border-border-subtle bg-bg-surface p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-cyan">Glossario del capitolo</p>
                  <h2 className="mt-2 text-xl font-semibold text-text-primary">Termini da tenere aperti mentre studi</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-text-secondary">
                  Tocca un termine per aprire il drawer con spiegazione rapida e collegare teoria e pratica.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {glossaryTerms.map((term) => (
                  <span key={term.id} className="rounded-full border border-border-subtle bg-black/20 px-3 py-2 text-sm text-text-primary">
                    <GlossaryTerm termId={term.id}>{term.term}</GlossaryTerm>
                  </span>
                ))}
              </div>
            </section>

            <div className="space-y-6">
              {chapter.sections.map((section) => (
                <SectionCard
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  content={section.content}
                  keyPoints={section.keyPoints}
                  glossaryIds={chapter.glossary}
                  terminalCommands={section.terminalCommands}
                  commandReferences={section.commandReferences}
                />
              ))}
            </div>

            <KeyTakeaway items={chapter.keyTakeaways} />
            <DiscussionPrompt prompts={chapter.discussionPrompts} />
            <ChapterQuiz quiz={chapter.quiz} chapterSlug={chapter.slug} />
            <ChapterNav
              previousChapter={previousChapter ? { slug: previousChapter.slug, title: previousChapter.title } : null}
              nextChapter={nextChapter ? { slug: nextChapter.slug, title: nextChapter.title } : null}
              currentChapter={chapter.id}
              totalChapters={chapters.length}
            />
          </div>
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
