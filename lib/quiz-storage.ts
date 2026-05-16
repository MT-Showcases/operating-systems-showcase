const STORAGE_PREFIX = "os-showcase-quiz";

export function buildQuizStorageKey(chapterSlug: string) {
  return `${STORAGE_PREFIX}:${chapterSlug}`;
}
