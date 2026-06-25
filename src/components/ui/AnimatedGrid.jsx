import React from 'react';

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-transparent to-[#0A0F1C] pointer-events-none" />
    </div>
  );
}
