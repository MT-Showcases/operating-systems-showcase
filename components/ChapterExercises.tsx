import Link from 'next/link';

type ChapterExercise = {
  title: string;
  objective: string;
  duration?: string;
  steps: string[];
  deliverable: string;
  resources?: Array<{ label: string; path: string }>;
};

interface Props {
  exercises: ChapterExercise[];
}

export default function ChapterExercises({ exercises }: Props) {
  if (!exercises || exercises.length === 0) return null;

  return (
    <section className="mt-8 border-2 border-accent-cyan/40 bg-bg-surface p-6">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div>
          <p className="terminal-heading text-xs uppercase tracking-[0.22em] text-accent-amber">Esercizi pratici</p>
          <h3 className="mt-2 text-xl font-semibold text-text-primary">Applica i concetti del capitolo</h3>
        </div>
      </div>
      <div className="space-y-4">
        {exercises.map((exercise, idx) => (
          <div key={idx} className=" border-2 border-accent-cyan/40 bg-bg-surface p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h4 className="text-text-primary font-semibold">{exercise.title}</h4>
              {exercise.duration ? (
                <span className="text-xs px-2 py-1 bg-bg-surface text-accent-cyan border-2 border-accent-cyan/30 whitespace-nowrap">
                  {exercise.duration}
                </span>
              ) : null}
            </div>
            <p className="text-text-secondary mb-4">{exercise.objective}</p>
            <ol className="list-decimal list-inside text-text-primary space-y-2 mb-4">
              {exercise.steps.map((step, stepIdx) => (
                <li key={stepIdx}>{step}</li>
              ))}
            </ol>
            {exercise.resources && exercise.resources.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-4">
                {exercise.resources.map((resource) => (
                  <Link
                    key={resource.path}
                    href={resource.path}
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 border-2 border-accent-green/30 text-accent-green hover:bg-bg-surface transition-all text-sm"
                  >
                    {resource.label}
                  </Link>
                ))}
              </div>
            ) : null}
            <div className="text-sm text-text-secondary border-t border-accent-cyan/40 pt-3">
              <span className="font-semibold text-text-primary">Consegna / checkpoint:</span> {exercise.deliverable}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
