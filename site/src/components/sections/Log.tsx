import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/seed-data";

export default function Log() {
  return (
    <section id="log" className="scroll-mt-12 pt-8 pb-16" aria-labelledby="log-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Experience</span>
        <hr className="ruled-line flex-1" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <article className="bracket-box grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-6">
              {/* Date stamp */}
              <div className="font-mono text-[12px] text-[var(--color-accent)] tracking-widest whitespace-nowrap pt-1">
                {exp.date}
              </div>

              {/* Entry content */}
              <div>
                <h3 className="font-sans text-[15px] text-[var(--color-ink)] font-semibold leading-snug">
                  {exp.role}
                  <span className="text-[var(--color-ink-faint)] font-normal block mt-0.5 text-[13px]">
                    {exp.org}
                  </span>
                </h3>
                <p className="mt-3 text-[var(--color-ink-muted)] text-[14px] leading-relaxed">
                  {exp.description}
                </p>
                {exp.metric && (
                  <div className="mt-4 bg-[var(--color-surface-2)] border border-[var(--color-border)] p-3 inline-block rounded">
                    <span className="mono-label text-[10px] block mb-1 text-[var(--color-green)]">Key Result</span>
                    <p className="font-mono text-[12px] text-[var(--color-ink)] m-0">{exp.metric}</p>
                  </div>
                )}
                {exp.award && (
                  <p className="mt-4 font-mono text-[11px] text-[var(--color-accent)]">
                    ★ {exp.award}
                  </p>
                )}
                {exp.repoUrl && (
                  <a
                    href={exp.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-mono text-[11px] text-[var(--color-ink-faint)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    View Repository ↗
                  </a>
                )}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
