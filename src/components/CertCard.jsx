import { useState } from "react";
import { categoryColors } from "../data/data";

const CertCard = ({ title, issuer, year, category, imgSrc, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const color = categoryColors[category] || "#1a7aff";

  return (
    <div
      style={{
        position: "relative", border: `1px solid ${hovered ? color : "#1a2a3a"}`,
        borderRadius: "0.5rem", overflow: "hidden", cursor: "pointer", transition: "all 0.3s",
        background: "rgba(2,5,16,0.7)", boxShadow: hovered ? `0 0 25px ${color}20` : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div style={{ width: "100%", height: "165px", background: "#050810", overflow: "hidden", position: "relative", borderBottom: `1px solid ${hovered ? color + "40" : "#0a1020"}` }}>
        {imgSrc && !imgError ? (
          <img src={imgSrc} alt={title} onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s", transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #050810, #080d1a)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem", opacity: 0.25 }}>🏆</div>
            <div style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "#2a2a3a", textAlign: "center", padding: "0 1rem" }}>photo coming soon</div>
          </div>
        )}
        {/* Hover overlay */}
        {hovered && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color, border: `1px solid ${color}60`, padding: "6px 14px", borderRadius: "4px", background: `${color}10` }}>[ LIHAT SERTIFIKAT ]</span>
          </div>
        )}
        {/* Category badge */}
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", fontSize: "0.65rem", fontFamily: "monospace", padding: "2px 8px", borderRadius: "4px", background: `${color}20`, color, border: `1px solid ${color}40`, backdropFilter: "blur(4px)" }}>
          {category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontFamily: "monospace", fontWeight: "bold", color: "white", fontSize: "0.875rem", margin: "0 0 0.4rem", lineHeight: 1.4 }}>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#666" }}>{issuer}</span>
          <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color, opacity: 0.8 }}>{year}</span>
        </div>
        <div style={{ marginTop: "0.75rem", height: "1px", background: `linear-gradient(90deg, ${color}40, transparent)` }} />
        <div style={{ marginTop: "0.5rem", fontSize: "0.7rem", fontFamily: "monospace", color: hovered ? color : "#2a2a3a", transition: "color 0.3s" }}>
          VERIFIED ✓
        </div>
      </div>
    </div>
  );
};

export default CertCard;
