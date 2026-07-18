import type { LeetCodeStats } from "@/types";
import { fallbackLeetCode } from "./seed-data";

const LEETCODE_GQL = "https://leetcode.com/graphql";
const USERNAME = "Adhithi_iy";

const QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const res = await fetch(LEETCODE_GQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: USERNAME },
      }),
    });

    if (!res.ok) {
      console.warn("LeetCode API returned non-OK status, using fallback");
      return fallbackLeetCode;
    }

    const json = await res.json();
    const user = json?.data?.matchedUser;
    const allQuestions = json?.data?.allQuestionsCount;

    if (!user) {
      console.warn("LeetCode user data unavailable, using fallback");
      return fallbackLeetCode;
    }

    const submissions = user.submitStatsGlobal.acSubmissionNum;
    const getCount = (diff: string) =>
      submissions.find(
        (s: { difficulty: string; count: number }) => s.difficulty === diff
      )?.count ?? 0;

    const totalQuestions =
      allQuestions?.find(
        (q: { difficulty: string; count: number }) => q.difficulty === "All"
      )?.count ?? 3400;

    return {
      totalSolved: getCount("All"),
      easySolved: getCount("Easy"),
      mediumSolved: getCount("Medium"),
      hardSolved: getCount("Hard"),
      ranking: user.profile.ranking ?? 0,
      totalQuestions,
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("LeetCode API fetch failed, using fallback:", error);
    return fallbackLeetCode;
  }
}
