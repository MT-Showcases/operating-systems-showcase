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
  const baseStyles = 'terminal-heading px-6 py-3 min-h-11 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:outline-none';

  const variants = {
    primary: 'bg-accent-green/12 text-accent-green border border-accent-green/30 hover:bg-accent-green/20 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
    secondary: 'border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan/10 hover:scale-[1.02]',
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
