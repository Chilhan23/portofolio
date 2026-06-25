import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Database, Cpu, Terminal, Sparkles, FileText, CheckCircle2, X } from 'lucide-react';
import { personalInfo, techStack, areasOfInterest, certificates } from '../data/data';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO('About Me', 'Professional biography, technical stack, areas of interest, and cybersecurity certificates of Muhammad Rayhan Ramadhan.');
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'backend':
        return <Database className="w-5 h-5 text-blue-500" />;
      case 'frontend':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5 text-indigo-400" />;
      case 'os':
        return <Cpu className="w-5 h-5 text-slate-400" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-12 py-4 md:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title & Introduction */}
      <section className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-white/5 pb-8">
        <div className="flex-1 flex flex-col gap-4">
          <Badge variant="primary" className="w-fit">About Me</Badge>
          <h1 className="text-3xl font-display font-bold text-white">Who is Rayhan?</h1>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans max-w-2xl">
            {personalInfo.bio}
          </p>
        </div>

        {/* Stats Card Group */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[340px]">
          {personalInfo.stats.map((stat, index) => (
            <Card key={index} hoverEffect className="p-4 flex flex-col justify-center border-white/5 bg-slate-900/30">
              <span className="text-xl font-display font-bold text-blue-500">{stat.value}</span>
              <span className="text-[9px] text-slate-500 tracking-wider font-semibold uppercase mt-1">{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Focus Area List */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-display font-bold text-white">Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card hoverEffect className="p-5 flex gap-4 bg-slate-900/10 border-white/5">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 h-fit">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm">Backend Development</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Developing robust backend workflows, handling complex business logic, and deploying secure databases.</p>
            </div>
          </Card>

          <Card hoverEffect className="p-5 flex gap-4 bg-slate-900/10 border-white/5">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 h-fit">
              <Shield className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm">Cybersecurity & CTF</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Active Capture The Flag solver, exploring penetration testing, web security, and low level vulnerabilities.</p>
            </div>
          </Card>

          <Card hoverEffect className="p-5 flex gap-4 bg-slate-900/10 border-white/5">
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 h-fit">
              <Cpu className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm">Digital Forensics (DFIR)</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Analyzing memory dumps, disk images, network logs to identify threat actors and system compromises.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-display font-bold text-white">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([key, category]) => (
            <Card key={key} hoverEffect={false} className="p-5 bg-slate-900/20 border-white/5">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3.5 mb-3.5">
                {getCategoryIcon(key)}
                <h3 className="font-display font-bold text-white text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, idx) => (
                  <Badge key={idx} variant="default" className="text-xs py-0.5 px-2 bg-slate-950/80 border-white/5 hover:border-blue-500/30 transition-all duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-display font-bold text-white">Areas of Interest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {areasOfInterest.map((interest, idx) => (
            <Card key={idx} hoverEffect className="p-5 flex flex-col justify-between bg-slate-900/5 border-white/5 h-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <h3 className="font-display font-bold text-white text-sm">{interest.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  {interest.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-white">Certifications</h2>
          <Badge variant="primary">{certificates.length} Total</Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              hoverEffect 
              onClick={() => setSelectedCert(cert)}
              className="flex flex-col cursor-pointer bg-slate-900/30 border-white/5 group overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative border-b border-white/5">
                <img 
                  src={cert.imgSrc} 
                  alt={cert.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white drop-shadow-md" />
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
                <h3 className="text-xs font-display font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <div className="mt-1">
                  <Badge variant="accent" className="text-[8px] uppercase tracking-wider py-0.5 px-2">
                    {cert.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative max-w-3xl w-full bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div>
                  <h3 className="font-display font-bold text-white text-sm">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-400">{selectedCert.issuer} ({selectedCert.year})</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)} 
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[60vh] overflow-y-auto">
                <img 
                  src={selectedCert.imgSrc} 
                  alt={selectedCert.title} 
                  className="max-h-[50vh] object-contain rounded border border-white/5" 
                />
              </div>

              <div className="p-4 flex justify-between items-center border-t border-white/5 bg-slate-900/50">
                <Badge variant="primary">{selectedCert.category}</Badge>
                <Button variant="outline" size="sm" onClick={() => setSelectedCert(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
