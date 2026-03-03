import { useState } from "react";

const Navbar = ({ scrolled, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navSections = ["home", "about", "skills", "projects", "certificates", "contact"];

  const containerStyle = {
    width: "100%", maxWidth: "1024px", margin: "0 auto",
    padding: "0 1.5rem", boxSizing: "border-box",
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-github-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        .nav-hamburger-bar {
          width: 20px; height: 2px;
          background: #1a7aff;
          transition: all 0.3s ease;
          display: block;
        }
        .hamburger-open .bar1 { transform: translateY(6px) rotate(45deg); }
        .hamburger-open .bar2 { opacity: 0; transform: scaleX(0); }
        .hamburger-open .bar3 { transform: translateY(-6px) rotate(-45deg); }
        .nav-mobile-link:hover { color: #1a7aff !important; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all 0.3s",
        background: scrolled || menuOpen ? "rgba(3,5,15,0.97)" : "transparent",
        borderBottom: scrolled || menuOpen ? "1px solid #1a7aff20" : "none",
        backdropFilter: scrolled || menuOpen ? "blur(10px)" : "none",
      }}>
        <div style={{ ...containerStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1a7aff", boxShadow: "0 0 8px #1a7aff", animation: "ping-slow 2s infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "monospace", fontSize: "0.8rem", fontWeight: "bold", color: "#1a7aff", whiteSpace: "nowrap" }}>rayhan@portfolio:~$</span>
          </div>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {navSections.map(s => (
              <a key={s} href={`#${s}`} style={{ fontFamily: "monospace", fontSize: "0.75rem", color: activeSection === s ? "#1a7aff" : "#666", textDecoration: "none", transition: "color 0.2s" }}>
                <span style={{ color: "#60a5fa", marginRight: "3px", opacity: 0.6 }}>./</span>{s}
              </a>
            ))}
          </div>

          {/* Desktop GitHub */}
          <a className="nav-github-desktop" href="https://github.com/Chilhan23" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.75rem", fontFamily: "monospace", padding: "6px 12px", borderRadius: "4px", border: "1px solid #1a7aff40", color: "#1a7aff", textDecoration: "none" }}>
            GitHub ↗
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className={`nav-hamburger ${menuOpen ? "hamburger-open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", justifyContent: "center" }}
            aria-label="Toggle menu"
          >
            <span className="nav-hamburger-bar bar1" />
            <span className="nav-hamburger-bar bar2" />
            <span className="nav-hamburger-bar bar3" />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="nav-mobile-menu"
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "400px" : "0",
            transition: "max-height 0.35s ease",
            borderTop: menuOpen ? "1px solid #1a7aff15" : "none",
          }}
        >
          <div style={{ padding: "0.75rem 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navSections.map(s => (
              <a key={s} href={`#${s}`} className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "monospace", fontSize: "0.875rem", color: activeSection === s ? "#1a7aff" : "#888", textDecoration: "none", padding: "0.6rem 0.5rem", borderBottom: "1px solid #ffffff05", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#60a5fa", opacity: 0.5, fontSize: "0.7rem" }}>./</span>
                {s}
                {activeSection === s && <span style={{ marginLeft: "auto", width: "4px", height: "4px", borderRadius: "50%", background: "#1a7aff" }} />}
              </a>
            ))}
            <a href="https://github.com/Chilhan23" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "monospace", fontSize: "0.8rem", padding: "8px 12px", marginTop: "0.5rem", borderRadius: "4px", border: "1px solid #1a7aff40", color: "#1a7aff", textDecoration: "none", textAlign: "center" }}>
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
