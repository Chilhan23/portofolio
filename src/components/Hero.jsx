import useTypewriter from "../hooks/useTypewriter";
import { TYPEWRITER_TEXTS } from "../data/data";

const Hero = () => {
  const typed = useTypewriter(TYPEWRITER_TEXTS, 90);

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>

      {/* Subtle grid bg */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#1a7aff 1px, transparent 1px), linear-gradient(90deg, #1a7aff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Glow blob center */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(26,122,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <style>{`
       @keyframes glitch-clip-1 {
  0%, 66%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  70% { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 0); }
  75% { clip-path: inset(50% 0 20% 0); transform: translate(4px, 0); }
  80% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 0); }
  85% { clip-path: inset(5% 0 70% 0); transform: translate(3px, 0); }
  90% { clip-path: inset(70% 0 5% 0); transform: translate(-3px, 0); }
  95% { clip-path: inset(0 0 100% 0); transform: translate(0); }
}
@keyframes glitch-clip-2 {
  0%, 66%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  72% { clip-path: inset(60% 0 10% 0); transform: translate(4px, 0); }
  77% { clip-path: inset(20% 0 50% 0); transform: translate(-4px, 0); }
  82% { clip-path: inset(40% 0 30% 0); transform: translate(2px, 0); }
  87% { clip-path: inset(15% 0 55% 0); transform: translate(-3px, 0); }
  92% { clip-path: inset(55% 0 15% 0); transform: translate(3px, 0); }
  96% { clip-path: inset(0 0 100% 0); transform: translate(0); }
}
@keyframes glitch-main {
  0%, 65%, 100% { transform: translate(0); filter: none; }
  68% { transform: translate(-2px, 1px); filter: brightness(1.15); }
  73% { transform: translate(3px, -1px); filter: brightness(0.88); }
  78% { transform: translate(-3px, 0); filter: brightness(1.2); }
  83% { transform: translate(3px, 1px); filter: brightness(0.9); }
  88% { transform: translate(-1px, -2px); filter: brightness(1.1); }
  93% { transform: translate(2px, 0); filter: brightness(0.92); }
  97% { transform: translate(0); filter: none; }
}
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        .glitch-main {
          animation: glitch-main 5s infinite;
        }
        .glitch-layer-1 {
          position: absolute;
          inset: 0;
          color: #ff3366;
          animation: glitch-clip-1 5s infinite;
          pointer-events: none;
        }
        .glitch-layer-2 {
          position: absolute;
          inset: 0;
          color: #1a7aff;
          animation: glitch-clip-2 5s infinite 0.05s;
          pointer-events: none;
        }
      `}</style>

      <div style={{ textAlign: "center", padding: "0 1.5rem", position: "relative", animation: "fadeInUp 1s ease both", width: "100%", maxWidth: "700px" }}>

        {/* Status pill */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem", padding: "6px 14px", borderRadius: "9999px", border: "1px solid #1a7aff25", background: "#1a7aff08", color: "#1a7aff90", fontSize: "0.7rem", fontFamily: "monospace", letterSpacing: "0.1em" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#60a5fa", animation: "ping-slow 1.5s infinite" }} />
          AVAILABLE FOR COLLABORATION
        </div>

        {/* Name with glitch effect */}
        <div style={{ marginBottom: "1.25rem" }}>
          <div className="glitch-wrapper">
            <h1
              className="hero-text glitch-main"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1, color: "#fff", fontWeight: "700", margin: 0, letterSpacing: "-0.02em" }}
            >
              chilhan
            </h1>
            <span className="glitch-layer-1 hero-text" style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1, fontWeight: "700", letterSpacing: "-0.02em" }}>RAYHAN</span>
            <span className="glitch-layer-2 hero-text" style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1, fontWeight: "700", letterSpacing: "-0.02em" }}>RAYHAN</span>
          </div>
          <div className="hero-text" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "#a0b4cc", fontWeight: "300", letterSpacing: "0.3em", marginTop: "0.25rem", textTransform: "uppercase" }}>
            Muhammad Rayhan Ramadhan
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #1a7aff, transparent)", margin: "0 auto 1.5rem" }} />

        {/* Typewriter */}
        <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontFamily: "monospace", marginBottom: "1.75rem", color: "#4b5563" }}>
          <span style={{ color: "#1a7aff40" }}>$ </span>
          <span style={{ color: "#60a5fa" }}>{typed}</span>
          <span style={{ display: "inline-block", width: "2px", height: "1em", background: "#60a5fa", marginLeft: "2px", verticalAlign: "middle", animation: "blink 1s step-end infinite" }} />
        </div>

        {/* Subtitle */}
        <p style={{ margin: "0 auto 2.5rem", color: "#4b5563", fontFamily: "monospace", fontSize: "0.8rem", lineHeight: "1.8", maxWidth: "380px" }}>
          Siswa RPL @ <span style={{ color: "#1a7aff80" }}>SMK 5 Telkom Banda Aceh</span>
          <br />
          <span style={{ color: "#374151" }}>Hello, I'm Chilhan aka Rayhan 👋</span>
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.875rem", flexWrap: "wrap" }}>
          <a href="#projects"
            style={{ padding: "10px 22px", fontFamily: "monospace", fontSize: "0.8rem", fontWeight: "bold", borderRadius: "4px", background: "#1a7aff", color: "#000", boxShadow: "0 0 20px rgba(26,122,255,0.25)", textDecoration: "none", letterSpacing: "0.05em" }}>
            VIEW_PROJECTS()
          </a>
          <a href="#contact"
            style={{ padding: "10px 22px", fontFamily: "monospace", fontSize: "0.8rem", fontWeight: "bold", borderRadius: "4px", border: "1px solid #1a7aff30", color: "#1a7aff80", textDecoration: "none", letterSpacing: "0.05em" }}>
            CONTACT_ME()
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.25 }}>
          <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "#60a5fa", letterSpacing: "0.2em" }}>SCROLL</span>
          <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, #60a5fa, transparent)", animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
