'use client';

import { useState, useEffect } from 'react';

type Phase = 'typing' | 'deleting';

interface Props {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  className?: string;
}

export default function TerminalRotator({
  phrases,
  typeSpeed = 40,
  deleteSpeed = 22,
  pauseAfterType = 2200,
  pauseAfterDelete = 400,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  useEffect(() => {
    const current = phrases[index];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('deleting'), pauseAfterType);
      return () => clearTimeout(t);
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase('typing');
      }, pauseAfterDelete);
      return () => clearTimeout(t);
    }
  }, [phase, displayed, index, phrases, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className}>
      {displayed}
      <span className="terminal-cursor" aria-hidden="true" />
    </span>
  );
}
