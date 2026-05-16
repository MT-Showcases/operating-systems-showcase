interface DiscussionPromptProps {
  prompts: string[];
}

export default function DiscussionPrompt({ prompts }: DiscussionPromptProps) {
  return (
    <section className="rounded-3xl border border-accent-cyan/25 bg-accent-cyan/10 p-6">
      <h3 className="terminal-heading text-xl font-semibold text-accent-cyan">Discussione in aula</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {prompts.map((prompt) => (
          <li key={prompt} className="flex gap-3">
            <span className="text-accent-cyan">→</span>
            <span>{prompt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
