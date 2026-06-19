export type TimelineItem = {
  kind: "education" | "volunteer";
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const timeline: TimelineItem[] = [
  {
    kind: "volunteer",
    role: "Treasurer",
    org: "MBSTU Clean Club",
    period: "2024 – Present",
    bullets: [
      "Organized 20+ cleanliness drives across the campus and city",
      "Led planting of 100+ trees",
      "Managed fundraising and budget oversight",
    ],
  },
  {
    kind: "volunteer",
    role: "Vice President",
    org: "Children's Heaven, Tangail",
    period: "2022 – 2025",
    bullets: [
      "Coordinated 30+ community events for under-served children",
      "Drove fundraising initiatives and community outreach",
    ],
  },
  {
    kind: "volunteer",
    role: "Member",
    org: "BD Clean, Tangail",
    period: "2024 – 2025",
    bullets: ["Participated in 4 divisional cleanliness drives"],
  },
];

export const impactStats = [
  { value: "20+", label: "Cleanliness Drives" },
  { value: "100+", label: "Trees Planted" },
  { value: "30+", label: "Community Events" },
];
