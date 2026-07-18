import ScrollReveal from "@/components/ui/ScrollReveal";
import { publications } from "@/lib/seed-data";

export default function PublishedRecord() {
  return (
    <section id="published" className="scroll-mt-12 pt-8 pb-16" aria-labelledby="published-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Publications</span>
        <hr className="ruled-line flex-1" />
      </div>

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <article className="bracket-box">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="font-sans text-[16px] font-semibold tracking-[-0.01em] text-[var(--color-ink)] leading-snug">
                  {pub.title}
                </h3>
                <span className="font-mono text-[12px] text-[var(--color-accent)] shrink-0 whitespace-nowrap md:pt-1">
                  {pub.year}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-3 border-t border-[var(--color-border-strong)]">
                <span className="font-mono text-[11px] text-[var(--color-ink-faint)] uppercase tracking-wider">
                  Venue: {pub.venue}
                </span>
                {pub.award && (
                  <span className="font-mono text-[11px] text-[var(--color-accent)]">
                    ★ {pub.award}
                  </span>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--color-green)] hover:text-[var(--color-ink)] transition-colors ml-auto"
                  >
                    DOI: {pub.doi} ↗
                  </a>
                )}
                {!pub.doi && pub.repoUrl && (
                  <a
                    href={pub.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--color-green)] hover:text-[var(--color-ink)] transition-colors ml-auto"
                  >
                    View Paper ↗
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
