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


  //________________________________ Software_____________________________
  {
    title: "Logistics Platform API",
    date: "",
    description:
    "A backend API platform for managing logistics operations (locations, storage, products, routes, demands).",
    highlights: [
      "Dockerized and deployed on Render",
      "CI/CD pipeline with GitHub Actions",
      "Tested with JUnit 5 (exception handling & input validation)",
    ],
    tech: ["Spring Boot", "PostgreSQL", "Docker", "GitHub Actions", "JUnit 5"],
    links: [
      // { label: "Swagger Docs", url: "#" },
      // { label: "Postman Collection", url: "#" },
      { label: "View on GitHub", url: "https://github.com/alamgir-ahosain/logistics-platform" },
    ],
    accent: "primary",
    categories: ["Software"],
    // cover:"https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Server Monitoring Dashboard",
    date: "",
    description:
      "Real-time monitoring platform that connects to remote Linux servers via SSH, collects CPU / memory / disk metrics, and visualizes them in a React dashboard.",
    highlights: [
      "Secure SSH connections via JSch",
      "Real-time metric fetching with a Spring Boot REST API",
      "React frontend with live-updating charts",
    ],
    tech: ["Spring Boot", "JSch", "React"],
    links: [
      { label: "View on GitHub", url: "https://github.com/alamgir-ahosain/network-monitoring-system" },
      // { label: "YouTube Demo", url: "#" },
    ],
    accent: "accent",
    categories: ["Software"],
    // cover:   "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70",
  },



  //_____________________________________________________Hardware ________________________________
      {
    title: "Humidity and Temperature Measurement",
    date: "",
    description:
      "Humidity and Temperature Measurement Using Arduino. ",
    highlights: [
      "Measures environmental conditions",
      "Displays real-time LCD readings",
    ],
    tech: ["Arduino Uno R3", "DHT11 Sensor"],
    links: [
      { label: "View on GitHub", url: "https://github.com/MBSTU-CSE18-Courses/CSE2116-Software-Development-Project" },
    ],
    accent: "accent",
    categories: ["Hardware"],
  },




  // ___________________________________________ Academic ____________________________________________________
  {
    title: "Courseworks",
    date: "",
    description:
      "Academic course and lab work.",
    highlights: [
      "MBSTU CSE Batch 18",
      "Session 2020-21",

    ],
    tech: ["Programming", "Computer Networking", "AI", "Computer Architecture,", "Software Development", "Graphics", "Security"],
    links: [
      { label: "View on GitHub", url: "https://github.com/MBSTU-CSE18-Courses" },
    ],
    accent: "accent",
    categories: ["Academic"],
  },


  // {
  //   title: "Learning Management System (LMS)",
  //   date: "",
  //   description:
  //     "LMS is a web platform that enables online learning and interaction between admins, teachers, and students.",
  //   highlights: [
  //     "RBAC System",
  //   ],
  //   tech: ["Spring Boot with Spring Security", "MySQL", "HTML, CSS, JavaScript, Bootstrap"],
  //   links: [
  //     { label: "View on GitHub", url: "https://github.com/alamgir-ahosain/Learning-Management-System" },
  //   ],
  //   accent: "accent",
  //   categories: ["Academic"],
  // },


  {
    title: "Dynamic PDF Generator",
    date: "",
    description:
      "PDF Template Designer is a C# application that allows users to fill templates with data and generate customized PDFs.",
    highlights: [
      "User-friendly interface for entering data.",
      "One-click PDF generation.",
      "Customizable PDF template design.",
    ],
    tech: ["C#"],
    links: [
      { label: "View on GitHub", url: "https://github.com/alamgir-ahosain/DynamicPDFGenerator" },
    ],
    accent: "accent",
    categories: ["Academic"],
  },

    {
    title: "Sports League System)",
    date: "",
    description:
      "Sports League System is a Laravel-based web app for managing teams, players, matches, scores, and standings.",
    highlights: [
      "User-friendly interface for entering data.",
      "One-click PDF generation.",
      "Customizable PDF template design.",
    ],
    tech: ["Laravel", "JavaScript", "HTML,CSS (Bootstrap)","MySQL"],
    links: [
      { label: "View on GitHub", url: "https://github.com/alamgir-ahosain/sports-league-system" },
    ],
    accent: "accent",
    categories: ["Academic"],
  },

  

];


