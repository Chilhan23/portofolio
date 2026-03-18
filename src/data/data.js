import certLaravel from "../assets/certificates/laravel-wpu.jpg";
import certBackendJs from "../assets/certificates/backend-js-dicoding.jpg";
import certJsBasic from "../assets/certificates/javascript-dasar-dicoding.jpg";
import certWebHacking from "../assets/certificates/web-hacking-itbox.jpg";
import certMobilePentest from "../assets/certificates/mobile-pentest-itbox.jpg";

export const projects = [
  {
    title: "Perpustakaan Digital",
    desc: "Sistem manajemen perpustakaan digital yang memudahkan pengelolaan koleksi buku dan peminjaman secara online.",
    url: "https://perpus.chilhan.my.id/",
    github: "https://github.com/Chilhan23/Perpus-Digital.git",
    tags: ["Web App", "Library", "CRUD"],
    live: true,
  },
  {
    title: "Suara Siswa",
    desc: "Platform aspirasi dan suara siswa untuk menyampaikan pendapat dan masukan kepada pihak sekolah secara digital.",
    url: "https://suarasiswa.chilhan.my.id/",
    github: "https://github.com/Chilhan23/suarasiswa.git", 
    tags: ["Platform", "Student", "Voice"],
    live: true,
  },
  {
    title: "WebChat Real-Time",
    desc: "Aplikasi chat real-time yang dibangun untuk seru-seruan. Fitur: pesan instan, typing indicator, user counter online, dan timestamp. Pesan tidak tersimpan — fresh setiap sesi!",
    url: null,
    github: "https://github.com/Chilhan23/Web_Chat_SocketIo.git", 
    tags: ["Node.js", "Express", "Socket.io", "Real-Time"],
    live: false,
  },
];

export const certificates = [
  { title: "Laravel dari Dasar", issuer: "Web Programming Unpas (WPU)", year: "2026", category: "Backend", imgSrc: certLaravel },
  { title: "Belajar Backend dengan JavaScript", issuer: "Dicoding Indonesia", year: "2025", category: "Backend", imgSrc: certBackendJs },
  { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", year: "2025", category: "JavaScript", imgSrc: certJsBasic },
  { title: "Web Application Hacking Basic", issuer: "IT-Box", year: "2026", category: "Security", imgSrc: certWebHacking },
  { title: "Basic Mobile Pentest", issuer: "IT-Box", year: "2026", category: "Security", imgSrc: certMobilePentest },
];

export const skills = {
  web: [
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 70 },
    { name: "Laravel", level: 78, color: "#1460cc" },
    { name: "Next JS", level: 60, color: "#0f4ba0" },
    { name: "MySQL / Database", level: 75 },
  ],
  cyber: [
    { name: "Linux / CLI", level: 70 },
    { name: "Networking Basics", level: 65, color: "#1460cc" },
    { name: "Digital Forensic", level: 75, color: "#0f4ba0" },
    { name: "Git / GitHub", level: 70 },
  ],
};

export const techBadges = ["JavaScript", "Laravel", "MySQL", "Next JS", "Digital Forensic", "Git", "Linux"];

export const categoryColors = {
  "Web Dev": "#1a7aff",
  "Security": "#ff6b35",
  "JavaScript": "#f7df1e",
  "Backend": "#4fc3f7",
};

export const TYPEWRITER_TEXTS = ["Web Developer", "Cyber Enthusiast", "CTF Player"];

export const containerStyle = {
  width: "100%",
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 1.5rem",
  boxSizing: "border-box",
};
