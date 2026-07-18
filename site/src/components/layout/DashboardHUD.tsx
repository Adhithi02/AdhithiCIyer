"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import SensorGrid from "@/components/ui/SensorGrid";

const NAV_ITEMS = [
  { id: "log", label: "Experience", icon: "◈" },
  { id: "instruments", label: "Live Stats", icon: "◉" },
  { id: "specimens", label: "Projects", icon: "◆" },
  { id: "published", label: "Publications", icon: "◇" },
  { id: "reference", label: "Skills", icon: "◎" },
  { id: "reach", label: "Contact", icon: "◈" },
];

export default function DashboardHUD({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState<Date | null>(null);
  const [booting, setBooting] = useState(true);
  const [logIndex, setLogIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("log");

  useEffect(() => setMounted(true), []);

  // Clock
  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Boot sequence
  const BOOT_LINES = [
    "Loading portfolio...",
    "Fetching live data...",
    "Ready.",
  ];

  useEffect(() => {
    if (logIndex < BOOT_LINES.length) {
      const timer = setTimeout(() => {
        setLogIndex(i => i + 1);
      }, 400 + Math.random() * 300);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setBooting(false), 400);
    }
  }, [logIndex]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      if (window.innerWidth >= 1024) {
        const viewer = document.getElementById("viewer");
        if (viewer) {
          const offset = target.offsetTop - viewer.offsetTop;
          viewer.scrollTo({ top: offset, behavior: "smooth" });
        }
      } else {
        const offset = target.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  if (booting) {
    return (
      <div className="flex flex-col items-center justify-center h-dvh bg-[var(--color-bg)]">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-sans text-[28px] font-bold tracking-[-0.03em] text-[var(--color-ink)] mb-6">
            Adhithi C Iyer
          </h1>
          <div className="font-mono text-[12px] text-[var(--color-ink-faint)] space-y-2">
            {BOOT_LINES.slice(0, logIndex).map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {line}
              </motion.div>
            ))}
            {logIndex < BOOT_LINES.length && (
              <div className="animate-pulse">_</div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row min-h-dvh lg:h-dvh lg:overflow-hidden"
    >
      {/* ─── SIDEBAR ─── */}
      <aside className="w-full lg:w-[340px] xl:w-[380px] shrink-0 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col relative lg:h-dvh lg:overflow-y-auto custom-scrollbar">
        <SensorGrid />

        {/* Identity */}
        <div className="relative z-10 px-7 pt-10 pb-8 border-b border-[var(--color-border)]">
          <h1 className="font-sans text-[30px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-ink)]">
            Adhithi C Iyer
          </h1>
          <p className="mt-3 text-[14px] text-[var(--color-ink-muted)] leading-relaxed">
            AI/ML & Systems Engineer
          </p>
          <p className="mt-4 text-[13px] text-[var(--color-ink-faint)] leading-[1.7]">
            B.E. Computer Science at RV College of Engineering, Bengaluru. 
            Building at the intersection of applied machine learning, 
            sensor fusion, and systems programming.
          </p>
          <p className="mt-3 text-[13px] text-[var(--color-accent)]">
            CGPA 9.11 / 10
          </p>
        </div>

        {/* Navigation Cards */}
        <nav className="relative z-10 flex-1 px-5 py-6 flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group relative text-left px-4 py-3 rounded-md transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-[var(--color-accent-dim)] border border-[var(--color-accent)]/30"
                  : "border border-transparent hover:bg-[var(--color-surface-2)] hover:border-[var(--color-border)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-[14px] transition-colors ${
                  activeSection === item.id 
                    ? "text-[var(--color-accent)]" 
                    : "text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink-muted)]"
                }`}>
                  {item.icon}
                </span>
                <span className={`font-sans text-[14px] font-medium transition-colors ${
                  activeSection === item.id 
                    ? "text-[var(--color-ink)]" 
                    : "text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)]"
                }`}>
                  {item.label}
                </span>
              </div>
              {/* Active indicator bar */}
              <AnimatePresence>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[var(--color-accent)] rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="relative z-10 px-7 py-6 border-t border-[var(--color-border)] mt-auto">
          {/* Theme toggle */}
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-md border border-[var(--color-border)] hover:border-[var(--color-ink-faint)] transition-colors mb-5 group"
          >
            <span className="font-sans text-[13px] text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors">
              {mounted ? (theme === "dark" ? "Dark Mode" : "Light Mode") : "..."}
            </span>
            <span className="text-[16px]">
              {mounted ? (theme === "dark" ? "🌙" : "☀️") : ""}
            </span>
          </button>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Adhithi02" target="_blank" rel="noopener noreferrer" 
               className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition-colors" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/adhithi-iyer-121262332" target="_blank" rel="noopener noreferrer" 
               className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition-colors" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://leetcode.com/u/Adhithi_iy/" target="_blank" rel="noopener noreferrer" 
               className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition-colors" title="LeetCode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
            <a href="mailto:adhithiciyer2005@gmail.com" 
               className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] transition-colors" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <span className="ml-auto">
              <a href="/ADHITHI02.pdf" target="_blank" rel="noopener noreferrer" 
                 className="font-sans text-[12px] font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors border border-[var(--color-accent)]/30 px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-dim)]">
                Resume ↗
              </a>
            </span>
          </div>

          {/* Live clock */}
          <div className="mt-5 flex items-center justify-between text-[var(--color-ink-faint)]">
            <span className="font-mono text-[10px] tracking-wider uppercase">
              {time ? format(time, "EEE, dd MMM yyyy") : "—"}
            </span>
            <span className="font-mono text-[11px]">
              {time ? format(time, "HH:mm:ss") : "—"}
            </span>
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main id="viewer" className="flex-1 lg:overflow-y-auto scroll-smooth relative">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
          {children}
        </div>
      </main>
    </motion.div>
  );
}
