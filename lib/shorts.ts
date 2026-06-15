import { chapters } from '@/data/chapters';

export interface ChapterVideoItem {
  chapterId: number;
  chapterSlug: string;
  chapterTitle: string;
  videoPath: string;
  videoTitle: string;
  videoDescription: string;
}

export function getAllVideos(): ChapterVideoItem[] {
  return chapters.flatMap((ch) =>
    (ch.media ?? [])
      .filter((m) => m.type === 'video' && m.notes?.toLowerCase().includes('ready'))
      .map((m) => ({
        chapterId: ch.id,
        chapterSlug: ch.slug,
        chapterTitle: ch.title,
        videoPath: m.placeholderPath,
        videoTitle: m.title,
        videoDescription: m.description,
      }))
  );
}

export function getVideosByChapter(slug: string): ChapterVideoItem[] {
  return getAllVideos().filter((v) => v.chapterSlug === slug);
}
