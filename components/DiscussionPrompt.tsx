import { ChevronRight } from 'lucide-react';

interface DiscussionPromptProps {
  prompts: string[];
}

export default function DiscussionPrompt({ prompts }: DiscussionPromptProps) {
  return (
    <section className="border-2 border-accent-cyan/60 bg-bg-surface p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center border-2 border-accent-cyan/60 bg-bg-primary text-lg">⟫</span>
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-cyan">Prompt operativo</p>
          <h3 className="terminal-heading text-xl font-semibold text-accent-cyan">Fermati e ragiona</h3>
        </div>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-text-primary">
        {prompts.map((prompt) => (
          <li key={prompt} className="flex gap-3 border-2 border-accent-cyan/40 bg-bg-primary px-4 py-3">
            <ChevronRight className="h-5 w-5 text-accent-cyan flex-shrink-0" />
            <span>{prompt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
