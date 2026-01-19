export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "CSS / Tailwind", level: 92, category: "Frontend" },
  { name: "Animatie / Motion", level: 85, category: "Frontend" },
  { name: "Three.js / WebGL", level: 70, category: "Frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "GraphQL", level: 78, category: "Backend" },
  { name: "AWS / Cloud", level: 75, category: "Backend" },
  // Design
  { name: "Figma", level: 88, category: "Ontwerp" },
  { name: "UI/UX Ontwerp", level: 85, category: "Ontwerp" },
  { name: "Design Systems", level: 82, category: "Ontwerp" },
];

export const toolMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
  "Git",
  "GraphQL",
  "Redis",
  "Tailwind",
  "Prisma",
  "Vercel",
];
