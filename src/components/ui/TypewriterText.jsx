import React from 'react';
import useTypewriter from '../../hooks/useTypewriter';

export default function TypewriterText({ texts, speed = 80, className = '' }) {
  const text = useTypewriter(texts, speed);
  return (
    <span className={className}>
      {text}
      <span className="w-[3px] h-6 md:h-8 bg-blue-500 ml-1 inline-block align-middle" />
    </span>
  );
}
