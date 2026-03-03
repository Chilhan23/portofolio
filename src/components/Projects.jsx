import ProjectCard from "./ProjectCard";
import { projects, containerStyle } from "../data/data";

const Projects = () => {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 10, padding: "6rem 0" }}>
      <div style={containerStyle}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem", color: "#1a7aff60" }}>03 / PROJECTS</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "white", margin: 0 }}>
            my_work<span style={{ color: "#1a7aff" }}>_</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
          {/* More coming placeholder */}
          <div style={{ border: "1px dashed #1a2a3a", borderRadius: "0.5rem", padding: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: 0.4, minHeight: "180px" }}>
            <div style={{ fontSize: "1.5rem", fontFamily: "monospace", color: "#333", marginBottom: "0.5rem" }}>+ + +</div>
            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#374151" }}>More projects coming soon...</div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a href="https://github.com/Chilhan23" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "10px 20px", fontFamily: "monospace", fontSize: "0.875rem", borderRadius: "4px", border: "1px solid #1a7aff30", color: "#1a7aff90", textDecoration: "none" }}>
            View all on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
