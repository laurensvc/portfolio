export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "01",
    company: "Company One",
    role: "Senior Software Engineer",
    period: "2022 — Heden",
    type: "Volledige baan",
    description:
      "Leidinggeven aan frontend architectuur en design systems voor een fintech platform dat miljoenen gebruikers bedient.",
    achievements: [
      "Architectuur ontworpen voor een component bibliotheek gebruikt door 5 productteams",
      "Bundle grootte met 40% verminderd door code splitting strategieën",
      "4 junior ontwikkelaars begeleid naar senior posities",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
  },
  {
    id: "02",
    company: "Company Two",
    role: "Full Stack Developer",
    period: "2020 — 2022",
    type: "Volledige baan",
    description: "Schaalbare web applicaties en API's gebouwd voor een enterprise SaaS product.",
    achievements: [
      "Real-time samenwerkingsfuncties ontwikkeld met WebSockets",
      "CI/CD pipelines geïmplementeerd die deployment tijd met 60% verminderden",
      "Migratie geleid van monolith naar microservices architectuur",
    ],
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: "03",
    company: "Agency Name",
    role: "Frontend Developer",
    period: "2018 — 2020",
    type: "Volledige baan",
    description: "Op maat gemaakte digitale ervaringen gecreëerd voor bekende merken en startups.",
    achievements: [
      "30+ klantprojecten op tijd en binnen budget afgeleverd",
      "2 industrie awards gewonnen voor interactieve web ervaringen",
      "Frontend best practices en documentatie opgezet",
    ],
    technologies: ["JavaScript", "React", "GSAP", "Three.js", "Sass"],
  },
];
