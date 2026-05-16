import type { Chapter } from "@/data/types";

export const chapters: Chapter[] = [];

export const chaptersBySlug = chapters.reduce<Record<string, Chapter>>((accumulator, chapter) => {
  accumulator[chapter.slug] = chapter;
  return accumulator;
}, {});
