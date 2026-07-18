const https = require('https');

async function testLeetCode() {
  const query = `
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

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: query,
        variables: { username: "Adhithi_iy" },
      }),
    });
    
    console.log("LeetCode Response Status:", res.status);
    const json = await res.json();
    console.log("LeetCode Data:", JSON.stringify(json, null, 2));
  } catch (err) {
    console.error("LeetCode Error:", err);
  }
}

testLeetCode();
