import LiveDot from "@/components/ui/LiveDot";

interface HeaderReadingProps {
  currentFocus?: string;
}

export default function HeaderReading({ currentFocus }: HeaderReadingProps) {
  const focus = currentFocus || "Multi-modal affect recognition · CueStream";

  return (
    <header id="top" className="pt-20 pb-16">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          {/* Left: Identity */}
          <div>
            <p className="mono-label mb-3 flex items-center gap-2">
              <LiveDot /> ACTIVE
            </p>
            <h1 className="font-sans text-[clamp(32px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
              Adhithi C Iyer
            </h1>
            <p className="mt-4 text-[var(--color-ink-muted)] text-[15px] leading-relaxed max-w-xl">
              B.E. Computer Science, RV College of Engineering (2023–2027).
              Building across sensor fusion, applied ML, multi-agent systems,
              and systems programming. Published in IEEE Access and ICSE.
            </p>
            <p className="mt-5 font-mono text-[12px] text-[var(--color-ink-faint)] tracking-wide">
              CURRENT FOCUS →{" "}
              <span className="text-[var(--color-accent)]">{focus}</span>
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col gap-2.5 min-w-[220px]">
            <LinkRow label="GITHUB" value="Adhithi02" href="https://github.com/Adhithi02" />
            <LinkRow
              label="LINKEDIN"
              value="/in/adhithi-iyer"
              href="https://www.linkedin.com/in/adhithi-iyer-121262332"
            />
            <LinkRow
              label="LEETCODE"
              value="Adhithi_iy"
              href="https://leetcode.com/u/Adhithi_iy/"
            />
            <LinkRow
              label="EMAIL"
              value="adhithiciyer2005@gmail.com"
              href="mailto:adhithiciyer2005@gmail.com"
            />
            <LinkRow
              label="RESUME"
              value="ADHITHI02.pdf"
              href="/ADHITHI02.pdf"
              download
            />
          </div>
        </div>

        {/* Education line */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] text-[var(--color-ink-faint)]">
            <span>INSTITUTION → RV College of Engineering, Bengaluru</span>
            <span>DEGREE → B.E. Computer Science</span>
            <span>CGPA → <span className="text-[var(--color-ink-muted)]">9.11 / 10</span></span>
            <span>EXPECTED → 2027</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function LinkRow({
  label,
  value,
  href,
  download,
}: {
  label: string;
  value: string;
  href: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={download ? "_blank" : href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-baseline gap-3 py-1.5 font-mono text-[12px] hover:text-[var(--color-accent)] transition-colors"
    >
      <span className="text-[var(--color-ink-faint)] tracking-[0.12em] w-[72px] shrink-0">
        {label}
      </span>
      <span className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-accent)] transition-colors truncate">
        {value}
      </span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="opacity-0 group-hover:opacity-60 transition-opacity shrink-0"
      >
        <path
          d="M1 9L9 1M9 1H3M9 1v6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
