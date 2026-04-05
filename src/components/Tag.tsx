import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-primary-400 group-hover:border-primary-500/30 transition-all duration-300 ${className}`} role="listitem">
      {children}
    </span>
  );
};

