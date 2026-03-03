import { containerStyle } from "../data/data";

const Contact = () => {
  const links = [
    { label: "GitHub", url: "https://github.com/Chilhan23", icon: "⌥", soon: false },
    { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-rayhan-ramadhan-a9025b349", icon: "in", soon: false },
  ];

  return (
    <section id="contact" style={{ position: "relative", zIndex: 10, padding: "6rem 0" }}>
      <div style={{ ...containerStyle, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ marginBottom: "3rem", width: "100%" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem", color: "#1a7aff60" }}>05 / CONTACT</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "white", margin: 0 }}>
            get_in_touch<span style={{ color: "#1a7aff" }}>_</span>
          </h2>
        </div>
        <p style={{ color: "#6b7280", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "2", marginBottom: "2.5rem", maxWidth: "36rem" }}>
          Tertarik untuk kolaborasi atau punya project keren?<br />Jangan ragu untuk reach out!
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          {links.map(({ label, url, icon, soon }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "12px 24px", borderRadius: "4px", fontFamily: "monospace", fontSize: "0.875rem", border: "1px solid #1a7aff40", color: "#1a7aff", background: "#1a7aff08", textDecoration: "none", minWidth: "160px", justifyContent: "center" }}
            >
              <span>{icon}</span>{label}
            </a>
          ))}
        </div>
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #1a7aff10", width: "100%" }}>
          <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#374151", margin: 0 }}>
            <span style={{ color: "#1a7aff40" }}>/*</span> Built with React by Muhammad Rayhan Ramadhan <span style={{ color: "#1a7aff40" }}>*/</span>
          </p>
          <p style={{ fontSize: "0.75rem", fontFamily: "monospace", marginTop: "0.25rem", color: "#1a7aff30" }}>
            © 2026 chilhan.my.id — SMK 5 Telkom Banda Aceh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
