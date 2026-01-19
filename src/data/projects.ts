export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Fintech Dashboard",
    category: "Web Applicatie",
    year: "2024",
    description:
      "Een uitgebreid financieel analytics platform met real-time data visualisatie, portefeuillebeheer en AI-gestuurde inzichten voor institutionele beleggers.",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "/projects/project1.jpg",
    color: "#ff4d00",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "02",
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2023",
    description:
      "Headless commerce oplossing met aangepast CMS, betalingsintegratie en voorraadbeheer voor meer dan 100K maandelijkse gebruikers.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/projects/project2.jpg",
    color: "#00d4aa",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "03",
    title: "Design System",
    category: "Component Bibliotheek",
    year: "2023",
    description:
      "Enterprise-grade design system met 50+ componenten, uitgebreide documentatie en Figma integratie gebruikt door meerdere productteams.",
    technologies: ["React", "Storybook", "TypeScript", "Radix UI"],
    image: "/projects/project3.jpg",
    color: "#0a0a0a",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "04",
    title: "AI Content Studio",
    category: "SaaS Product",
    year: "2024",
    description:
      "AI-gestuurd content generatie- en beheerplatform met collaboratieve editing, versiebeheer en publicatieworkflows.",
    technologies: ["Next.js", "OpenAI", "Prisma", "Redis"],
    image: "/projects/project4.jpg",
    color: "#ff4d00",
    liveUrl: "#",
  },
];
