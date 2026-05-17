import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-[1.6rem] border border-border-subtle bg-[linear-gradient(180deg,rgba(22,27,34,0.98),rgba(13,17,23,0.98))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:border-accent-green/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}
