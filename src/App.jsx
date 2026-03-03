import { useState, useEffect } from "react";
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import CertModal from "./components/CertModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", color: "white", background: "#03050f", fontFamily: "'Courier New', monospace", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1a7aff; border-radius: 2px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }
        .section-title, .hero-text, .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
      `}</style>

      <MatrixRain />

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates onSelectCert={setSelectedCert} />
      <Contact />

      <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 40, fontSize: "0.75rem", fontFamily: "monospace", opacity: 0.3, color: "#1a7aff" }}>
        <div>SYS: ONLINE</div>
        <div>LOC: BANDA_ACEH</div>
      </div>
    </div>
  );
}
