import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { personalInfo } from '../data/data';
import useSEO from '../hooks/useSEO';
import { Github, Linkedin } from '../components/ui/Icons';

export default function Contact() {
  useSEO('Contact', 'Get in touch with Muhammad Rayhan Ramadhan for collaboration or backend/cybersecurity inquiries.');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      className="flex flex-col gap-10 py-4 md:py-8 max-w-2xl mx-auto w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Header */}
      <section className="flex flex-col gap-4 border-b border-white/5 pb-6">
        <Badge variant="primary" className="w-fit">Contact</Badge>
        <h1 className="text-3xl font-display font-bold text-white">Get in Touch</h1>
        <p className="text-slate-400 text-xs md:text-sm">
          Hubungi saya untuk pertanyaan proyek, tawaran magang/kerja, kolaborasi backend, atau sekadar berdiskusi tentang keamanan siber.
        </p>
      </section>

      {/* Main Connection Layout */}
      <motion.div variants={itemVariants} className="flex flex-col gap-6">
        <Card hoverEffect={false} className="p-6 bg-slate-900/10 border-white/5 flex flex-col gap-6">
          <h2 className="text-base font-display font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            Contact Channels
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex gap-4 items-start p-4 bg-slate-950/60 rounded-lg border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-blue-500/5 border border-blue-500/15 rounded text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Email</span>
                <span className="text-xs text-slate-300 group-hover:text-blue-400 transition-colors block truncate mt-0.5">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex gap-4 items-start p-4 bg-slate-950/60 rounded-lg border border-white/5">
              <div className="p-2.5 bg-blue-500/5 border border-blue-500/15 rounded text-blue-400">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Location</span>
                <span className="text-xs text-slate-300 block mt-0.5">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/5" />

          {/* Socials Connection */}
          <div className="flex flex-col gap-3">
            <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Social Channels</span>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/Chilhan23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white hover:border-blue-500/20 transition-all duration-300 bg-slate-950 px-4 py-3 rounded-lg border border-white/5 w-full justify-center"
              >
                <Github className="w-4 h-4" />
                GitHub Profile ↗
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white hover:border-blue-500/20 transition-all duration-300 bg-slate-950 px-4 py-3 rounded-lg border border-white/5 w-full justify-center"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                LinkedIn Connection ↗
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
