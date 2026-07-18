"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "LOG", href: "#log" },
  { label: "INSTRUMENTS", href: "#instruments" },
  { label: "SPECIMENS", href: "#specimens" },
  { label: "PUBLISHED", href: "#published" },
  { label: "REFERENCE", href: "#reference" },
  { label: "REACH", href: "#reach" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between h-14">
        {/* Monogram */}
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Back to top"
        >
          ACI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[11px] tracking-[0.14em] transition-colors ${
                activeSection === item.href
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-ink-faint)] hover:text-[var(--color-ink-muted)]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/ADHITHI02.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1.5"
            aria-label="View resume PDF"
          >
            RESUME
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M5 1v6M2 5l3 3 3-3M1 9h8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--color-ink-muted)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path
                d="M4 4l12 12M4 16L16 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-5 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 font-mono text-[12px] tracking-[0.12em] ${
                activeSection === item.href
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-ink-muted)]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/ADHITHI02.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 font-mono text-[12px] tracking-[0.12em] text-[var(--color-accent)]"
          >
            RESUME ↓
          </a>
        </div>
      )}
    </nav>
  );
}
