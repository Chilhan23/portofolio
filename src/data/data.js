import certLaravel from "../assets/certificates/laravel-wpu.jpg";
import certBackendJs from "../assets/certificates/backend-js-dicoding.jpg";
import certJsBasic from "../assets/certificates/javascript-dasar-dicoding.jpg";
import certWebHacking from "../assets/certificates/web-hacking-itbox.jpg";
import certMobilePentest from "../assets/certificates/mobile-pentest-itbox.jpg";

// Project Screenshots
import imgKlikdata from "../assets/projects/klikdata.png";
import imgMbg from "../assets/projects/mbg.png";
import imgWebchat from "../assets/projects/webchat.png";
import imgSuarasiswa from "../assets/projects/suarasiswa.png";
import imgPerpus from "../assets/projects/perpis.png";

// Journey Logos
import logoKlikdata from "../assets/projects/logo.jpg";

export const personalInfo = {
  name: "Muhammad Rayhan Ramadhan",
  nickname: "Rehan",
  location: "Banda Aceh, Indonesia",
  email: "muhammadrayhanramadhann2308@gmail.com",
  titles: [
    "Backend Developer",
    "Security Enthusiast",
    "DFIR Learner",
    "CTF Player"
  ],
  bio: "Saya adalah Backend Developer dan Cybersecurity Enthusiast yang berbasis di Banda Aceh, Indonesia. Saya memiliki pengalaman membangun dan memelihara sistem production-grade yang digunakan oleh organisasi nyata. Minat saya meliputi backend engineering, digital forensics, binary exploitation, dan Capture The Flag (CTF) challenges. Saya senang merancang sistem yang reliable, mengoptimalkan database, menyelesaikan technical challenges, dan mengeksplorasi cybersecurity dari sisi development maupun defensive.",
  stats: [
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "CTF Platforms Active", value: "4" },
    { label: "Production Experience", value: "Yes" }
  ]
};

export const projects = [
  {
    title: "SIMPEG KlikData",
    role: "Backend Developer",
    desc: "Sistem absensi dan manajemen kepegawaian yang dikembangkan untuk KlikData. Sistem sudah deployed dan aktif digunakan di environment production. Bertanggung jawab untuk backend development, perancangan database, autentikasi, autorisasi, business logic, integrasi sistem dengan mesin fingerprint, serta scan absensi berbasis barcode.",
    tech: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/JustSomeTeenagers/Absensi_KlikData",
    live: "https://simpeg.klikpasien.id/login",
    status: "Production",
    featured: true,
    imgSrc: imgKlikdata
  },
  {
    title: "Tech MBG",
    role: "Backend Developer",
    desc: "Sistem manajemen absensi yang dikembangkan untuk MBG di SMKN 5 Telkom Aceh. Aplikasi sudah deployed dan aktif digunakan secara online.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Chilhan23/Tech_MBG",
    live: "https://mbg.smkn5telkom.sch.id",
    status: "Production",
    featured: true,
    imgSrc: imgMbg
  },
  {
    title: "Web Chat Socket.IO",
    role: "Fullstack Developer",
    desc: "Aplikasi chat real-time yang dibangun menggunakan Socket.IO, memungkinkan komunikasi instan dan fitur messaging modern.",
    tech: ["Node.js", "Socket.IO", "JavaScript"],
    github: "https://github.com/Chilhan23/Web_Chat_SocketIo",
    live: null,
    status: "Completed",
    featured: true,
    imgSrc: imgWebchat
  },
  {
    title: "Suara Siswa",
    role: "Fullstack Developer",
    desc: "Platform aspirasi dan feedback siswa untuk mengumpulkan saran dan opini secara digital.",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/Chilhan23/suarasiswa",
    live: null,
    status: "Completed",
    featured: true,
    imgSrc: imgSuarasiswa
  },
  {
    title: "Perpus Digital",
    role: "Fullstack Developer",
    desc: "Sistem manajemen perpustakaan digital yang dikembangkan sebagai proyek akhir sekolah vokasi.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/Chilhan23/Perpus-Digital",
    live: null,
    status: "Completed",
    featured: true,
    imgSrc: imgPerpus
  }
];

export const certificates = [
  { title: "Laravel dari Dasar", issuer: "Web Programming Unpas (WPU)", year: "2026", category: "Backend", imgSrc: certLaravel },
  { title: "Belajar Backend dengan JavaScript", issuer: "Dicoding Indonesia", year: "2025", category: "Backend", imgSrc: certBackendJs },
  { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", year: "2025", category: "JavaScript", imgSrc: certJsBasic },
  { title: "Web Application Hacking Basic", issuer: "IT-Box", year: "2026", category: "Security", imgSrc: certWebHacking },
  { title: "Basic Mobile Pentest", issuer: "IT-Box", year: "2026", category: "Security", imgSrc: certMobilePentest }
];

export const techStack = {
  backend: {
    title: "Backend Development",
    items: ["PHP", "Laravel", "MySQL", "REST API Development"]
  },
  frontend: {
    title: "Frontend Development",
    items: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  cybersecurity: {
    title: "Cybersecurity Tools",
    items: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Volatility", "Autopsy", "Ghidra", "pwntools", "pwndbg", "GDB"]
  },
  os: {
    title: "Operating Systems",
    items: ["Windows 11", "Arch Linux"]
  }
};

export const areasOfInterest = [
  {
    title: "Digital Forensics & Incident Response (DFIR)",
    desc: "Menganalisis artifact memori dan filesystem untuk mengidentifikasi ancaman keamanan dan aktivitas mencurigakan."
  },
  {
    title: "Binary Exploitation",
    desc: "Mengeksplorasi kerentanan tingkat rendah, memanipulasi memori, dan menguji keamanan executable biner."
  },
  {
    title: "Capture The Flag (CTF)",
    desc: "Berpartisipasi aktif dalam kompetisi CTF di berbagai kategori seperti Pwn, Forensic, Reverse Engineering, dan Web."
  },
  {
    title: "Backend Development",
    desc: "Membangun business logic yang kuat, arsitektur database yang efisien, dan API berkinerja tinggi."
  },
  {
    title: "API Development",
    desc: "Merancang API RESTful yang aman, terstandarisasi, terdokumentasi dengan baik, dan mudah diintegrasikan."
  },
  {
    title: "Cybersecurity Research",
    desc: "Melakukan riset kerentanan baru dan mempelajari mekanisme pertahanan mutakhir di dunia cyber."
  }
];

export const ctfPlatforms = [
  { name: "TryHackMe", level: "Active Learner" },
  { name: "Hack The Box", level: "Challenge Solver" },
  { name: "picoCTF", level: "Competitor" },
  { name: "CTFtime", level: "Team Member" }
];

export const journeyTimeline = [
  {
    title: "Learning Programming",
    desc: "Memulai perjalanan dengan mempelajari dasar-dasar pemrograman komputer, logika, dan algoritma dasar."
  },
  {
    title: "Learning Laravel",
    desc: "Mendalami framework PHP Laravel untuk membangun web application modern dengan arsitektur MVC."
  },
  {
    title: "Building School Projects",
    desc: "Mengembangkan proyek-proyek sekolah seperti Perpustakaan Digital dan Suara Siswa untuk mematangkan keterampilan coding."
  },
  {
    title: "Magang di KlikData",
    desc: "Saat ini sedang menjalani magang di KlikData sebagai Backend Developer. Berkontribusi pada pengembangan sistem absensi, integrasi dengan mesin sidik jari (fingerprint) dan scanner barcode, serta optimasi basis data.",
    logoSrc: logoKlikdata,
    isCurrent: true
  },
  {
    title: "Learning DFIR",
    desc: "Mempelajari Digital Forensics & Incident Response untuk menganalisis memori dump, filesystem, dan log jaringan pasca insiden."
  },
  {
    title: "Learning Binary Exploitation",
    desc: "Masuk ke pwn/reverse engineering dengan menganalisis binary executable, buffer overflow, gdb debugging, dan exploit script."
  },
  {
    title: "Active CTF Participation",
    desc: "Secara berkala mengikuti kompetisi Capture The Flag untuk melatih pemecahan masalah keamanan dalam skenario yang kompetitif."
  }
];
