import React from 'react';

export default function Badge({ children, className = '', variant = 'default' }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border font-display transition-colors duration-200';
  
  const variants = {
    default: 'bg-slate-800/40 text-slate-300 border-slate-700/30',
    primary: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]',
    accent: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
