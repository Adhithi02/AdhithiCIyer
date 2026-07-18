import LiveDot from "@/components/ui/LiveDot";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fetchGitHubData, computeLanguageBreakdown, totalStars, mostRecentPush } from "@/lib/github";
import { fetchLeetCodeStats } from "@/lib/leetcode";

export default async function Instruments() {
  const gh = await fetchGitHubData();
  const lc = await fetchLeetCodeStats();

  const langs = computeLanguageBreakdown(gh.repos);
  const stars = totalStars(gh.repos);
  const lastPush = mostRecentPush(gh.repos);

  // Language bar colors
  const langColors: Record<string, string> = {
    Python: "#3572A5",
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Java: "#b07219",
    C: "#555555",
    "C++": "#f34b7d",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Jupyter: "#DA5B0B",
    "Jupyter Notebook": "#DA5B0B",
    Shell: "#89e051",
  };

  return (
    <section id="instruments" className="scroll-mt-12 pt-8 pb-16" aria-labelledby="instruments-heading">
      <div className="flex items-center gap-4 mb-10">
        <span className="mono-label whitespace-nowrap">Live Stats</span>
        <hr className="ruled-line flex-1" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* GitHub Instrument */}
        <ScrollReveal>
          <div className="bracket-box">
            <div className="flex items-center gap-3 mb-6">
              <LiveDot className="amber" />
              <span className="mono-label tracking-widest text-[var(--color-accent)]">
                GitHub: Adhithi02
              </span>
            </div>

            {/* GitHub Contribution Graph */}
            <div className="mb-8 overflow-hidden rounded border border-[var(--color-border-strong)] bg-[#050607] p-2">
              <img 
                src="https://ghchart.rshah.org/d4a853/Adhithi02" 
                alt="GitHub Contribution Calendar"
                className="w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <StatBlock label="Repos" value={gh.profile.public_repos} />
              <StatBlock label="Stars" value={stars} />
              <StatBlock
                label="Last Push"
                value={lastPush ? formatTimeAgo(lastPush) : "—"}
                isText
              />
            </div>

            {/* Language breakdown */}
            <div className="mb-4">
              <span className="mono-label block mb-2.5">Language Distribution</span>
              <div className="h-2 rounded-sm overflow-hidden flex bg-[var(--color-surface-2)]">
                {langs.map((l) => (
                  <div
                    key={l.language}
                    style={{
                      width: `${l.percentage}%`,
                      backgroundColor: langColors[l.language] || "#666",
                    }}
                    title={`${l.language}: ${l.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                {langs.slice(0, 5).map((l) => (
                  <span
                    key={l.language}
                    className="font-mono text-[11px] text-[var(--color-ink-faint)] flex items-center gap-1.5"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-sm"
                      style={{ backgroundColor: langColors[l.language] || "#666" }}
                    />
                    {l.language} {l.percentage}%
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border-strong)] flex justify-between items-center">
              <span className="mono-label text-[10px]">
                Synced: {gh.fetchedAt ? formatTimestamp(gh.fetchedAt) : "—"}
              </span>
              <span className="font-mono text-[10px] text-[var(--color-green)]">Live</span>
            </div>
          </div>
        </ScrollReveal>

        {/* LeetCode Instrument */}
        <ScrollReveal delay={100}>
          <div className="bracket-box">
            <div className="flex items-center gap-3 mb-6">
              <LiveDot className="amber" />
              <span className="mono-label tracking-widest text-[var(--color-accent)]">
                LeetCode: Adhithi_iy
              </span>
            </div>

            {/* Main stat */}
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="mono-label block mb-1">Problems Solved</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[42px] font-bold text-[var(--color-ink)] leading-none">
                    {lc.totalSolved}
                  </span>
                  <span className="font-mono text-[14px] text-[var(--color-ink-faint)]">
                    / {lc.totalQuestions}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="mono-label block mb-1">Global Rank</span>
                <span className="font-mono text-[24px] text-[var(--color-ink)]">
                  {lc.ranking > 0 ? lc.ranking.toLocaleString() : "—"}
                </span>
              </div>
            </div>

            {/* Difficulty breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <DifficultyBlock label="Easy" value={lc.easySolved} color="#6b8f71" />
              <DifficultyBlock label="Medium" value={lc.mediumSolved} color="#d4a853" />
              <DifficultyBlock label="Hard" value={lc.hardSolved} color="#c45c5c" />
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border-strong)] flex justify-between items-center">
              <span className="mono-label text-[10px]">
                Synced: {lc.fetchedAt ? formatTimestamp(lc.fetchedAt) : "—"}
              </span>
              <span className="font-mono text-[10px] text-[var(--color-green)]">Live</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StatBlock({
  label,
  value,
  isText,
}: {
  label: string;
  value: string | number;
  isText?: boolean;
}) {
  return (
    <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded px-3 py-2.5">
      <span className="mono-label block text-[10px] mb-1">{label}</span>
      <span
        className={`font-mono font-semibold leading-none ${
          isText ? "text-[14px]" : "text-[20px]"
        } text-[var(--color-ink)]`}
      >
        {value}
      </span>
    </div>
  );
}

function DifficultyBlock({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded px-3 py-2.5">
      <span className="mono-label block text-[10px] mb-1" style={{ color }}>
        {label}
      </span>
      <span className="font-mono text-[20px] font-semibold text-[var(--color-ink)] leading-none">
        {value}
      </span>
    </div>
  );
}

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function formatTimestamp(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}
