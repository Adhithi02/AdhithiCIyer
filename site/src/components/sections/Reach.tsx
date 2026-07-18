import ScrollReveal from "@/components/ui/ScrollReveal";

const LINKS = [
  {
    label: "Email",
    value: "adhithiciyer2005@gmail.com",
    href: "mailto:adhithiciyer2005@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Adhithi02",
    href: "https://github.com/Adhithi02",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adhithi-iyer",
    href: "https://www.linkedin.com/in/adhithi-iyer-121262332",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Adhithi_iy",
    href: "https://leetcode.com/u/Adhithi_iy/",
  },
  {
    label: "Resume",
    value: "View PDF",
    href: "/ADHITHI02.pdf",
  },
];

export default function Reach() {
  return (
    <section id="reach" className="scroll-mt-12 pt-8 pb-32" aria-labelledby="reach-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Contact</span>
        <hr className="ruled-line flex-1" />
      </div>

      <ScrollReveal>
        <div className="bracket-box p-0 divide-y divide-[var(--color-border-strong)]">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 hover:bg-[var(--color-surface-2)] transition-colors"
            >
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <span className="mono-label text-[10px] w-[80px] shrink-0 text-[var(--color-accent)] uppercase">{link.label}</span>
                <span className="font-mono text-[14px] text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors tracking-wide">
                  {link.value}
                </span>
              </div>
              <span className="font-sans text-[12px] font-medium text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink)] transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-2">
                Open Link 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
