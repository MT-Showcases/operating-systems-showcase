'use client';

import { useState, useEffect } from 'react';

interface Props {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TerminalTypewriter({ text, speed = 70, delay = 300, className }: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const tick = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(tick);
      }, speed);
      return () => clearInterval(tick);
    }, delay);
    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      <span className="terminal-cursor" aria-hidden="true" />
    </span>
  );
}
