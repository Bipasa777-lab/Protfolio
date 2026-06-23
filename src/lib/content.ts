// ============================================================
// All portfolio content lives here. Edit freely — text, links,
// and list items below flow directly into the page.
// ============================================================

export const profile = {
  name: "Bipasa Saha",
  role: "Software Development Engineer",
  tagline:
    "Building full-stack, cloud-native, and AI-powered applications — from heritage maps to mental-health platforms.",
  location: "Kolkata, West Bengal",
  email: "bipasasa69@gmail.com",
  phone: "+91 7076102586",
  github: "https://github.com/bipasa777-lab",
  linkedin: "https://www.linkedin.com/in/bipasa-saha-570000335/",
  about:
    "I'm an SDE fresher with hands-on experience across the stack — from converting Figma files into responsive interfaces, to standing up REST and GraphQL APIs, to shipping CI/CD pipelines on AWS. I like projects with a real edge to them: deepfake detection, face-liveness security, AI mental-health triage. Currently finishing my B.Tech in Computer Science & Engineering (AI) at Brainware University.",
};

export const education = {
  degree: "B.Tech, Computer Science & Engineering (Artificial Intelligence)",
  school: "Brainware University",
  period: "2023 — 2027",
  detail: "CGPA 8.93 / 10, so far",
};

export const internship = {
  role: "Software Development Engineer Intern",
  company: "Techno Billion AI",
  location: "Kolkata · On-site",
  period: "Mar 2025 — Jun 2025",
  points: [
    "Developed scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS, converting Figma designs into responsive UI.",
    "Integrated RESTful & GraphQL APIs and built backend services using Python (Flask/FastAPI) for efficient data handling.",
    "Optimized performance with SSR/ISR, lazy loading, and code-splitting, improving speed and SEO.",
    "Automated CI/CD pipelines using Docker & GitHub Actions and applied DevOps practices for faster, reliable deployments.",
    "Deployed and managed applications on AWS EC2, ensuring uptime, routing, and monitoring.",
    "Collaborated with cross-functional teams (dev, design, marketing) to deliver features and product explainers.",
    "Authored technical blogs and conducted research on AI/ML, MSME growth, and industry trends.",
  ],
};

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Gen-AI Powered LMS",
    blurb:
      "An AI-driven Learning Management System with smart content creation, quizzes, and flashcards for a seamless learning experience.",
    stack: ["Next.js", "Stripe", "NeonDB", "Gemini AI"],
    featured: true,
  },
  {
    name: "CareBot+",
    blurb:
      "A privacy-first AI medical chatbot with offline processing, emergency detection, and nearby hospital/pharmacy mapping with patient history tracking.",
    stack: ["Gemini 2.5 Flash", "Medical LLM"],
    featured: true,
  },
  {
    name: "SAVEZO",
    blurb:
      "Real-time AI deepfake detection and harmful-content moderation system with confidence-based scoring for pre-publication blocking.",
    stack: ["CNN", "LSTM", "YOLOv8"],
    featured: true,
  },
  {
    name: "AdhariFy",
    blurb:
      "A real-time face liveness detection system with Aadhaar authentication, spoof prevention, and sub-500ms response time.",
    stack: ["OpenCV", "TensorFlow", "Hybrid RNN (LSTM+GRU)"],
    featured: true,
  },
  {
    name: "MindHaven",
    blurb:
      "An AI-powered digital mental health platform for college students with empathetic chatbot support, suicidality risk detection, and auto-escalation to counselors.",
    stack: ["AI Chatbot", "Risk Detection", "Analytics Dashboard"],
    featured: true,
  },
  {
    name: "StoreIt",
    blurb:
      "A secure cloud storage web app with user authentication, file upload, and dashboard management.",
    stack: ["Next.js", "Auth", "Cloud Storage"],
  },
  {
    name: "CulturalVault",
    blurb:
      "An AI-powered heritage site mapping platform for discovering and cataloguing art, traditions, and historical architecture.",
    stack: ["Next.js", "TypeScript", "Leaflet", "Gemini 2.5 Flash"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "JavaScript", "Node.js", "Express"],
  },
  {
    label: "Data",
    items: ["SQL (PostgreSQL)", "NoSQL (MongoDB)"],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "AWS",
      "GCP",
    ],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub"],
  },
];

// --------------------------------------------------------------
// CERTIFICATES — your CV doesn't list specific certificates yet.
// Replace these placeholders with your real ones: edit `title`,
// `issuer`, `date`, and `credentialUrl` (or remove the entries).
// --------------------------------------------------------------
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Add your certificate title",
    issuer: "Issuing organization",
    date: "Month Year",
    credentialUrl: "#",
  },
  {
    title: "Add your certificate title",
    issuer: "Issuing organization",
    date: "Month Year",
    credentialUrl: "#",
  },
  {
    title: "Add your certificate title",
    issuer: "Issuing organization",
    date: "Month Year",
    credentialUrl: "#",
  },
];

// --------------------------------------------------------------
// ACHIEVEMENTS — same as above, swap in real wins, hackathons,
// rankings, scholarships, or publications.
// --------------------------------------------------------------
export type Achievement = {
  title: string;
  description: string;
  date: string;
};

export const achievements: Achievement[] = [
  {
    title: "Add an achievement",
    description: "A short line on what it was and why it mattered.",
    date: "Year",
  },
  {
    title: "Add an achievement",
    description: "A short line on what it was and why it mattered.",
    date: "Year",
  },
  {
    title: "Add an achievement",
    description: "A short line on what it was and why it mattered.",
    date: "Year",
  },
];
