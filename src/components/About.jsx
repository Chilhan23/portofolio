import { containerStyle } from "../data/data";

const About = () => {
  return (
    <section id="about" style={{ position: "relative", zIndex: 10, padding: "6rem 0" }}>
      <div style={containerStyle}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem", color: "#1a7aff60" }}>01 / ABOUT</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "white", margin: 0 }}>
            whoami<span style={{ color: "#1a7aff" }}>_</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          {/* Terminal card */}
          <div>
            <div style={{ borderRadius: "0.5rem", overflow: "hidden", border: "1px solid #1a7aff20", background: "#020510" }}>
              <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: "0.5rem", background: "#050810", borderBottom: "1px solid #1a7aff15" }}>
                {["#ef4444", "#eab308", "#22c55e"].map((c, i) => (
                  <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.7 }} />
                ))}
                <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", fontFamily: "monospace", color: "#4b5563" }}>terminal — about.sh</span>
              </div>
              <div style={{ padding: "1.25rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
                {[
                  ["name", "Muhammad Rayhan Ramadhan"],
                  ["school", "SMK 5 Telkom Banda Aceh"],
                  ["major", "Rekayasa Perangkat Lunak"],
                  ["focus", "Web Tech & Cyber Security"],
                  ["experience", "2+ Years"],
                  ["status", "Open to Collaborate"],
                  ["location", "Banda Aceh, Aceh, ID"],
                ].map(([k, v], i) => (
                  <div key={k} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem", animation: `fadeInUp 0.5s ease ${i * 0.1}s both`, flexWrap: "wrap" }}>
                    <span style={{ color: "#1a7aff70" }}>$</span>
                    <span style={{ color: "#1a7aff" }}>{k}</span>
                    <span style={{ color: "#555" }}>=</span>
                    <span style={{ color: "#ddd" }}>"{v}"</span>
                  </div>
                ))}
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", paddingTop: "0.5rem", borderTop: "1px solid #ffffff08" }}>
                  <span style={{ color: "#1a7aff70" }}>$</span>
                  <span style={{ display: "inline-block", width: "2px", height: "1rem", verticalAlign: "middle", background: "#1a7aff", animation: "blink 1s step-end infinite" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Text + stats */}
          <div>
            <p style={{ color: "#9ca3af", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "2", marginBottom: "1.25rem" }}>
              Halo, perkenalkan saya <span style={{ color: "#1a7aff" }}>Rayhan</span>. Saat ini saya menempuh pendidikan di <span style={{ color: "#1a7aff" }}>SMK 5 Telkom Banda Aceh</span>, jurusan Rekayasa Perangkat Lunak.
            </p>
            <p style={{ color: "#9ca3af", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "2", marginBottom: "1.25rem" }}>
              Saya memiliki pengalaman  sebagai <span style={{ color: "#1a7aff" }}>Web Developer</span> selama 2 tahun (sejak tahun 2024 hingga saat ini), dan telah berhasil mengembangkan  <span style={{ color: "#1a7aff" }}>2 proyek</span> aplikasi web di SMK Negeri 5 Telkom Banda Aceh.
            </p>
            <p style={{ color: "#9ca3af", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "2", marginBottom: "1.25rem" }}>
              Selain pengembangan perangkat lunak, saya memiliki minat yang mendalam pada bidang <span style={{ color: "#1a7aff" }}>Cyber Security</span>, dengan fokus spesialisasi pada <span style={{ color: "#1a7aff" }}>Digital Forensics</span> dan Incident Response untuk analisis memori.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", paddingTop: "1rem" }}>
              {[["2", "Years Exp"], ["2", "Projects Live"], ["5", "Certificates"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center", padding: "0.75rem", borderRadius: "4px", border: "1px solid #1a7aff15", background: "#1a7aff05" }}>
                  <div className="font-rajdhani" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a7aff" }}>{num}</div>
                  <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#4b5563" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
