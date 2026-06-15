import { getAllVideos, getVideosByChapter } from '@/lib/shorts';
import ShortsPlayer from '@/components/ShortsPlayer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video pillole sui Sistemi Operativi — un capitolo alla volta.',
};

interface Props {
  searchParams: Promise<{ chapter?: string }>;
}

export default async function ShortsPage({ searchParams }: Props) {
  const { chapter } = await searchParams;
  const videos = chapter ? getVideosByChapter(chapter) : getAllVideos();

  return <ShortsPlayer initialVideos={videos} chapterFilter={chapter ?? null} />;
}
