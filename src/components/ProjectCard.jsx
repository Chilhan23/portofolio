import { useState } from "react";

const ProjectCard = ({ title, desc, url, github, tags, index, live = true }) => {
  const [hovered, setHovered] = useState(false);

  const cornerPositions = [
    { top: 0, left: 0, borderTop: true, borderLeft: true },
    { top: 0, right: 0, borderTop: true, borderRight: true },
    { bottom: 0, left: 0, borderBottom: true, borderLeft: true },
    { bottom: 0, right: 0, borderBottom: true, borderRight: true },
  ];

  const handleClick = () => {
    if (live && url) window.open(url, "_blank");
  };

  return (
    <div
      style={{
        position: "relative",
        border: `1px solid ${hovered ? "#1a7aff" : "#1a2a3a"}`,
        borderRadius: "0.5rem", padding: "1.25rem",
        cursor: live ? "pointer" : "default",
        transition: "all 0.3s",
        background: hovered ? "rgba(26,122,255,0.03)" : "rgba(2,5,16,0.6)",
        boxShadow: hovered ? "0 0 30px rgba(38,130,255,0.1)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        animation: `fadeInUp 0.6s ease ${index * 0.15}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {cornerPositions.map((pos, idx) => {
        const style = { position: "absolute", width: "12px", height: "12px", transition: "border-color 0.3s" };
        if (pos.top !== undefined) style.top = pos.top;
        if (pos.bottom !== undefined) style.bottom = pos.bottom;
        if (pos.left !== undefined) style.left = pos.left;
        if (pos.right !== undefined) style.right = pos.right;
        const bc = hovered ? "#1a7aff" : "#333";
        if (pos.borderTop) style.borderTop = `1px solid ${bc}`;
        if (pos.borderBottom) style.borderBottom = `1px solid ${bc}`;
        if (pos.borderLeft) style.borderLeft = `1px solid ${bc}`;
        if (pos.borderRight) style.borderRight = `1px solid ${bc}`;
        return <div key={idx} style={style} />;
      })}

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <h3 style={{ fontFamily: "monospace", fontWeight: "bold", color: "white", fontSize: "1.125rem", margin: 0, paddingRight: "0.5rem" }}>{title}</h3>
        {live ? (
          <span style={{ fontSize: "0.7rem", fontFamily: "monospace", padding: "2px 8px", borderRadius: "4px", background: "#1a7aff15", color: "#1a7aff", border: "1px solid #1a7aff30", whiteSpace: "nowrap", flexShrink: 0 }}>LIVE</span>
        ) : (
          <span style={{ fontSize: "0.7rem", fontFamily: "monospace", padding: "2px 8px", borderRadius: "4px", background: "#ff6b3515", color: "#ff6b35", border: "1px solid #ff6b3530", whiteSpace: "nowrap", flexShrink: 0 }}>LOCAL</span>
        )}
      </div>

      <p style={{ color: "#9ca3af", fontSize: "0.875rem", marginBottom: "1rem", fontFamily: "monospace", lineHeight: "1.6" }}>{desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {tags.map(t => (
          <span key={t} style={{ fontSize: "0.75rem", fontFamily: "monospace", padding: "2px 8px", borderRadius: "4px", background: "#ffffff08", color: "#888", border: "1px solid #ffffff15" }}>#{t}</span>
        ))}
      </div>

      {/* Note for local or offline project */}
      <p style={{ color: hovered ? "#ef4444" : "#ef444480", fontSize: "0.7rem", marginTop: "1rem", marginBottom: "0", fontFamily: "monospace", fontStyle: "italic", transition: "color 0.3s" }}>
        * {live ? "Jika web tidak bisa diakses (tunnel mati), silakan lihat di GitHub." : "Project ini berjalan di local, silakan pantau di GitHub."}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: hovered && live ? "#1a7aff" : "#555", transition: "color 0.3s" }}>
          {live && url ? `${url.replace("https://", "")} →` : "localhost:4000 (run locally)"}
        </div>
        
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "0.7rem",
              fontFamily: "monospace",
              color: "#1a7aff",
              textDecoration: "none",
              background: "#1a7aff15",
              padding: "4px 8px",
              borderRadius: "4px",
              border: "1px solid #1a7aff30",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.target.style.background = "#1a7aff30"; e.target.style.color = "white"; }}
            onMouseLeave={(e) => { e.target.style.background = "#1a7aff15"; e.target.style.color = "#1a7aff"; }}
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
