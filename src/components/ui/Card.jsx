import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hoverEffect = true, glow = false, ...props }) {
  const baseClass = `glass-panel rounded-xl overflow-hidden transition-all duration-300 ${glow ? 'shadow-[0_0_20px_rgba(59,130,246,0.08)]' : ''} ${className}`;

  if (hoverEffect) {
    return (
      <motion.div
        whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.25)', boxShadow: '0 12px 30px -10px rgba(59, 130, 246, 0.15)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`${baseClass} border border-white/5`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClass} border border-white/5`} {...props}>
      {children}
    </div>
  );
}
