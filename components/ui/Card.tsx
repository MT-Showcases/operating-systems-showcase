import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border-2 border-accent-cyan/60 bg-bg-surface p-5 hover:border-accent-cyan transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}
