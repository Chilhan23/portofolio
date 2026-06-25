import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import useSEO from '../hooks/useSEO';
import { personalInfo, projects } from '../data/data';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Github, Linkedin } from '../components/ui/Icons';

// Profile Picture goten
import gotenImg from '../assets/goten.jpg';

export default function Home() {
  useSEO('Home', 'Muhammad Rayhan Ramadhan - Backend Developer | Security Enthusiast | DFIR Learner | CTF Player portfolio.');
  const typewriterText = useTypewriter(personalInfo.titles, 80);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      className="flex flex-col gap-16 py-4 md:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 min-h-[50vh]">
        <div className="flex-1 flex flex-col gap-6 text-left z-10">
          <motion.div variants={itemVariants} className="inline-flex">
            <Badge variant="primary" className="py-1 px-3">
              Available for Opportunities
            </Badge>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 font-medium"
            >
              Just call me <span className="text-white font-semibold">{personalInfo.nickname}</span>
            </motion.h2>
          </div>

          {/* Typewriter text */}
          <motion.div 
            variants={itemVariants}
            className="h-8 md:h-10 flex items-center font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent"
          >
            <span>{typewriterText}</span>
            <span className="w-[3px] h-6 md:h-8 bg-blue-500 ml-1" />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed font-sans"
          >
            Building scalable backend systems, exploring cybersecurity, and solving real-world technical challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
            <Link to="/projects">
              <Button variant="primary" className="gap-2 text-xs md:text-sm">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-xs md:text-sm">Contact Me</Button>
            </Link>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("CV file is currently being updated. Please check back soon or reach out via Email!"); }}>
              <Button variant="ghost" className="text-slate-400 hover:text-white text-xs md:text-sm">Download CV</Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 mt-2">
            <a 
              href="https://github.com/Chilhan23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5.5 h-5.5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5.5 h-5.5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5.5 h-5.5" />
            </a>
          </motion.div>
        </div>

        {/* Profile Card instead of rotating graphic */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 w-full max-w-[320px] relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-sky-500/2 rounded-2xl blur-3xl" />
          
          <Card 
            hoverEffect 
            className="p-3 w-full bg-slate-900 border-white/5 shadow-2xl relative overflow-hidden flex flex-col gap-4"
          >
            {/* Image container */}
            <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-slate-950">
              <img src={gotenImg} alt="Muhammad Rayhan Ramadhan" className="w-full h-full object-cover" />
            </div>

            {/* Profile Brief Info */}
            <div className="px-2 pb-2">
              <h3 className="font-display font-bold text-white text-sm">Muhammad Rayhan Ramadhan</h3>
              <p className="text-[11px] text-slate-400 mt-1">Backend Developer & Security Enthusiast</p>
              
              <div className="w-full h-[1px] bg-white/5 my-3" />
              
              <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono">
                <span>STATUS: ACTIVE</span>
                <span>BANDA ACEH, ID</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* About Summary & Stats */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <Badge variant="primary" className="w-fit">Overview</Badge>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Engineering Resilient Backend Solutions</h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Saya mengkhususkan diri dalam merancang arsitektur server-side yang scalable, mengamankan data flow, dan menganalisis sistem keamanan untuk mendeteksi serta memitigasi kerentanan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <Card key={idx} hoverEffect className="p-5 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-display font-bold text-white mb-1">{stat.value}</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Badge variant="accent" className="w-fit">Selected Work</Badge>
            <h2 className="text-2xl font-display font-bold text-white">Featured Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs md:text-sm text-blue-400 hover:text-blue-300 font-semibold group">
            View All Projects 
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, idx) => (
            <Card key={idx} hoverEffect className="flex flex-col p-5 h-full gap-4">
              {p.imgSrc && (
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-950 border border-white/5">
                  <img 
                    src={p.imgSrc} 
                    alt={p.title} 
                    loading="eager" 
                    fetchPriority="high" 
                    width={640} 
                    height={360} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">Featured</Badge>
                  <Badge variant={p.status === 'Production' ? 'success' : 'default'}>
                    {p.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-display font-bold text-white mt-1">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{p.desc}</p>
              </div>
              <div className="flex flex-col gap-3 mt-auto pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-semibold text-slate-500 bg-slate-950 border border-slate-800/80 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200">
                    GitHub ↗
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-2xl border border-white/5 bg-[#0F172A]/30 overflow-hidden py-10 px-6 text-center flex flex-col items-center justify-center gap-5">
        <h2 className="text-xl md:text-2xl font-display font-bold text-white">Tertarik berdiskusi atau berkolaborasi?</h2>
        <p className="text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed">
          Saya selalu terbuka untuk mendiskusikan peluang proyek baru, riset cybersecurity, atau kolaborasi backend engineering. Mari buat sistem yang aman dan scalable bersama!
        </p>
        <Link to="/contact">
          <Button variant="primary" className="gap-2 text-xs md:text-sm">
            Get In Touch <Mail className="w-4 h-4" />
          </Button>
        </Link>
      </section>
    </motion.div>
  );
}
