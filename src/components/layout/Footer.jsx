import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080C18]/80 backdrop-blur-sm py-8 mt-auto z-10 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h4 className="font-display font-bold text-white text-sm">Muhammad Rayhan Ramadhan</h4>
          <p className="text-xs text-slate-400 mt-1">Backend Developer | Security Enthusiast</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Shield className="w-3.5 h-3.5 text-blue-500/60" />
          <span>© 2026 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
