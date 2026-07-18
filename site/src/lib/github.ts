import type { GitHubData, GitHubRepo, GitHubProfile, GitHubEvent } from "@/types";
import { fallbackGitHub } from "./seed-data";

const GITHUB_USER = "Adhithi02";
const API_BASE = "https://api.github.com";

export async function fetchGitHubData(): Promise<GitHubData> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    const [profileRes, reposRes, eventsRes] = await Promise.all([
      fetch(`${API_BASE}/users/${GITHUB_USER}`, { 
        headers, 
        next: { revalidate: 3600 } 
      }),
      fetch(`${API_BASE}/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
        headers,
        next: { revalidate: 3600 }
      }),
      fetch(`${API_BASE}/users/${GITHUB_USER}/events?per_page=20`, {
        headers,
        next: { revalidate: 3600 }
      }),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      console.warn("GitHub API returned non-OK status, using fallback data");
      return fallbackGitHub;
    }

    const profile: GitHubProfile = await profileRes.json();
    const allRepos: GitHubRepo[] = await reposRes.json();
    const events: GitHubEvent[] = eventsRes.ok ? await eventsRes.json() : [];

    // Filter out forks
    const repos = allRepos.filter((r) => !r.fork);

    return {
      profile,
      repos,
      events: events.filter((e) => e.type === "PushEvent").slice(0, 8),
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("GitHub API fetch failed, using fallback data:", error);
    return fallbackGitHub;
  }
}

export function computeLanguageBreakdown(
  repos: GitHubRepo[]
): { language: string; count: number; percentage: number }[] {
  const counts: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] || 0) + 1;
    }
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.entries(counts)
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}

export function totalStars(repos: GitHubRepo[]): number {
  return repos.reduce((sum, r) => sum + r.stargazers_count, 0);
}

export function mostRecentPush(repos: GitHubRepo[]): string | null {
  if (repos.length === 0) return null;
  return repos.reduce((latest, r) =>
    new Date(r.pushed_at) > new Date(latest.pushed_at) ? r : latest
  ).pushed_at;
}
