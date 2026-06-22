'use client';

import { useEffect, useRef, useState } from 'react';

type Phase = 'popin' | 'typing' | 'deleting' | 'popout';

const TYPE_SPEED = 38;
const DELETE_SPEED = 20;
const PRE_TYPE_PAUSE = 500;
const PAUSE_AFTER_TYPE = 2200;
const POPOUT_DURATION = 280;

interface Props {
  message: string;
  onDone: () => void;
  triangleClass?: string;
}

export default function NixPopup({ message, onDone, triangleClass = 'right-4' }: Props) {
  const [phase, setPhase] = useState<Phase>('popin');
  const [displayed, setDisplayed] = useState('');
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    if (phase === 'popin') {
      const t = setTimeout(() => setPhase('typing'), PRE_TYPE_PAUSE);
      return () => clearTimeout(t);
    }
    if (phase === 'typing') {
      if (displayed.length < message.length) {
        const t = setTimeout(() => setDisplayed(message.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }
    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('popout'), 80);
      return () => clearTimeout(t);
    }
    if (phase === 'popout') {
      const t = setTimeout(() => onDoneRef.current(), POPOUT_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase, displayed, message]);

  return (
    <div className={`${phase === 'popout' ? 'animate-nix-popout' : 'animate-nix-popup'} relative bg-bg-surface border border-accent-green/50 px-3 py-2 text-xs text-accent-green shadow-lg w-max max-w-[80vw] whitespace-nowrap`}>
      {displayed}
      <span className="terminal-cursor" aria-hidden="true" />
      <div
        className={`absolute top-full ${triangleClass} w-0 h-0`}
        style={{
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '5px solid rgba(74,222,128,0.5)',
        }}
      />
    </div>
  );
}
