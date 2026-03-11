import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export const RESUME_URL = "/resume.pdf";

export const CONTACT_INFO = {
  email: "nehamangla500@gmail.com",
  github: "https://github.com/N-Mangla",
  linkedin: "https://www.linkedin.com/in/neha-mangla-abb161171",
} as const;

export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Impact" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#languages", label: "Languages" },
  { href: "#certifications", label: "Certifications" },
  { href: "#awards", label: "Awards" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const PROJECTS = [
  {
    title: "Calabrio Workforce Management Platform",
    description:
      "Contributed to a complex enterprise workforce management platform at GlobalLogic, building data-intensive scheduling and calendar-based modules with React and TypeScript for global clients.",
    tech: ["React", "TypeScript", "Bryntum Calendar", "REST APIs", "Vitest"],
    highlights: [
      "Debounced API calls and reduced redundant fetches",
      "Calendar performance optimization for large datasets",
      "Reusable component architecture and testing",
    ],
  },
  {
    title: "Wellbeing Assessment Platform",
    description:
      "Built a web-based platform that enables users to assess wellbeing through personalized reports and recommendations, with a focus on smooth UI flows and scalable backend integration.",
    tech: ["Angular", "NestJS", "MySQL"],
    highlights: [
      "Personalized reporting workflows",
      "Scalable full stack implementation",
      "User-focused product experience",
    ],
  },
  {
    title: "Champion Mortgage & STIKKUM",
    description:
      "Worked on digital loan management and client retention products, building responsive user interfaces, backend services, and efficient integrations to support business-critical workflows.",
    tech: ["React", "Node.js", "MongoDB", "MySQL"],
    highlights: [
      "Loan lifecycle and dashboard experience",
      "Client retention and engagement workflows",
      "Backend API efficiency and query optimization",
    ],
  },
] as const;

export type ProjectTitle = (typeof PROJECTS)[number]["title"];

export const SKILLS = {
  Frontend: ["React", "TypeScript", "Angular", "JavaScript", "jQuery", "Sammy.js", "TailwindCSS", "Zustand", "Redux"],
  Backend: ["Node.js", "NestJS", "Express", "REST APIs"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Vitest", "Jest", "SonarQube", "Turborepo", "Azure DevOps"],
  "AI-assisted workflow": ["GitHub Copilot", "Windsurf", "Claude", "ChatGPT"],
} as const;

export const ACHIEVEMENT_METRICS = [
  { label: "Years of Experience", value: "7+" },
  { label: "Core Product Domains", value: "3+" },
  { label: "Frontend + Backend Stack", value: "10+" },
  { label: "Enterprise Systems Built", value: "5+" },
] as const;

export const PROFILE_FACTS = [
  ["Experience", "7+ Years"],
  ["Core Stack", "React / TypeScript / Node.js"],
  ["Location", "India"],
  ["Relocation", "Germany / EU"],
  ["Current Role", "Associate Consultant at GlobalLogic"],
] as const;

export const IMPACT_AREAS = [
  {
    title: "API Performance Optimization",
    description:
      "Implemented debounced API loading strategies and request control to reduce redundant network calls and improve UI responsiveness in scheduling views.",
  },
  {
    title: "Enterprise Calendar Scalability",
    description:
      "Optimized calendar rendering and data handling for large workforce datasets using Bryntum Calendar with efficient state updates and view-based data loading.",
  },
  {
    title: "Reusable Frontend Architecture",
    description:
      "Designed modular React component structures and shared utilities improving maintainability and development velocity across multiple product modules.",
  },
] as const;

export const SELECTED_ACHIEVEMENTS = [
  {
    title: "Reduced redundant API calls",
    description:
      "Introduced debounced loading and controlled view-based fetch patterns to improve responsiveness and avoid unnecessary requests in scheduling workflows.",
  },
  {
    title: "Improved calendar scalability",
    description:
      "Optimized event rendering and data loading strategies for complex workforce scheduling interfaces handling large datasets and multiple calendar views.",
  },
  {
    title: "Built reusable engineering patterns",
    description:
      "Created modular frontend structures, shared utilities, and maintainable component patterns that improved consistency across product modules.",
  },
  {
    title: "Delivered across full stack layers",
    description:
      "Worked across frontend, backend APIs, database-driven workflows, testing, and performance optimization for enterprise products.",
  },
] as const;

type CaseStudyDetails = {
  problem: string;
  solution: string;
  impact: readonly string[];
};

export const CASE_STUDY_DETAILS: Record<ProjectTitle, CaseStudyDetails> = {
  "Calabrio Workforce Management Platform": {
    problem:
      "Enterprise scheduling needed to handle complex calendar interactions, large workforce datasets, and responsive UI updates without causing redundant API calls or sluggish rendering.",
    solution:
      "Built optimized scheduling flows using React, TypeScript, and Bryntum Calendar with debounced loaders, view-based fetching patterns, and reusable frontend structures.",
    impact: [
      "Improved perceived responsiveness in scheduling workflows",
      "Reduced unnecessary fetching through controlled range-based loading",
      "Created maintainable patterns for future calendar enhancements",
    ],
  },
  "Wellbeing Assessment Platform": {
    problem:
      "The platform required clean assessment flows, reliable backend integration, and an intuitive experience for users consuming personalized wellbeing results.",
    solution:
      "Implemented full stack features across Angular, NestJS, and MySQL with focus on structured flows, scalable APIs, and user-friendly reporting experiences.",
    impact: [
      "Delivered smoother report-driven user journeys",
      "Supported scalable backend integration patterns",
      "Improved maintainability across assessment workflows",
    ],
  },
  "Champion Mortgage & STIKKUM": {
    problem:
      "Business-critical products needed reliable dashboards, efficient backend communication, and clean UI experiences to support financial and retention workflows.",
    solution:
      "Developed React and Node.js based interfaces with efficient integrations, optimized query handling, and reusable business workflow implementations.",
    impact: [
      "Strengthened loan and retention product experiences",
      "Improved API efficiency and data handling",
      "Supported core business workflows with stable UI delivery",
    ],
  },
};

export const CERTIFICATIONS = [
  {
    title: "5-Day AI Agents Intensive Course",
    organization: "Google & Kaggle",
    year: "2025",
  },
  {
    title: "Introduction to Gemini for Google Workspace",
    organization: "Google",
    year: "2026",
  },
  {
    title: "Complete Angular Course 2024",
    organization: "Udemy",
    year: "2024",
  },
  {
    title: "Database and SQL",
    organization: "Infosys",
    year: "2023",
  },
  {
    title: "Cloud Computing",
    organization: "Infosys",
    year: "2023",
  },
  {
    title: "Python for Data Science",
    organization: "IBM / Cognitive Class",
    year: "2023",
  },
] as const;

export const RECOGNITIONS = [
  {
    title: "Spotlight of the Month",
    organization: "GlobalLogic",
    description:
      "Recognized for strong contribution, ownership, and consistent impact while working on enterprise product delivery.",
  },
  {
    title: "Star Player of the Department",
    organization: "Lucida Technologies",
    description:
      "Awarded for notable performance, collaboration, and delivery excellence across project work.",
  },
] as const;

export const EXPERIENCE = [
  {
    company: "GlobalLogic",
    role: "Associate Consultant",
    description:
      "Building and enhancing the Calabrio enterprise workforce management platform with React, TypeScript, REST APIs, testing, performance optimization, and reusable frontend architecture.",
  },
  {
    company: "Lucida Technologies",
    role: "Software Developer",
    description:
      "Developed full stack web applications using React, Node.js, and NestJS, with strong focus on backend performance, role-based access control, and clean engineering practices.",
  },
  {
    company: "Agami Technologies",
    role: "Software Specialist",
    description:
      "Built dynamic React-based interfaces and Node.js backend services for client-focused products, improving API efficiency, SQL performance, and delivery quality.",
  },
] as const;

export const LANGUAGES = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
  { name: "Punjabi", level: "Native" },
] as const;

export const CONTACT_METHODS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}> = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/neha-mangla-abb161171", href: CONTACT_INFO.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/N-Mangla", href: CONTACT_INFO.github },
];

export const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const STAGGER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

