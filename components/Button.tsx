import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'terminal-heading px-6 py-3 min-h-11 font-semibold transition-all duration-200 inline-flex items-center justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:outline-none border-2';

  const variants = {
    primary: 'bg-bg-primary text-accent-green border-accent-green/60 hover:bg-bg-surface hover:border-accent-green',
    secondary: 'border-accent-cyan/60 bg-bg-primary text-accent-cyan hover:bg-bg-surface hover:border-accent-cyan',
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
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
