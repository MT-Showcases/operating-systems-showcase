'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, Circle, Sparkles } from 'lucide-react';
import type { ChapterInteractivePilot as ChapterInteractivePilotType } from '@/data/types';
import NixButton from './NixButton';

interface ChapterInteractivePilotProps {
  pilot: ChapterInteractivePilotType;
  chapterTitle: string;
}

export default function ChapterInteractivePilot({ pilot, chapterTitle }: ChapterInteractivePilotProps) {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const completedCount = useMemo(
    () => Object.values(completedSteps).filter(Boolean).length,
    [completedSteps]
  );

  const selectedScenario = pilot.scenario && selectedOption !== null ? pilot.scenario.options[selectedOption] : null;

  const toggleStep = (index: number) => {
    setCompletedSteps((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const missionPrompt = [
    `Capitolo: ${chapterTitle}`,
    `Missione: ${pilot.mission.title}`,
    '',
    pilot.mission.steps.map((step, index) => `${index + 1}. ${step.title} - ${step.instruction}`).join('\n'),
    '',
    'Aiutami a svolgere questa missione con esempi pratici e semplici.',
  ].join('\n');

  return (
    <section className="mt-8 border-2 border-accent-green/50 bg-bg-surface p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="terminal-heading text-xs uppercase tracking-[0.24em] text-accent-green">Pilot interattivo</p>
          <h2 className="mt-2 text-2xl font-semibold text-text-primary">{pilot.mission.title}</h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{pilot.mission.intro}</p>
        </div>
        <div className="min-w-64 border border-accent-green/30 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-green">Obiettivo</p>
          <p className="mt-2 text-sm leading-7 text-text-primary">{pilot.mission.winCondition}</p>
          <p className="mt-3 text-xs text-text-secondary">Progresso missione: {completedCount}/{pilot.mission.steps.length}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {pilot.mission.steps.map((step, index) => {
          const done = Boolean(completedSteps[index]);

          return (
            <button
              key={step.title}
              type="button"
              onClick={() => toggleStep(index)}
              className={`border-2 p-4 text-left transition ${done ? 'border-accent-green bg-accent-green/5' : 'border-border-subtle bg-bg-primary hover:border-accent-green/60'}`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent-green">
                  {done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">Step {index + 1}</p>
                  <h3 className="mt-1 text-base font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{step.instruction}</p>
                  <p className="mt-3 text-xs leading-6 text-accent-cyan">Perche conta: {step.whyItMatters}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <NixButton prompt={missionPrompt} />
      </div>

      {pilot.scenario ? (
        <div className="mt-8 border-2 border-accent-cyan/40 bg-bg-primary p-5">
          <div className="flex items-center gap-2 text-accent-cyan">
            <Sparkles className="h-4 w-4" />
            <p className="terminal-heading text-xs uppercase tracking-[0.22em]">Mini gioco decisionale</p>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-text-primary">{pilot.scenario.title}</h3>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{pilot.scenario.situation}</p>
          <p className="mt-4 text-sm font-medium text-text-primary">{pilot.scenario.question}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {pilot.scenario.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = Boolean(option.isCorrect);
              let className = 'border-accent-cyan/40 text-text-primary hover:border-accent-cyan';

              if (isSelected && isCorrect) className = 'border-accent-green bg-accent-green/5 text-accent-green';
              if (isSelected && !isCorrect) className = 'border-accent-amber bg-accent-amber/5 text-text-primary';

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setSelectedOption(index)}
                  className={`min-h-11 border-2 px-4 py-3 text-left text-sm transition ${className}`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {selectedScenario ? (
            <div className="mt-4 border border-accent-cyan/30 bg-black/20 p-4">
              <p className="text-sm leading-7 text-text-primary">{selectedScenario.feedback}</p>
              <p className="mt-2 text-xs leading-6 text-text-secondary">{pilot.scenario.takeaway}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}