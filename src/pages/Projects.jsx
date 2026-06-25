import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Shield, Star, BookOpen, Layers, MessageSquare } from 'lucide-react';
import { Github } from '../components/ui/Icons';
import { projects } from '../data/data';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import useSEO from '../hooks/useSEO';

export default function Projects() {
  useSEO('Projects', 'Showcase of development projects, including production systems like SIMPEG KlikData and Tech MBG.');
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'production') return p.status === 'Production';
    if (filter === 'completed') return p.status === 'Completed';
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Fallback visual mockup if screenshots are missing
  const renderFallbackVisual = (project) => {
    const getThemeColors = (title) => {
      switch (title) {
        case 'Web Chat Socket.IO':
          return { bg: 'from-emerald-600/20 to-teal-950/40', iconColor: 'text-emerald-400', icon: <MessageSquare className="w-8 h-8" /> };
        case 'Suara Siswa':
          return { bg: 'from-amber-600/20 to-orange-950/40', iconColor: 'text-amber-400', icon: <Shield className="w-8 h-8" /> };
        case 'Perpus Digital':
          return { bg: 'from-purple-600/20 to-slate-950/40', iconColor: 'text-purple-400', icon: <BookOpen className="w-8 h-8" /> };
        default:
          return { bg: 'from-slate-800/40 to-slate-950/40', iconColor: 'text-slate-400', icon: <Terminal className="w-8 h-8" /> };
      }
    };

    const details = getThemeColors(project.title);

    return (
      <div className={`relative aspect-video bg-gradient-to-br ${details.bg} border-b border-white/5 flex flex-col justify-between p-4 group-hover:from-blue-500/10 transition-all duration-300`}>
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="w-2 h-2 rounded-full bg-red-500/30" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/30" />
          <span className="w-2 h-2 rounded-full bg-green-500/30" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 flex-grow">
          <div className={`${details.iconColor} drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]`}>
            {details.icon}
          </div>
          <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">
            {project.status} MODULE
          </span>
        </div>
        <div className="flex justify-between items-center text-[8px] text-slate-600 font-mono">
          <span>PORT: 8080</span>
          <span>STATUS: ACTIVE</span>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      className="flex flex-col gap-8 py-4 md:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
        <div className="flex flex-col gap-3">
          <Badge variant="primary" className="w-fit">Projects</Badge>
          <h1 className="text-3xl font-display font-bold text-white">Development Portfolio</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            Kumpulan proyek backend dan fullstack development yang dirancang dengan performa tinggi, database teroptimasi, dan keamanan yang kuat.
          </p>
        </div>

        {/* Filters */}
        <div className="flex bg-slate-900/60 border border-white/5 rounded-lg p-1 w-fit shrink-0">
          {['all', 'production', 'completed'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`text-xs font-semibold px-3 py-1.5 rounded transition-all duration-200 cursor-pointer capitalize ${
                filter === type 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {type === 'completed' ? 'Hobby / Completed' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, idx) => (
          <Card 
            key={idx} 
            hoverEffect 
            className="flex flex-col bg-slate-900/10 border-white/5 overflow-hidden group h-full justify-between"
          >
            <div>
              {/* Project Image Screenshot or Fallback Visual */}
              {p.imgSrc ? (
                <div className="relative aspect-video bg-slate-950 overflow-hidden border-b border-white/5">
                  <img 
                    src={p.imgSrc} 
                    alt={p.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
                </div>
              ) : (
                renderFallbackVisual(p)
              )}

              {/* Card Details */}
              <div className="p-5 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-blue-500 fill-blue-500" />
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                      {p.role || 'Developer'}
                    </span>
                  </div>
                  <Badge variant={p.status === 'Production' ? 'success' : 'default'}>
                    {p.status}
                  </Badge>
                </div>

                <h3 className="text-base font-display font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mt-0.5">
                  {p.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-4">
                  {p.desc}
                </p>
              </div>
            </div>

            {/* Tags & Action Links */}
            <div className="px-5 pb-5 pt-0 mt-auto flex flex-col gap-3">
              <div className="flex flex-wrap gap-1">
                {p.tech.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[8px] font-bold text-slate-500 bg-slate-950 border border-slate-900 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-full h-[1px] bg-white/5" />
              <div className="flex gap-4">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                {p.live && (
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
