"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Clock,
  MapPin,
  Code2,
  Layers,
  Briefcase,
  Send,
  Sparkles,
  Terminal,
  CheckCircle2,
  Calendar,
  Monitor,
  Database,
  Cpu,
  ArrowRight,
  User,
  X,
  GraduationCap,
  Award,
  Download,
  Menu
} from "lucide-react";

// Custom SVG Brand Icons since Lucide-react v1.0+ removed brand icons
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// Accent themes definitions
const ACCENTS = {
  sky: {
    name: "Sky Cyan",
    primary: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-500/30",
    hoverBorder: "hover:border-sky-400",
    accentBg: "bg-sky-400",
    ring: "focus:ring-sky-500",
    badge: "bg-sky-400/10 text-sky-400 border-sky-400/20",
    glow: "shadow-sky-500/10",
  },
  emerald: {
    name: "Mint Green",
    primary: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-400",
    accentBg: "bg-emerald-400",
    ring: "focus:ring-emerald-500",
    badge: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    glow: "shadow-emerald-500/10",
  },
  yellow: {
    name: "Cyber Yellow",
    primary: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-400",
    accentBg: "bg-yellow-400",
    ring: "focus:ring-yellow-500",
    badge: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    glow: "shadow-yellow-500/10",
  },
  rose: {
    name: "Rose Pink",
    primary: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-500/30",
    hoverBorder: "hover:border-rose-400",
    accentBg: "bg-rose-400",
    ring: "focus:ring-rose-500",
    badge: "bg-rose-400/10 text-rose-400 border-rose-400/20",
    glow: "shadow-rose-500/10",
  },
};

type AccentKey = keyof typeof ACCENTS;

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: { title: string; desc: string }[];
}

const PROJECTS: Project[] = [
  {
    title: "MyDIPA ERP (DIPA CORE)",
    category: "Pharmaceutical ERP System",
    year: "2026",
    image: "/mydipa.png",
    description: "Sistem ERP berskala enterprise untuk industri manufaktur farmasi. Mengelola alur rantai pasokan bahan baku, verifikasi spesifikasi lab, standarisasi pengujian, dan kepatuhan regulasi BPOM.",
    longDescription: "DIPA CORE (MyDIPA) adalah platform Enterprise Resource Planning (ERP) terintegrasi yang dirancang khusus untuk industri manufaktur dan laboratorium farmasi. Sistem ini mendigitalisasi dan mengotomatisasi seluruh proses bisnis mulai dari logistik pergudangan, kontrol kualitas (QC/QA), manajemen penugasan kerja, pelacakan proses produksi (WIP), hingga kepatuhan standar industri (CPOB/BPOM).",
    tags: ["Laravel 9", "Next.js 16", "PostgreSQL/MySQL", "Bootstrap 5", "Yajra Datatables"],
    features: [
      { title: "Inventory & Warehouse", desc: "Manajemen stok real-time, pencatatan Barang Masuk & Barang Keluar, Kartu Stok otomatis, Stock Opname, serta penyesuaian stok (Adjustment)." },
      { title: "Laboratory & Quality Control (QC)", desc: "Pengelolaan resep/reagen lab (Reagen Management) dan penanganan sampel arsip (Retain Sample) lengkap dengan kartu stok reagen/retain, kalibrasi instrumen, dan validasi stabilitas produk." },
      { title: "Hierarchical Approval Workflow", desc: "Sistem approval berjenjang yang dinamis untuk verifikasi permintaan barang, review reagen, dan pengeluaran sampel retain secara aman." },
      { title: "Digital SOP (Protap)", desc: "Repositori Standard Operating Procedures (Protap) terpusat untuk departemen QA, QC, Produksi, Logistik, Teknik, dan Supporting." },
      { title: "Human Resources & Job Management", desc: "Manajemen penugasan kerja teknis (Job Assignment, Schedule, Realization), pelacakan lembur (Lembur Karyawan & Lembur Pengiriman), serta absensi dan pelatihan internal." },
      { title: "AI Office & WA Studio", desc: "Fitur pintar asisten AI (kalkulator AI & chat AI) serta modul integrasi notifikasi pesan via WhatsApp." }
    ]
  },
  {
    title: "POS Apotek & Stock Management",
    category: "Pharmacy Point of Sale",
    year: "2025",
    image: "/apotek.png",
    description: "Aplikasi POS terintegrasi berbasis web untuk apotek retail. Menyediakan pelacakan stok obat otomatis, peringatan kedaluwarsa obat, pengelolaan resep dokter, dan pencatatan riwayat transaksi harian.",
    longDescription: "Sistem Point of Sale (POS) dan manajemen inventaris apotek ritel modern yang dirancang untuk mempercepat transaksi kasir, mengontrol perputaran stok obat, dan menyajikan laporan keuangan secara otomatis. Sistem ini juga dilengkapi penanganan obat resep dan pelacakan batch kedaluwarsa untuk menjamin keamanan produk.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    features: [
      { title: "Smart Cashier Interface", desc: "POS kasir cepat dengan pencarian obat responsif, kalkulasi otomatis, dan integrasi cetak struk belanja." },
      { title: "Expired & Batch Control", desc: "Peringatan otomatis untuk obat mendekati tanggal kedaluwarsa berdasarkan nomor batch produksi." },
      { title: "Prescription Management", desc: "Modul khusus untuk mencatat, menghitung dosis racikan, dan memproses obat berdasarkan resep dokter." },
      { title: "Financial Recap", desc: "Laporan penjualan harian, mingguan, bulanan, margin keuntungan, serta data obat terlaris (fast-moving items)." }
    ]
  },
  {
    title: "Prediksi Harga Saham Monte Carlo",
    category: "Financial Analytics & Prediction",
    year: "2024",
    image: "/skripsi.png",
    description: "Sistem simulasi dan prediksi pergerakan harga saham berbasis web menggunakan metode Monte Carlo (Geometric Brownian Motion) untuk memproyeksikan tren harga masa depan.",
    longDescription: "Aplikasi Prediksi Harga Saham dengan Metode Monte Carlo (Upgrade Version) adalah sistem analisis keuangan berbasis web yang dirancang untuk mensimulasikan dan memproyeksikan pergerakan harga saham di masa depan. Dengan memanfaatkan model Geometric Brownian Motion (GBM), sistem ini memproses data historis saham untuk menentukan nilai drift dan volatilitas, menyimulasikan ribuan iterasi harga secara acak, serta menyajikan tingkat probabilitas dan risiko investasi bagi pengguna.",
    tags: ["PHP/Laravel", "MySQL", "Chart.js", "Bootstrap", "MathJS", "Monte Carlo"],
    features: [
      { title: "Geometric Brownian Motion (GBM)", desc: "Model stokastik inti untuk merepresentasikan tren dan pergerakan acak harga saham berdasarkan volatilitas historis." },
      { title: "Interactive Iteration Chart", desc: "Visualisasi dinamis dari ribuan lintasan simulasi harga saham secara interaktif menggunakan pustaka Chart.js." },
      { title: "Probability & Risk Analytics", desc: "Kalkulasi statistik untuk mengukur persentase pencapaian target harga saham serta analisis skenario risiko." },
      { title: "Historical Stock Management", desc: "Modul impor dan pengelolaan data historis harga penutupan harian (Close Price) saham sebagai dasar simulasi." }
    ]
  }
];

export default function Portfolio() {
  // Theme state
  const [activeAccent, setActiveAccent] = useState<AccentKey>("sky");
  const theme = ACCENTS[activeAccent];

  // Project modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Time state
  const [timeString, setTimeString] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Tech stack hover state
  const [selectedTech, setSelectedTech] = useState<{
    name: string;
    level: string;
    desc: string;
  } | null>({
    name: "Next.js",
    level: "Expert (95%)",
    desc: "Framework pilihan utama untuk performa tinggi, SSR/ISR, dan UX prima.",
  });

  // Github grid hover state
  const [githubTooltip, setGithubTooltip] = useState<string>(
    "Arahkan kursor ke sel untuk melihat riwayat aktivitas."
  );

  // GitHub contributions state
  const [githubGrid, setGithubGrid] = useState<{ count: number; date: Date; level?: number }[][]>([]);
  const [githubTotal, setGithubTotal] = useState<number | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scrolling and dynamic visibility states
  const [activeSection, setActiveSection] = useState<string>("");
  const [visibleSection, setVisibleSection] = useState<string>("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Highlight the target card
      setActiveSection(id);
      setTimeout(() => {
        setActiveSection("");
      }, 1500);
    }
  };

  const getHighlightClass = (sectionId: string) => {
    if (activeSection !== sectionId) return "border-zinc-800 " + theme.hoverBorder;
    
    const borderAccent = 
      activeAccent === "sky" ? "border-sky-400" :
      activeAccent === "emerald" ? "border-emerald-400" :
      activeAccent === "yellow" ? "border-yellow-400" :
      "border-rose-400";
      
    return `${borderAccent} scale-[1.015] shadow-2xl`;
  };

  const getHighlightStyle = (sectionId: string) => {
    if (activeSection !== sectionId) return {};
    
    const shadowColor = 
      activeAccent === "sky" ? "rgba(56,189,248,0.35)" :
      activeAccent === "emerald" ? "rgba(52,211,153,0.35)" :
      activeAccent === "yellow" ? "rgba(250,204,21,0.35)" :
      "rgba(251,113,133,0.35)";
      
    return {
      boxShadow: `0 0 25px ${shadowColor}`,
    };
  };

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Date().toLocaleTimeString("id-ID", options) + " WIB");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Initial fallback grid to prevent rendering empty box
    const initialGrid = Array.from({ length: githubWeeks }, (_, weekIdx) => {
      return Array.from({ length: 7 }, (_, dayIdx) => {
        const val = (weekIdx * 3 + dayIdx * 5) % 11;
        const count = val === 0 ? 0 : val > 7 ? Math.floor(val / 2) : val;
        const level = count === 0 ? 0 : count > 4 ? 4 : count;
        const date = new Date();
        date.setDate(date.getDate() - (githubWeeks - 1 - weekIdx) * 7 + dayIdx);
        return { count, date, level };
      });
    });
    setGithubGrid(initialGrid);

    // Fetch actual contributions from API
    fetch("https://github-contributions-api.jogruber.de/v4/Adewiraa")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions) {
          const totalDaysNeeded = githubWeeks * 7;
          const today = new Date();
          // Filter out future dates so the grid ends exactly on today's date
          const pastContributions = data.contributions.filter((item: { date: string; count: number; level: number }) => {
            return new Date(item.date) <= today;
          });
          // Sort contributions chronologically (ascending)
          const sorted = [...pastContributions].sort((a: { date: string; count: number; level: number }, b: { date: string; count: number; level: number }) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
          // Slice the last 112 days
          const recent = sorted.slice(-totalDaysNeeded);
          
          const grid = [];
          for (let i = 0; i < githubWeeks; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
              const item = recent[i * 7 + j];
              if (item) {
                week.push({
                  count: item.count,
                  date: new Date(item.date),
                  level: item.level,
                });
              } else {
                week.push({
                  count: 0,
                  date: new Date(),
                  level: 0,
                });
              }
            }
            grid.push(week);
          }
          setGithubGrid(grid);

          // Get total contributions for current year
          const currentYear = new Date().getFullYear().toString();
          if (data.total && data.total[currentYear] !== undefined) {
            setGithubTotal(data.total[currentYear]);
          } else {
            // Fallback: sum of all years or last key
            const years = Object.keys(data.total);
            if (years.length > 0) {
              const lastYear = years[years.length - 1];
              setGithubTotal(data.total[lastYear]);
            }
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching GitHub contributions:", err);
      });

    // Set up IntersectionObserver to track visible sections and highlight menu items
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["about", "tech", "projects", "experience", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [activeAccent]); // Re-initialize if theme changes to fetch correct class definitions

  // Submit Contact Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  // Tech Stacks Data
  const techCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-4 h-4 text-zinc-400" />,
      items: [
        { name: "Next.js", level: "Expert (95%)", desc: "Framework pilihan untuk performa tinggi, SSR, dan optimalisasi SEO." },
        { name: "React", level: "Expert (95%)", desc: "Komponen modular dan state management yang responsif." },
        { name: "Tailwind CSS", level: "Expert (98%)", desc: "Pembuatan utilitas UI yang sangat cepat dan responsif." },
        { name: "TypeScript", level: "Advanced (90%)", desc: "Menjamin keamanan tipe data dan kerapian kode JavaScript." },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Cpu className="w-4 h-4 text-zinc-400" />,
      items: [
        { name: "Node.js", level: "Advanced (90%)", desc: "Runtime JavaScript sisi server yang berkinerja tinggi." },
        { name: "Express", level: "Advanced (92%)", desc: "Pembuatan RESTful API yang cepat, aman, dan modular." },
        { name: "PHP", level: "Advanced (88%)", desc: "Logika server yang fleksibel dan handal." },
        { name: "Laravel", level: "Advanced (90%)", desc: "Framework PHP elegan dengan fungsionalitas out-of-the-box lengkap." },
      ],
    },
    {
      title: "DevOps & Database",
      icon: <Database className="w-4 h-4 text-zinc-400" />,
      items: [
        { name: "PostgreSQL", level: "Advanced (88%)", desc: "Database relasional utama dengan performa kueri kompleks." },
        { name: "MySQL", level: "Advanced (90%)", desc: "Manajemen basis data relasional berkecepatan tinggi." },
        { name: "Docker", level: "Intermediate (80%)", desc: "Kontainerisasi aplikasi agar konsisten di semua server." },
        { name: "Git & GitHub", level: "Expert (95%)", desc: "Version control sistematis dengan kolaborasi tim yang rapi." },
      ],
    },
  ];

  const githubWeeks = 16;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-200">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${theme.accentBg} animate-pulse`} />
            <span className="font-mono text-sm font-bold tracking-tight">A.DEV</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { id: "about", label: "Tentang" },
            { id: "tech", label: "Keahlian" },
            { id: "projects", label: "Proyek" },
            { id: "experience", label: "Pengalaman" },
            { id: "contact", label: "Kontak" },
          ].map((item) => {
            const isActive = visibleSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${theme.accentBg} transition-all duration-300`} />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Accents Switches */}
          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mr-1 hidden sm:inline">Tema:</span>
            {(Object.keys(ACCENTS) as AccentKey[]).map((key) => {
              const acc = ACCENTS[key];
              const isSelected = activeAccent === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveAccent(key)}
                  className={`w-4 h-4 rounded-full transition-transform ${acc.accentBg} ${
                    isSelected ? "scale-125 ring-2 ring-zinc-50 ring-offset-2 ring-offset-zinc-950" : "hover:scale-110 opacity-70"
                  }`}
                  title={acc.name}
                />
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            {[
              { id: "about", label: "Tentang" },
              { id: "tech", label: "Keahlian" },
              { id: "projects", label: "Proyek" },
              { id: "experience", label: "Pengalaman" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  handleScrollTo(e, item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-50 py-2 border-b border-zinc-900/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content (Bento Grid Container) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto lg:auto-rows-[minmax(210px,auto)]">
          
          {/* CARD 1: Hero Profile (lg:col-span-2 lg:row-span-2) */}
          <div
            id="about"
            className={`lg:col-span-2 lg:row-span-2 bg-zinc-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${getHighlightClass("about")} group relative overflow-hidden`}
            style={getHighlightStyle("about")}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-10 transition-colors ${theme.accentBg}`} />
            <div className="relative z-10 mb-6 flex items-start justify-between">
              <div className="relative group/avatar">
                {/* Outer glowing halo */}
                <div className={`absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-zinc-700 via-zinc-800 to-zinc-950 blur-sm opacity-60 group-hover/avatar:opacity-100 transition duration-500`} />
                <div className={`absolute -inset-0.5 rounded-[26px] bg-gradient-to-tr from-sky-500 to-indigo-500 opacity-30 group-hover/avatar:opacity-80 blur-md transition duration-500`} />
                
                {/* Main Container */}
                <div className="relative w-24 h-32 sm:w-28 h-36 rounded-[24px] p-1 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Inner rounded container for the image */}
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-zinc-900">
                    <Image
                      src="/avatar.png"
                      alt="Ade Wiramiharja Profile Photo"
                      fill
                      unoptimized
                      className="object-cover object-top scale-100 group-hover/avatar:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Mini Online Status Badge */}
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-zinc-950"></span>
                </span>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Hai, saya <span className={`transition-colors ${theme.primary}`}>Ade Wiramiharja</span>
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Seorang <strong className="text-zinc-200">Fullstack Developer</strong> yang berspesialisasi dalam membangun arsitektur backend berkinerja tinggi, manajemen database tangguh, serta antarmuka klien yang responsif dan interaktif.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-md font-mono text-xs text-zinc-400">#AppRouter</span>
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-md font-mono text-xs text-zinc-400">#Microservices</span>
                <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-md font-mono text-xs text-zinc-400">#RestAPI</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 mt-8 pt-4 border-t border-zinc-800/60">
              <a
                href="https://wa.me/6285172046022"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-zinc-950 transition-all ${theme.accentBg} hover:opacity-90 active:scale-95`}
              >
                Hubungi Saya
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                download="CV_Ade_Wiramiharja.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl font-medium text-sm text-zinc-300 hover:text-white transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                Unduh CV
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Adewiraa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ade-wiramiharja-2b4b94202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: Interactive Tech Stack (lg:col-span-2 lg:row-span-1) */}
          <div
            id="tech"
            className={`lg:col-span-2 lg:row-span-1 bg-zinc-900 border rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ${getHighlightClass("tech")}`}
            style={getHighlightStyle("tech")}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <Code2 className={`w-5 h-5 ${theme.primary}`} />
                <h2 className="font-bold text-white text-base">Ekosistem Teknologi</h2>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Sentuh Ikon</span>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {techCategories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold border-b border-zinc-800 pb-1">
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, itemIdx) => {
                      const isHovered = selectedTech?.name === item.name;
                      return (
                        <button
                          key={itemIdx}
                          onMouseEnter={() => setSelectedTech(item)}
                          onClick={() => setSelectedTech(item)}
                          className={`px-2 py-1 text-xs rounded border transition-colors ${
                            isHovered
                              ? `${theme.accentBg} text-zinc-950 border-transparent font-semibold`
                              : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Feedback Area */}
            <div className="mt-4 p-3 bg-zinc-950 border border-zinc-800/80 rounded-xl flex items-start justify-between gap-4 min-h-[60px]">
              {selectedTech ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-200">{selectedTech.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${theme.badge}`}>
                      {selectedTech.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{selectedTech.desc}</p>
                </div>
              ) : (
                <p className="text-xs text-zinc-500 italic">Arahkan kursor ke teknologi untuk detail penguasaan.</p>
              )}
            </div>
          </div>

          {/* CARD 3: Live GitHub Contribution Grid (lg:col-span-2 lg:row-span-1) */}
          <div
            className={`lg:col-span-2 lg:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${theme.hoverBorder}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Layers className={`w-5 h-5 ${theme.primary}`} />
                <h2 className="font-bold text-white text-base">Aktivitas Koding</h2>
                {githubTotal !== null && (
                  <span className="text-[10px] px-2 py-0.5 bg-zinc-950 border border-zinc-850 rounded font-mono text-zinc-400">
                    {githubTotal} kontribusi (2026)
                  </span>
                )}
              </div>
              <a
                href="https://github.com/Adewiraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
              >
                <span>Lihat Profil</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Grid Contributions container */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-end gap-1.5 text-[10px] text-zinc-500 mb-1">
                <span>Lebih sedikit</span>
                <span className="w-2.5 h-2.5 rounded bg-[#161b22] border border-[#1b2129]" />
                <span className="w-2.5 h-2.5 rounded bg-[#0e4429] border border-[#135835]" />
                <span className="w-2.5 h-2.5 rounded bg-[#006d32] border border-[#008f42]" />
                <span className="w-2.5 h-2.5 rounded bg-[#26a641] border border-[#2dbf4c]" />
                <span className="w-2.5 h-2.5 rounded bg-[#39d353] border border-[#44e660]" />
                <span>Lebih banyak</span>
              </div>
              
              <div className="overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950">
                <div className="flex gap-1.5 w-max">
                  {githubGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((cell, dIdx) => {
                        // Color intensity based on GitHub dark mode theme
                        const colors = [
                          "bg-[#161b22] border border-[#1b2129]", // level 0
                          "bg-[#0e4429] border border-[#135835]", // level 1
                          "bg-[#006d32] border border-[#008f42]", // level 2
                          "bg-[#26a641] border border-[#2dbf4c]", // level 3
                          "bg-[#39d353] border border-[#44e660]", // level 4
                        ];
                        const level = cell.level !== undefined ? cell.level : Math.min(cell.count, 4);
                        const colorClass = colors[Math.min(level, 4)];
                        
                        const dateFormatted = cell.date.toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        });

                        return (
                          <button
                            key={dIdx}
                            onMouseEnter={() =>
                              setGithubTooltip(`${cell.count} kontribusi pada ${dateFormatted}`)
                            }
                            onClick={() =>
                              setGithubTooltip(`${cell.count} kontribusi pada ${dateFormatted}`)
                            }
                            className={`w-3.5 h-3.5 rounded transition-transform hover:scale-125 focus:scale-125 ${colorClass}`}
                            aria-label={`Contributions info`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info tooltip bar */}
            <div className="mt-3 py-2 px-3 bg-zinc-950 border border-zinc-800/80 rounded-xl text-center">
              <span className="text-[11px] font-mono text-zinc-400">{githubTooltip}</span>
            </div>
          </div>

          {/* PROJECTS CARDS LOOP */}
          {PROJECTS.map((project, idx) => {
            const isFirst = idx === 0;
            const highlightClass = isFirst ? getHighlightClass("projects") : `border-zinc-800 ${theme.hoverBorder}`;
            const highlightStyle = isFirst ? getHighlightStyle("projects") : {};

            return (
              <div
                key={idx}
                id={isFirst ? "projects" : undefined}
                onClick={() => setSelectedProject(project)}
                className={`lg:col-span-2 lg:row-span-2 bg-zinc-900 border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${highlightClass} group overflow-hidden cursor-pointer`}
                style={highlightStyle}
              >
                <div className="space-y-4">
                  <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-950 shadow-md">
                    <Image
                      src={project.image}
                      alt={`${project.title} Interface Preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${theme.primary}`}>
                        {project.category}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[10px] rounded font-mono text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    Detail Proyek <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* CARD 7: Work Experience Timeline (lg:col-span-2 lg:row-span-2) */}
          <div
            id="experience"
            className={`lg:col-span-2 lg:row-span-2 bg-zinc-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${getHighlightClass("experience")}`}
            style={getHighlightStyle("experience")}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <Briefcase className={`w-5 h-5 ${theme.primary}`} />
              <h2 className="font-bold text-white text-base">Pengalaman Kerja</h2>
            </div>

            {/* Timeline Vertical */}
            <div className="flex-1 overflow-y-auto max-h-[350px] pr-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950/40 relative pl-1 space-y-6 sm:space-y-8 py-2">

              {/* Item 1 */}
              <div className="relative pl-9">
                <div className={`absolute left-[11px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 ${theme.border} flex items-center justify-center`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.accentBg}`} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Full Stack Developer</h4>
                    <span className="text-[10px] sm:text-xs font-mono text-zinc-500">Agustus 2024 - Sekarang</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-semibold">PT. DIPA PHARMALAB INTERSAINS, Majalengka</p>
                  <p className="text-[10px] text-zinc-500 italic">Role: Staff</p>
                  <ul className="text-[11px] text-zinc-500 space-y-1.5 list-disc pl-4 pt-1 leading-relaxed">
                    <li>Mengembangkan dan memelihara <strong>DIPA CORE</strong> (Laravel, MySQL), sistem web internal/super apps untuk digitalisasi proses operasional di Produksi, QA, QC, Gudang, Teknik, dan HR.</li>
                    <li>Membuat modul operasional utama seperti <strong>DIPA OTAS, DIPA VALID, DIPA FETCH, DIPA COMPLY</strong>, dan <strong>DIPA OPTRAC</strong> dengan hak akses dinamis berbasis peran (RBAC).</li>
                    <li>Mengintegrasikan alur persetujuan digital (<strong>approval workflow</strong>) untuk proses operasional dan administrasi paperless (Lembur, Retain Sample, Reagen Lab, dll.).</li>
                    <li>Membangun tampilan antarmuka modern yang responsif menggunakan <strong>Laravel Blade, Bootstrap, DataTables, AJAX</strong>, dan integrasi notifikasi otomatis via <strong>n8n / WhatsApp Gateway</strong>.</li>
                    <li>Mengoptimalkan basis data, query SQL, refactoring kode Laravel, serta mengelola deployment server menggunakan workflow manual berbasis <strong>GitHub, WinSCP, dan Laragon</strong>.</li>
                    <li>Mengembangkan konsep integrasi <strong>AI Assistant</strong> internal untuk otomatisasi analisis dan asisten pintar dalam membantu pengguna memahami data kontekstual.</li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-9">
                <div className="absolute left-[11px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Fullstack Developer</h4>
                    <span className="text-[10px] sm:text-xs font-mono text-zinc-500">Oktober 2023 - Mei 2024</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-semibold">HALO DIGITAL NUSANTARA, Bogor</p>
                  <p className="text-[10px] text-zinc-500 italic">Role: Pegawai Magang</p>
                  <ul className="text-[11px] text-zinc-500 space-y-1.5 list-disc pl-4 pt-1 leading-relaxed">
                    <li>Pengembangan Frontend: Membangun UI responsive menggunakan HTML, CSS, dan JavaScript untuk pengalaman pengguna yang intuitif.</li>
                    <li>Pengembangan Backend: Membangun server, database serta logika.</li>
                    <li>Pengujian dan Debugging: Melakukan pengujian menyeluruh dan mengidentifikasi serta memperbaiki bug aplikasi.</li>
                    <li>Kolaborasi Tim: Bekerja sama dengan anggota tim untuk perencanaan, pengembangan, dan rilis fitur aplikasi.</li>
                    <li>Pemeliharaan dan Skalabilitas: Memantau kinerja, melakukan pemeliharaan, dan mengoptimalkan aplikasi agar dapat menangani lonjakan lalu lintas.</li>
                  </ul>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-9">
                <div className="absolute left-[11px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Fullstack Developer</h4>
                    <span className="text-[10px] sm:text-xs font-mono text-zinc-500">Agustus 2022 - Desember 2022</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-semibold">MEGA CAPITAL SEKURITAS, Jakarta</p>
                  <p className="text-[10px] text-zinc-500 italic">Role: Pegawai Magang</p>
                  <ul className="text-[11px] text-zinc-500 space-y-1.5 list-disc pl-4 pt-1 leading-relaxed">
                    <li>SQL Server: Membangun struktur database yang efisien dan kuat untuk aplikasi bisnis modern.</li>
                    <li>React Native: Dasar-dasar pengembangan aplikasi lintas platform dengan framework JavaScript populer.</li>
                    <li>Figma: Alat desain UI/UX untuk membuat prototipe dan desain antarmuka pengguna yang menarik.</li>
                    <li>Figma to React Native: Mengubah desain Figma menjadi komponen UI React Native yang berfungsi.</li>
                    <li>Memahami konsep dasar dan sintaksis dalam pemrograman ASP untuk pengembangan web.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 7.5: Education & Certifications (lg:col-span-2 lg:row-span-1) */}
          <div
            className={`lg:col-span-2 lg:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${theme.hoverBorder}`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap className={`w-5 h-5 ${theme.primary}`} />
              <h2 className="font-bold text-white text-base">Pendidikan & Sertifikasi</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* Education Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold border-b border-zinc-800 pb-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Pendidikan Formal</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">S1 Teknik Informatika</h4>
                  <p className="text-[11px] text-zinc-400">STIKOM Poltek Cirebon</p>
                  <p className="text-[10px] text-zinc-500 font-mono">2019 - 2023 • IPK 3.59 (Lulus)</p>
                </div>
              </div>

              {/* Certifications Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold border-b border-zinc-800 pb-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Sertifikasi Profesional</span>
                </div>
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Artificial Intelligence Lvl 1</h4>
                    <p className="text-[10px] text-zinc-500 font-mono">LSP Stikom • 2023</p>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Database Administrator Lvl 1</h4>
                    <p className="text-[10px] text-zinc-500 font-mono">LSP Stikom • 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 8: Live Clock Widget (lg:col-span-1 lg:row-span-1) */}
          <div
            className={`lg:col-span-1 lg:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${theme.hoverBorder}`}
          >
            <div className="flex items-center gap-2">
              <Clock className={`w-4 h-4 ${theme.primary}`} />
              <span className="text-xs text-zinc-400 font-bold">Waktu Lokal Saya</span>
            </div>
            
            <div className="my-4">
              {isClient ? (
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-mono text-white">
                  {timeString}
                </div>
              ) : (
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-mono text-zinc-600">
                  --:--:-- WIB
                </div>
              )}
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-xs text-zinc-500">Jawa Barat, Indonesia</span>
              </div>
            </div>

            <div className="text-[10px] font-semibold text-zinc-500 bg-zinc-950 border border-zinc-800/60 px-2 py-1 rounded-md text-center">
              Online di luar jam kantor reguler
            </div>
          </div>

          {/* CARD 9: Socials & Connect (lg:col-span-1 lg:row-span-1) */}
          <div
            className={`lg:col-span-1 lg:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${theme.hoverBorder}`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${theme.primary}`} />
              <span className="text-xs text-zinc-400 font-bold">Mari Berjejaring</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-4">
              <a
                href="https://github.com/Adewiraa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 rounded-xl hover:bg-zinc-800/40 text-zinc-400 hover:text-white transition-all"
              >
                <Github className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-mono">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ade-wiramiharja-2b4b94202/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 rounded-xl hover:bg-zinc-800/40 text-zinc-400 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-mono">LinkedIN</span>
              </a>
              <a
                href="mailto:ade.wiramiharjaa@gmail.com"
                className="flex flex-col items-center justify-center p-2 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 rounded-xl hover:bg-zinc-800/40 text-zinc-400 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-mono">Email</span>
              </a>
            </div>

            <div className="text-[10px] font-mono text-zinc-500 text-center">
              Respon pesan dalam waktu &lt; 24 jam.
            </div>
          </div>

          {/* CARD 10: Quick Message Form (lg:col-span-4 lg:row-span-1) */}
          <div
            id="contact"
            className={`lg:col-span-4 lg:row-span-1 bg-zinc-900 border rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ${getHighlightClass("contact")}`}
            style={getHighlightStyle("contact")}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <Send className={`w-5 h-5 ${theme.primary}`} />
              <h2 className="font-bold text-white text-base">Kirim Pesan Instan</h2>
            </div>

            {isSubmitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-4 bg-zinc-950 border border-zinc-800/60 rounded-2xl gap-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
                <h4 className="text-sm font-bold text-white">Pesan Terkirim!</h4>
                <p className="text-xs text-zinc-500">Terima kasih atas pesannya. Saya akan membalas secepat mungkin.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                    className={`px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 ${theme.ring}`}
                  />
                  <input
                    type="email"
                    placeholder="Alamat Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                    className={`px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 ${theme.ring}`}
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    required
                    className={`flex-1 px-3.5 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 ${theme.ring}`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 text-zinc-950 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${theme.accentBg} hover:opacity-90 active:scale-95 disabled:opacity-50`}
                  >
                    <span>{isSubmitting ? "Mengirim..." : "Kirim"}</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-20 py-8 px-6 text-center text-xs text-zinc-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Ade Wiramiharja. Dibuat menggunakan Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js 16.2.9</span>
            <span className="text-zinc-800">|</span>
            <span>Tailwind CSS v4.0</span>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-200 transition-colors z-10"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold uppercase tracking-wider ${theme.primary}`}>
                  {selectedProject.category}
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-xs text-zinc-500 font-mono">{selectedProject.year}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column: Image & Tech Tags */}
              <div className="space-y-4">
                <div className="relative w-full aspect-video rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-950 shadow-md">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} Detail Image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Teknologi yang Digunakan</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-lg font-mono text-xs text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Description & Key Features */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Deskripsi Proyek</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Fitur Utama & Implementasi</h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feature, fIdx) => (
                      <div key={fIdx} className="p-3 bg-zinc-950/60 border border-zinc-800/80 rounded-xl flex gap-2.5 items-start">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${theme.primary}`} />
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-bold text-zinc-200">{feature.title}</h5>
                          <p className="text-[11px] text-zinc-400 leading-normal">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer button to close */}
            <div className="flex justify-end pt-4 border-t border-zinc-800">
              <button
                onClick={() => setSelectedProject(null)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 ${theme.accentBg} hover:opacity-90 transition-all active:scale-95`}
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
