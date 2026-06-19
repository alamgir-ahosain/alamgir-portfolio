export type ProjectCategory = "Academic" | "Software" | "Hardware";

export type Project = {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; url: string }[];
  accent: "primary" | "accent" | "keyword" | "var";
  categories: ProjectCategory[];
  // cover: string;
};

export const projects: Project[] = [
  {
    title: "Logistics Platform API",
    date: "Feb 2026",
    description:
      "Backend API platform for managing logistics operations — locations, storage, products, routes, and demands.",
    highlights: [
      "Dockerized and deployed on Render",
      "CI/CD pipeline with GitHub Actions",
      "Tested with JUnit 5 (exception handling & input validation)",
    ],
    tech: ["Spring Boot", "PostgreSQL", "Docker", "GitHub Actions", "JUnit 5"],
    links: [
      { label: "Swagger Docs", url: "#" },
      { label: "Postman Collection", url: "#" },
      { label: "GitHub Repo", url: "#" },
    ],
    accent: "primary",
    categories: ["Software"],
    // cover:"https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Server Monitoring Dashboard",
    date: "Mar 2026",
    description:
      "Real-time monitoring platform that connects to remote Linux servers via SSH, collects CPU / memory / disk metrics, and visualizes them in a React dashboard.",
    highlights: [
      "Secure SSH connections via JSch",
      "Real-time metric fetching with a Spring Boot REST API",
      "React frontend with live-updating charts",
    ],
    tech: ["Spring Boot", "JSch", "React"],
    links: [
      { label: "GitHub Repo", url: "#" },
      { label: "YouTube Demo", url: "#" },
    ],
    accent: "accent",
    categories: ["Academic", "Software"],
    // cover:   "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70",
  },
];
