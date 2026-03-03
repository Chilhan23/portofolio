import { useState, useEffect } from "react";
import { categoryColors } from "../data/data";

const CertModal = ({ cert, onClose }) => {
  const [imgError, setImgError] = useState(false);
  const color = categoryColors[cert.category] || "#1a7aff";

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(2,5,16,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", backdropFilter: "blur(8px)", animation: "fadeInUp 0.2s ease both" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "860px", width: "100%", background: "#050810", border: `1px solid ${color}40`, borderRadius: "0.75rem", overflow: "hidden", boxShadow: `0 0 60px ${color}20` }}
      >
        {/* Header */}
        <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#050810", borderBottom: `1px solid ${color}20` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.65rem", fontFamily: "monospace", padding: "2px 8px", borderRadius: "4px", background: `${color}20`, color, border: `1px solid ${color}40` }}>{cert.category}</span>
            <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#666" }}>{cert.issuer} · {cert.year}</span>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "#666", cursor: "pointer", fontFamily: "monospace", fontSize: "1rem", padding: "2px 8px", borderRadius: "4px", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "#666"}
          >✕ ESC</button>
        </div>

        {/* Image */}
        <div style={{ width: "100%", maxHeight: "70vh", background: "#020510", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {cert.imgSrc && !imgError ? (
            <img src={cert.imgSrc} alt={cert.title} onError={() => setImgError(true)}
              style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain", display: "block" }}
            />
          ) : (
            <div style={{ padding: "4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem", opacity: 0.2 }}>🏆</div>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#333" }}>image not available</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "0.875rem 1.25rem", background: "#050810", borderTop: `1px solid ${color}20`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ fontFamily: "monospace", fontWeight: "bold", color: "white", fontSize: "0.875rem", margin: 0 }}>{cert.title}</h3>
          <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color, opacity: 0.9 }}>VERIFIED ✓</span>
        </div>
      </div>
    </div>
  );
};

export default CertModal;
