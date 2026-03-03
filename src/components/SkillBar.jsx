import { useState, useEffect, useRef } from "react";

const SkillBar = ({ name, level, color = "#1a7aff" }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
        <span style={{ fontSize: "0.875rem", fontFamily: "monospace", color: "#d1d5db" }}>{name}</span>
        <span style={{ fontSize: "0.875rem", fontFamily: "monospace", color }}>{level}%</span>
      </div>
      <div style={{ height: "6px", background: "#0a1628", borderRadius: "9999px", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "9999px", transition: "width 1s ease-out",
          width: animated ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 8px ${color}88`,
        }} />
      </div>
    </div>
  );
};

export default SkillBar;
