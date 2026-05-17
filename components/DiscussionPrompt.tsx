interface DiscussionPromptProps {
  prompts: string[];
}

export default function DiscussionPrompt({ prompts }: DiscussionPromptProps) {
  return (
    <section className="rounded-[2rem] border border-accent-cyan/25 bg-[linear-gradient(180deg,rgba(88,166,255,0.12),rgba(88,166,255,0.04))] p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/10 text-lg">⟫</span>
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-cyan">Prompt operativo</p>
          <h3 className="terminal-heading text-xl font-semibold text-accent-cyan">Discussione in aula</h3>
        </div>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {prompts.map((prompt) => (
          <li key={prompt} className="flex gap-3 rounded-2xl border border-accent-cyan/10 bg-black/10 px-4 py-3">
            <span className="text-accent-cyan">→</span>
            <span>{prompt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
