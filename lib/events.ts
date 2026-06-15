export type AppEventMap = {
  'nix:open': { prompt: string };
  'quiz-score-updated': Record<never, never>;
};

export function emit<K extends keyof AppEventMap>(name: K, detail: AppEventMap[K]): void {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

export function on<K extends keyof AppEventMap>(
  name: K,
  handler: (detail: AppEventMap[K]) => void
): () => void {
  const listener = (e: Event) => handler((e as CustomEvent<AppEventMap[K]>).detail);
  window.addEventListener(name, listener);
  return () => window.removeEventListener(name, listener);
}
