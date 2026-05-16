import { notFound } from "next/navigation";
import { chaptersBySlug } from "@/data/chapters";

interface ChapterPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = chaptersBySlug[slug];

  if (!chapter) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary px-6 py-10 text-text-primary sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border-subtle bg-bg-surface p-8">
        <p className="terminal-heading text-sm uppercase tracking-[0.24em] text-accent-cyan">
          Capitolo {chapter.id}
        </p>
        <h1 className="terminal-heading mt-4 text-3xl font-bold text-accent-green">
          {chapter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">{chapter.description}</p>
        <div className="mt-8 rounded-2xl border border-dashed border-border-subtle bg-black/10 p-5 text-sm leading-7 text-text-secondary">
          Placeholder route attiva. Le sezioni e i quiz verranno popolati dai file del capitolo.
        </div>
      </div>
    </main>
  );
}
