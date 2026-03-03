import CertCard from "./CertCard";
import { certificates, containerStyle } from "../data/data";

const Certificates = ({ onSelectCert }) => {
  return (
    <section id="certificates" style={{ position: "relative", zIndex: 10, padding: "6rem 0", background: "rgba(26,122,255,0.005)" }}>
      <div style={containerStyle}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem", color: "#1a7aff60" }}>04 / CERTIFICATES</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "white", margin: 0 }}>
            my_certs<span style={{ color: "#1a7aff" }}>_</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {certificates.map((cert, i) => (
            <CertCard key={cert.title} {...cert} index={i} onClick={() => onSelectCert(cert)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
