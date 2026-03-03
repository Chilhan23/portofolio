import SkillBar from "./SkillBar";
import { skills, techBadges, containerStyle } from "../data/data";

const Skills = () => {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 10, padding: "6rem 0", background: "rgba(26,122,255,0.01)" }}>
      <div style={containerStyle}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem", color: "#1a7aff60" }}>02 / SKILLS</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "white", margin: 0 }}>
            tech_stack<span style={{ color: "#1a7aff" }}>_</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          <div>
            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "1.5rem", color: "#1a7aff80" }}>// Web Development</div>
            {skills.web.map(s => <SkillBar key={s.name} name={s.name} level={s.level} color={s.color || "#1a7aff"} />)}
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "1.5rem", color: "#1a7aff80" }}>// Cyber & Tools</div>
            {skills.cyber.map(s => <SkillBar key={s.name} name={s.name} level={s.level} color={s.color || "#1a7aff"} />)}
          </div>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {techBadges.map(tech => (
            <span key={tech}
              style={{ padding: "6px 12px", borderRadius: "4px", fontSize: "0.75rem", fontFamily: "monospace", border: "1px solid #1a7aff20", color: "#1a7aff90", background: "#1a7aff08", cursor: "default", transition: "transform 0.2s", display: "inline-block" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
