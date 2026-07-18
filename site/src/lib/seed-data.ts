import type {
  Experience,
  Project,
  Publication,
  SkillGroup,
  Certification,
  GitHubData,
  LeetCodeStats,
} from "@/types";

// ─── Experience ─────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    date: "2025.07 – 2025.09",
    org: "Itriangle Infotech Pvt. Ltd.",
    role: "Embedded Intern",
    description:
      "Fused GPS + IMU via Extended Kalman Filter + LSTM in Python; RMSE improved 5.31 m → 4.39 m (17 % reduction).",
    metric: "RMSE 5.31 m → 4.39 m",
    repoUrl: "https://github.com/Adhithi02/dead_reckoning",
  },
  {
    date: "2025.03 – 2026.03",
    org: "INICAI, CSE Dept., RVCE",
    role: "AI Research & Development — Translate.io",
    description:
      "4-stage air-gapped pipeline (Whisper ASR → IndicTrans2 → noise suppression → Fast TTS), 10–15 s latency on CPU-only hardware, 6 Indian languages.",
    metric: "10–15 s latency · 6 languages",
    award: "Best Experiential Learning (EL) Project, 4th Semester — judged by IBM / Arm / NXP Semiconductors / Microlab Instruments",
    repoUrl: "https://github.com/Adhithi02/Translate.io",
  },
  {
    date: "2025.09 – 2026.05",
    org: "CSE Dept., RVCE",
    role: "ML & Development — CueStream",
    description:
      "Decision-level fusion (gaze, posture, facial, speech) via CNN/SVM + MediaPipe/OpenCV, ~78 % 3-state engagement classification, FastAPI backend.",
    metric: "~78 % accuracy · 3-state classification",
    repoUrl: "https://github.com/Adhithi02/Multi-Modal-Affect-Recognition",
  },
];

// ─── Projects ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    name: "GreenAI — Sustainable Model Optimisation",
    problem:
      "Deep learning models are computationally expensive to train and deploy, with significant environmental cost that is rarely measured.",
    approach:
      "Benchmarked 67 compression configurations (54 pruning + 13 quantisation) across VGG, ResNet, BERT, and MobileNet. Tracked CO₂e emissions via CodeCarbon throughout the optimization pipeline.",
    result:
      "Up to 38 % size reduction with < 3 % accuracy loss; full carbon footprint tracked per configuration.",
    stack: ["PyTorch", "TensorFlow", "CodeCarbon", "scikit-learn", "React"],
    repoUrl: "https://github.com/Adhithi02/greenai_aiml",
    repoName: "greenai_aiml",
  },
  {
    name: "CueStream — Multi-Modal Affect Recognition",
    problem:
      "Engagement measurement in real-time requires fusing noisy, heterogeneous signals from multiple modalities without a unified ground truth.",
    approach:
      "Decision-level fusion of gaze, posture, facial expression, and speech signals via CNN/SVM classifiers with MediaPipe and OpenCV for feature extraction. FastAPI backend for real-time serving.",
    result: "~78 % accuracy on 3-state engagement classification.",
    stack: ["FastAPI", "MediaPipe", "OpenCV", "CNN", "SVM", "React"],
    repoUrl: "https://github.com/Adhithi02/Multi-Modal-Affect-Recognition",
    repoName: "Multi-Modal-Affect-Recognition",
  },
  {
    name: "Translate.io — Offline Speech Translation",
    problem:
      "Real-time speech translation across Indian languages on CPU-only hardware with no internet dependency.",
    approach:
      "4-stage air-gapped pipeline: Whisper ASR → IndicTrans2 machine translation → noise suppression → Fast TTS. Designed for air-gapped, CPU-only deployment.",
    result: "10–15 s end-to-end latency across 6 Indian languages on CPU.",
    stack: ["Whisper", "IndicTrans2", "Fast TTS", "Python"],
    repoUrl: "https://github.com/Adhithi02/Translate.io",
    repoName: "Translate.io",
  },
  {
    name: "Linux IPC & SMT-Aware Job Scheduler",
    problem:
      "Efficient inter-process communication and thread scheduling on multi-core Linux systems with SMT awareness.",
    approach:
      "System V message queues + shared memory, 4 processes × 4-pthread pools, SMT-aware affinity via pthread_setaffinity_np(), PTHREAD_PROCESS_SHARED mutexes.",
    result:
      "Demonstrated correct concurrent scheduling with CPU affinity and zero race conditions under load.",
    stack: ["C", "pthreads", "System V IPC", "Linux"],
    repoUrl: "https://github.com/Adhithi02/linux-ipc-framework",
    repoName: "linux-ipc-framework",
  },
  {
    name: "Clinical Handover Intelligence Agent",
    problem:
      "Clinical shift handovers lose critical patient context due to unstructured communication under time pressure.",
    approach:
      "Multi-agent system (Planner, Risk Analysis, Synthesis) with LangGraph, real-time LLM streaming to React 18 via WebSockets, FastMCP + Pydantic backend.",
    result:
      "Structured, risk-aware handover reports generated in real-time with streaming UI.",
    stack: ["LangGraph", "React 18", "WebSockets", "FastMCP", "Pydantic"],
    repoUrl:
      "https://github.com/Adhithi02/Clinical-Shift-Handover-Intelligence-Agent",
    repoName: "Clinical-Shift-Handover-Intelligence-Agent",
  },
  {
    name: "Civic Rights Reporting Platform",
    problem:
      "Citizens lack a streamlined way to report civic issues with proper categorisation and geolocation.",
    approach:
      "AI-powered issue categorisation combined with geolocation-based reporting. Built for the GDG Solution Challenge 2025.",
    result: "End-to-end civic reporting flow with automatic issue classification.",
    stack: ["React", "Node.js", "AI/ML", "Geolocation"],
    repoUrl: "https://github.com/Adhithi02/GDG_2025",
    repoName: "GDG_2025",
  },
  {
    name: "Return-to-Tech Platform",
    problem:
      "Career returners face barriers re-entering the tech workforce after breaks.",
    approach:
      "Full-stack platform with personalised learning paths, community features, and resource curation. National Finalist at Hackfinity 2025, PES University.",
    result: "National Finalist — Hackfinity 2025, PES University.",
    stack: ["React", "Node.js", "Firebase"],
    repoUrl: "https://github.com/Adhithi02/21_debugHers",
    repoName: "21_debugHers",
  },
];

// ─── Publications ───────────────────────────────────────────────
export const publications: Publication[] = [
  {
    title:
      "Green AI: A Comprehensive Framework for Energy-, Latency-, Memory-, and Carbon-Efficient Deep Learning Model Optimization",
    venue: "IEEE Access",
    year: "2026",
    doi: "10.1109/ACCESS.2026.3714889",
  },
  {
    title:
      "AI-Driven Prediction of Injury Risk in Athletes Using Training and Recovery Data: A Machine Learning Approach to Proactive Sports Management",
    venue: "ICSE 2025, New Delhi",
    year: "2025",
    award: "Best Paper Award (Student Category)",
    prize: "₹10,000",
  },
  {
    title:
      "Pose-Based Biomechanical Risk Identification for Injury in Handball Players Based on Computer Vision",
    venue: "ICSE 2025, New Delhi",
    year: "2025",
    repoUrl:
      "https://github.com/Adhithi02/pose-based-biomedical-risk-identification-for-injury-in-handball-players-based-on-computer-vision",
  },
];

// ─── Skills ─────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  { domain: "Languages", tools: ["Python", "Java", "C"] },
  {
    domain: "AI / ML",
    tools: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "MediaPipe",
      "LangGraph",
      "CNN",
      "SVM",
      "LSTM",
      "EKF",
    ],
  },
  {
    domain: "Backend",
    tools: ["Node.js", "FastAPI", "Flask", "REST APIs", "WebSockets"],
  },
  { domain: "Frontend", tools: ["React", "HTML/CSS", "Tailwind CSS"] },
  {
    domain: "Databases",
    tools: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    domain: "Cloud / DevOps",
    tools: ["Git", "Docker", "CI/CD", "GitHub Actions", "Postman"],
  },
  {
    domain: "Systems",
    tools: ["pthreads", "System V IPC", "Distributed Systems", "Linux"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Data Science for Engineers",
    issuer: "NPTEL — IIT Madras (Elite)",
  },
  {
    name: "AI for Economics",
    issuer: "NPTEL — IIT Kharagpur (Elite)",
  },
];

export const activities = [
  "GirlScript Summer of Code 2025 — Contributor",
  "HR Coordinator — NSS RVCE",
  "Member — GDG RVCE",
];

// ─── Fallback GitHub Data ───────────────────────────────────────
export const fallbackGitHub: GitHubData = {
  profile: {
    login: "Adhithi02",
    public_repos: 24,
    followers: 5,
    following: 8,
    avatar_url: "",
    html_url: "https://github.com/Adhithi02",
    bio: null,
  },
  repos: [
    {
      name: "greenai_aiml",
      description: "Sustainable Model Optimisation — 67 compression configs across VGG/ResNet/BERT/MobileNet",
      html_url: "https://github.com/Adhithi02/greenai_aiml",
      language: "Python",
      stargazers_count: 4,
      forks_count: 1,
      pushed_at: "2026-05-01T00:00:00Z",
      updated_at: "2026-05-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "Multi-Modal-Affect-Recognition",
      description: "CueStream — Decision-level fusion for engagement classification",
      html_url: "https://github.com/Adhithi02/Multi-Modal-Affect-Recognition",
      language: "Python",
      stargazers_count: 3,
      forks_count: 0,
      pushed_at: "2026-04-01T00:00:00Z",
      updated_at: "2026-04-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "Translate.io",
      description: "Offline speech translation across 6 Indian languages",
      html_url: "https://github.com/Adhithi02/Translate.io",
      language: "Python",
      stargazers_count: 3,
      forks_count: 0,
      pushed_at: "2026-03-01T00:00:00Z",
      updated_at: "2026-03-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "linux-ipc-framework",
      description: "System V IPC + SMT-aware job scheduler",
      html_url: "https://github.com/Adhithi02/linux-ipc-framework",
      language: "C",
      stargazers_count: 2,
      forks_count: 0,
      pushed_at: "2026-02-01T00:00:00Z",
      updated_at: "2026-02-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "Clinical-Shift-Handover-Intelligence-Agent",
      description: "Multi-agent clinical handover system with LangGraph",
      html_url: "https://github.com/Adhithi02/Clinical-Shift-Handover-Intelligence-Agent",
      language: "Python",
      stargazers_count: 2,
      forks_count: 0,
      pushed_at: "2026-06-01T00:00:00Z",
      updated_at: "2026-06-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "dead_reckoning",
      description: "GPS + IMU sensor fusion via EKF + LSTM",
      html_url: "https://github.com/Adhithi02/dead_reckoning",
      language: "Python",
      stargazers_count: 2,
      forks_count: 0,
      pushed_at: "2025-09-01T00:00:00Z",
      updated_at: "2025-09-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "pose-based-biomedical-risk-identification-for-injury-in-handball-players-based-on-computer-vision",
      description: "Pose-Based Biomechanical Risk Identification",
      html_url: "https://github.com/Adhithi02/pose-based-biomedical-risk-identification-for-injury-in-handball-players-based-on-computer-vision",
      language: "Python",
      stargazers_count: 2,
      forks_count: 0,
      pushed_at: "2025-06-01T00:00:00Z",
      updated_at: "2025-06-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "GDG_2025",
      description: "Civic Rights Reporting Platform — GDG Solution Challenge 2025",
      html_url: "https://github.com/Adhithi02/GDG_2025",
      language: "JavaScript",
      stargazers_count: 3,
      forks_count: 1,
      pushed_at: "2025-04-01T00:00:00Z",
      updated_at: "2025-04-01T00:00:00Z",
      topics: [],
      fork: false,
    },
    {
      name: "21_debugHers",
      description: "Return-to-Tech Platform — Hackfinity 2025 National Finalist",
      html_url: "https://github.com/Adhithi02/21_debugHers",
      language: "JavaScript",
      stargazers_count: 3,
      forks_count: 0,
      pushed_at: "2025-03-01T00:00:00Z",
      updated_at: "2025-03-01T00:00:00Z",
      topics: [],
      fork: false,
    },
  ],
  events: [],
  fetchedAt: new Date().toISOString(),
};

// ─── Fallback LeetCode Data ─────────────────────────────────────
export const fallbackLeetCode: LeetCodeStats = {
  totalSolved: 85,
  easySolved: 40,
  mediumSolved: 35,
  hardSolved: 10,
  ranking: 350000,
  totalQuestions: 3400,
  fetchedAt: new Date().toISOString(),
};
