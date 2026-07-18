import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/seed-data";
import { fetchGitHubData } from "@/lib/github";

export default async function Specimens() {
  const gh = await fetchGitHubData();

  // Create a map of repo name to stats
  const repoStats = gh.repos.reduce((acc, r) => {
    acc[r.name] = { stars: r.stargazers_count, forks: r.forks_count };
    return acc;
  }, {} as Record<string, { stars: number; forks: number }>);

  return (
    <section id="specimens" className="scroll-mt-12 pt-8 pb-16" aria-labelledby="specimens-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Projects</span>
        <hr className="ruled-line flex-1" />
      </div>

      <div className="space-y-8">
        {projects.map((project, i) => {
          const stats = project.repoName ? repoStats[project.repoName] : null;

          return (
            <ScrollReveal key={i} delay={i * 60}>
              <article className="bracket-box flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-5 border-b border-[var(--color-border-strong)] pb-4">
                  <h3 className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-[var(--color-ink)] leading-snug">
                    {project.name}
                  </h3>
                  
                  {stats && (
                    <div className="flex items-center gap-3 shrink-0 font-mono text-[11px] text-[var(--color-ink-muted)] pt-1">
                      {stats.stars > 0 && <span>★ {stats.stars}</span>}
                      {stats.forks > 0 && <span>⑂ {stats.forks}</span>}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-y-4 text-[14px]">
                  <div>
                    <span className="mono-label text-[10px] block mb-1 text-[var(--color-ink-faint)]">Problem</span>
                    <p className="text-[var(--color-ink-muted)] m-0 leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <span className="mono-label text-[10px] block mb-1 text-[var(--color-ink-faint)]">Approach</span>
                    <p className="text-[var(--color-ink-muted)] m-0 leading-relaxed">{project.approach}</p>
                  </div>

                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] p-3 rounded">
                    <span className="mono-label text-[10px] block mb-1 text-[var(--color-green)]">Key Metrics</span>
                    <p className="font-mono text-[12px] text-[var(--color-ink)] m-0">{project.result}</p>
                  </div>
                </div>

                <div className="mt-auto pt-5 flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <span className="mono-label text-[10px] block mb-0.5 text-[var(--color-ink-faint)]">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-[var(--color-accent)] border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 rounded-sm whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors ml-auto flex items-center gap-1 shrink-0 h-fit"
                  >
                    View Code ↗
                  </a>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
