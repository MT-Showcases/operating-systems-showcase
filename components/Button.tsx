import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  glow?: boolean;
  className?: string;
  onClick?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  glow = false,
  className = '',
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'terminal-heading px-6 py-3 min-h-11 font-semibold transition-all duration-200 inline-flex items-center justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:outline-none border-2';

  const variants = {
    primary: 'bg-bg-primary text-accent-green border-accent-green/60 hover:bg-bg-surface hover:border-accent-green',
    secondary: 'border-accent-cyan/60 bg-bg-primary text-accent-cyan hover:bg-bg-surface hover:border-accent-cyan',
  };

  const glowClass = glow ? (variant === 'primary' ? 'btn-glow-green' : 'btn-glow-cyan') : '';

  const finalClassName = `${baseStyles} ${variants[variant]} ${glowClass} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link href={href} className={finalClassName}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={finalClassName} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
