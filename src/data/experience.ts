export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "01",
    company: "Unbrace",
    role: "Frontend Developer",
    description:
      "Backoffice ontwikkeld voor CM, een bedrijf dat meerdere resellers helpt om office licenties te beheren.",
    achievements: [
      "Serverside rendering gebouwd voordat nextjs beschikbaar was",
      "Gebruikte Redux om de state te beheren en te synchroniseren",
      "Realtime dashboard zorgde voor een betere gebruikerservaring",
    ],
    technologies: ["React", "Typescript", "Axios", "Redux", "Storybook", "Figma"],
  },
  {
    id: "02",
    company: "Proximus",
    role: "Frontend Developer",
    description: "Platform ontwikkeld voor de Proximus API (ENCO.io).",
    achievements: [
      "Gebruikte GraphQL om de data te manipuleren en te synchroniseren",
      "Snelle development environment gebouwd met Storybook en Figma",
      "Wordt gebruikt door 1000+ developers van de Proximus API"
    ],
    technologies: ["React", "Typescript", "Axios", "Storybook", "Figma", "GraphQL"],
  },
  {
    id: "03",
    company: "Euronav / CMB.tech",
    role: "Frontend Developer / Designer",
    description: "Naval platform voor de tracking van containers / beheren van in en outbound cargo",
    achievements: [
      "Gebruikte Three.js om de 3D modellen te renderen en te animeren",
      "Realtime data visualisatie",
      "Container tracking zorgde voor 35% minder fouten in de logistieke planning",
      
    ],
    technologies: ["Typescript", "React", "GSAP", "Three.js", "Figma", "WebGL"],
  },
  {
    id: "04",
    company: "Agoria",
    role: "Frontend Developer / AI integration",
    description: "AI integratie voor de Agoria (ADA/NEO) chatbot",
    achievements: [
      "Gebruikte OpenAI API via Azure voor EU data privacy",
      "New AI model training pipeline gebouwd voor de chatbot",
      "Nieuw design implementatie voor gebruikerservaring"
    ],
    technologies: ["Typescript", "React", "OpenAI", "Azure", "Figma", "TailwindCSS", "Framer Motion"],
  },
  {
    id: "05",
    company: "Codit",
    role: "Frontend Developer / Designer",
    description: " Ontwikkeling en design van Customer support platform voor Codit",
    achievements: [
      "Customer tickets opvolgen en beheren gemakkelijker gemaakt",
      "Design system implementatie voor consistentie en eenvoudige onderhoud",
      "Automatisering van processen zorgde voor +-20% minder werklast voor de support team"
    ],
    technologies: ["Typescript", "React", "TailwindCSS", "Figma", "Zustand", "Shadcn/UI"],
  },
  {
    id: "06",
    company: "Productora",
    role: "Frontend Developer / Designer",
    description: " Ontwikkeling en design JIT metal fabrication platform voor Productora",
      achievements: [
        "Tanstack Query om de data te manipuleren en te synchroniseren",
        "Next.js om de pagina's te renderen en te optimizeren / SEO optimalisatie",
        "Multi tenant support gebouwd voor verschillende klanten",
    ],
    technologies: ["Typescript", "React", "TailwindCSS", "Figma", "Tanstack Query", "Shadcn/UI", "Next.js"],
  }
];
