// ─── GitHub Types ───────────────────────────────────────────────
export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
}

export interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  fetchedAt: string;
}

// ─── LeetCode Types ─────────────────────────────────────────────
export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  totalQuestions: number;
  fetchedAt: string;
}

// ─── Seed Data Types ────────────────────────────────────────────
export interface Experience {
  date: string;
  org: string;
  role: string;
  description: string;
  metric?: string;
  award?: string;
  repoUrl?: string;
}

export interface Project {
  name: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  repoUrl: string;
  repoName: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  award?: string;
  prize?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  domain: string;
  tools: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
