import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillGroups, certifications, activities } from "@/lib/seed-data";

export default function Reference() {
  return (
    <section id="reference" className="scroll-mt-12 pt-8 pb-16" aria-labelledby="reference-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Skills & Reference</span>
        <hr className="ruled-line flex-1" />
      </div>

      <div className="bracket-box p-0 overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-[var(--color-border-strong)] bg-[#0a0b0d]">
              <th className="mono-label text-[10px] px-5 py-4 w-[160px]">Domain</th>
              <th className="mono-label text-[10px] px-5 py-4 border-l border-[var(--color-border-strong)]">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {skillGroups.map((group, i) => (
              <tr
                key={group.domain}
                className={i > 0 ? "border-t border-[var(--color-border-strong)]" : ""}
              >
                <td className="px-5 py-4 font-mono text-[11px] text-[var(--color-accent)] align-top tracking-wide uppercase">
                  {group.domain}
                </td>
                <td className="px-5 py-4 border-l border-[var(--color-border-strong)]">
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-sans font-medium text-[12px] text-[var(--color-ink-muted)] border border-[var(--color-border)] px-2.5 py-1 rounded-sm bg-[var(--color-surface-2)] tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Certifications + Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal delay={100}>
          <div className="bracket-box">
            <span className="mono-label block mb-4 border-b border-[var(--color-border-strong)] pb-2 text-[var(--color-green)]">Certifications</span>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="font-sans text-[14px] font-medium text-[var(--color-ink)] leading-snug">{cert.name}</p>
                  <p className="font-mono text-[11px] text-[var(--color-ink-faint)] mt-1">
                    Issued by {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="bracket-box">
            <span className="mono-label block mb-4 border-b border-[var(--color-border-strong)] pb-2 text-[var(--color-green)]">Activities</span>
            <div className="space-y-3">
              {activities.map((activity) => (
                <p
                  key={activity}
                  className="font-sans text-[14px] text-[var(--color-ink-muted)] leading-relaxed"
                >
                  <span className="text-[var(--color-ink-faint)] mr-2 font-mono text-[11px]">◆</span>{activity}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
