import React, { useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Terminal, Mail, Shield } from 'lucide-react';
import AnimatedGrid from '../ui/AnimatedGrid';
import { personalInfo } from '../../data/data';
import { Github, Linkedin } from '../ui/Icons';

// Profile Picture goten
import gotenImg from '../../assets/goten.jpg';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Tools', path: '/tools', icon: <Terminal className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative text-white overflow-x-hidden">
      {/* Static Background grid */}
      <AnimatedGrid />
      
      {/* Glow overlays with pointer-events-none */}
      <div 
        className="glow-overlay pointer-events-none w-[400px] h-[400px] top-[-100px] left-[-100px] bg-blue-500/5" 
        style={{ willChange: 'transform', transform: 'translateZ(0)' }} 
      />
      <div 
        className="glow-overlay pointer-events-none w-[500px] h-[500px] bottom-[-100px] right-[-100px] bg-blue-500/5" 
        style={{ willChange: 'transform', transform: 'translateZ(0)' }} 
      />

      {/* Desktop Left Sidebar */}
      <aside className="hidden md:flex flex-col w-[260px] h-screen bg-[#0E1322] border-r border-white/5 fixed left-0 top-0 p-6 justify-between z-30">
        <div className="flex flex-col gap-8">
          {/* Profile Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img src={gotenImg} alt="Muhammad Rayhan Ramadhan Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-display font-bold text-sm tracking-wide text-white">Rayhan</h1>
              <span className="text-[10px] text-slate-400 font-mono tracking-tighter block uppercase">
                Backend & Cyber
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/10 text-blue-400 border-l-2 border-blue-500 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer & Connections */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a 
              href="https://github.com/Chilhan23" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="text-[10px] text-slate-500 flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-500/50" />
            <span>© 2026 Rayhan</span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header - Solid background, no blurs */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 z-30 bg-[#0A0F1C] border-b border-white/5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0">
            <img src={gotenImg} alt="Muhammad Rayhan Ramadhan Profile Picture" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-sm tracking-wide text-white">Rayhan</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono">
          <span>LOC: BANDA_ACEH</span>
        </div>
      </header>

      {/* Mobile Bottom Bar Navigation - Solid background, no blurs */}
      <nav className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-[#0E1322] border border-white/10 rounded-xl px-4 py-2 flex items-center justify-around shadow-2xl">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `p-2.5 rounded-lg flex flex-col items-center justify-center transition-colors duration-200 ${
                isActive ? 'text-blue-500 bg-blue-500/5' : 'text-slate-400 hover:text-white'
              }`
            }
            aria-label={link.name}
          >
            {link.icon}
          </NavLink>
        ))}
      </nav>

      {/* Content offset container using standard padding-left on desktop */}
      <div className="md:pl-[260px] flex flex-col min-h-screen">
        <main className="flex-grow pt-24 pb-28 md:pt-12 md:pb-12 px-6 md:px-12 z-10 relative max-w-5xl w-full mx-auto flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="w-full flex-grow flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
