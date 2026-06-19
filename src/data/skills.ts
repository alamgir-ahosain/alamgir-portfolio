export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["C", "C++", "Java", "Go"] },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "React", "React Native", "JUnit 5"],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "Postman"],
  },
  { category: "Web", items: ["HTML", "CSS", "JSON", "Thymeleaf"] },
  { category: "Operating Systems", items: ["Linux (Fedora, Ubuntu)", "Windows"] },
  { category: "Technical Writing", items: ["LaTeX", "Overleaf"] },
];
