import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Key, Cpu, FileSearch, Code, Bug, Activity, Network, Zap, Award, BarChart3 } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { ctfPlatforms } from '../data/data';
import useSEO from '../hooks/useSEO';
import { Github } from '../components/ui/Icons';

export default function Tools() {
  useSEO('Tools & Stats', 'Cybersecurity arsenal including Nmap, Wireshark, Burp Suite, Ghidra, and real-time GitHub contributions statistics.');
  const securityTools = [
    { name: 'Nmap', desc: 'Port scanner & network discovery utility used to map host networks and open ports.', icon: <Network className="w-5 h-5 text-blue-400" /> },
    { name: 'Wireshark', desc: 'Network packet analyzer used for capture and deep inspection of network packets.', icon: <Activity className="w-5 h-5 text-sky-400" /> },
    { name: 'Burp Suite', desc: 'Integrated platform for testing web application security, proxying, and intercepting HTTP requests.', icon: <Key className="w-5 h-5 text-indigo-400" /> },
    { name: 'Metasploit', desc: 'Penetration testing framework used to find, exploit, and validate vulnerabilities.', icon: <Zap className="w-5 h-5 text-orange-400" /> },
    { name: 'Volatility', desc: 'Advanced memory forensics framework used for incident response and malware analysis.', icon: <Cpu className="w-5 h-5 text-purple-400" /> },
    { name: 'Autopsy', desc: 'Digital forensics platform and graphical interface to analyze hard drives, smartphones, and media cards.', icon: <FileSearch className="w-5 h-5 text-rose-400" /> },
    { name: 'Ghidra', desc: 'Software reverse engineering suite developed by the NSA, used for decompiling and analyzing binaries.', icon: <Shield className="w-5 h-5 text-teal-400" /> },
    { name: 'pwntools', desc: 'CTF framework and exploit development library written in Python, designed for rapid prototyping.', icon: <Code className="w-5 h-5 text-amber-400" /> },
    { name: 'pwndbg', desc: 'GDB plug-in that makes debugging with GDB user-friendly, specifically tailored for exploit development.', icon: <Bug className="w-5 h-5 text-emerald-400" /> },
    { name: 'GDB', desc: 'GNU Debugger used to inspect memory state, registers, and trace program execution flow.', icon: <TerminalIcon className="w-5 h-5 text-slate-400" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  function TerminalIcon({ className }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    );
  }

  return (
    <motion.div 
      className="flex flex-col gap-12 py-4 md:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Header */}
      <section className="flex flex-col gap-4 border-b border-white/5 pb-6">
        <Badge variant="primary" className="w-fit">Tools & Stats</Badge>
        <h1 className="text-3xl font-display font-bold text-white">Security Arsenal & GitHub Insights</h1>
        <p className="text-slate-400 text-xs md:text-sm max-w-xl">
          Peralatan digital yang saya gunakan untuk pengujian penetrasi, analisis digital forensics, reverse engineering biner, beserta statistik kontribusi kode secara real-time.
        </p>
      </section>

      {/* Cybersecurity Tools Grid */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-display font-bold text-white">Cybersecurity Toolkit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {securityTools.map((tool, idx) => (
            <Card 
              key={idx} 
              hoverEffect 
              glow
              className="p-5 flex flex-col justify-between gap-4 bg-slate-900/10 border-white/5 h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="p-2 rounded bg-slate-950 border border-white/5 w-fit">
                  {tool.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xs">{tool.name}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-3">
                  {tool.desc}
                </p>
              </div>
              <div className="text-[8px] text-blue-500/60 font-mono tracking-widest uppercase">
                ACTIVE MODULE
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4.5 h-4.5 text-blue-500" />
          <h2 className="text-xl font-display font-bold text-white">GitHub Analytics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverEffect={false} className="p-4 bg-slate-950 border-white/5 flex items-center justify-center min-h-[200px]">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=Chilhan23&show_icons=true&theme=tokyonight&hide_border=true" 
              alt="Chilhan23 GitHub Stats" 
              loading="lazy"
              className="max-w-full h-auto object-contain"
            />
          </Card>

          <Card hoverEffect={false} className="p-4 bg-slate-950 border-white/5 flex items-center justify-center min-h-[200px]">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Chilhan23&layout=compact&theme=tokyonight&hide_border=true" 
              alt="Chilhan23 Top Languages" 
              loading="lazy"
              className="max-w-full h-auto object-contain"
            />
          </Card>
        </div>
      </section>

      {/* CTF Platforms */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Award className="w-4.5 h-4.5 text-blue-500" />
          <h2 className="text-xl font-display font-bold text-white">CTF Platforms</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ctfPlatforms.map((platform, idx) => (
            <Card 
              key={idx} 
              hoverEffect 
              className="p-5 flex flex-col items-center justify-center text-center bg-slate-900/10 border-white/5 gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/5 flex items-center justify-center border border-blue-500/15">
                <Shield className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xs">{platform.name}</h3>
                <span className="text-[9px] text-slate-500 mt-1 block uppercase tracking-wider font-semibold">
                  {platform.level}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
