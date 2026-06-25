import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  type = 'button', 
  disabled = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400/20',
    outline: 'border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-white',
    ghost: 'hover:bg-white/5 text-slate-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
