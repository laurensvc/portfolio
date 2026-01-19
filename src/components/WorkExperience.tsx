"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "01",
    company: "Company One",
    role: "Senior Software Engineer",
    period: "2022 — Heden",
    type: "Volledige baan",
    description:
      "Leading frontend architecture and design systems for a fintech platform serving millions of users.",
    achievements: [
      "Architected a component library used across 5 product teams",
      "Reduced bundle size by 40% through code splitting strategies",
      "Mentored 4 junior developers to senior positions",
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

export const WorkExperience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string>("01");
  const activeExperience = experiences.find((e) => e.id === activeExp);

  return (
    <section
      id="experience"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-stone relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            var(--ink),
            var(--ink) 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-muted tracking-widest">02</span>
            <div className="w-12 h-px bg-muted" />
            <span className="font-mono text-sm text-muted tracking-widest uppercase">Ervaring</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Waar ik heb
            <span style={{ color: "var(--accent)" }}> gewerkt</span>
          </h2>
        </motion.div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Company list */}
          <div className="lg:col-span-5">
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-300 group ${
                    activeExp === exp.id
                      ? "border-accent bg-paper"
                      : "border-transparent hover:border-muted hover:bg-paper/50"
                  }`}
                  style={{
                    borderColor: activeExp === exp.id ? "var(--accent)" : undefined,
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs text-muted">{exp.id}</span>
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                  </div>
                  <h3
                    className={`text-xl font-display font-bold mb-1 transition-colors ${
                      activeExp === exp.id ? "text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {exp.company}
                  </h3>
                  <p className="font-mono text-sm text-muted">{exp.role}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Details panel */}
          <motion.div
            className="lg:col-span-7 bg-paper p-8 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {activeExperience && (
              <motion.div
                key={activeExperience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 font-mono text-xs uppercase"
                    style={{ backgroundColor: "var(--accent)", color: "var(--paper)" }}
                  >
                    {activeExperience.type}
                  </span>
                  <span className="font-mono text-sm text-muted">{activeExperience.period}</span>
                </div>

                <h3 className="text-3xl font-display font-bold mb-2">{activeExperience.role}</h3>
                <p className="text-xl text-muted mb-6">@ {activeExperience.company}</p>

                <p className="text-muted leading-relaxed mb-8">{activeExperience.description}</p>

                <div className="mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                    Belangrijkste Prestaties
                  </h4>
                  <ul className="space-y-3">
                    {activeExperience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span style={{ color: "var(--accent)" }}>→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                    Technologieën
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 font-mono text-xs border transition-colors hover:border-accent"
                        style={{ borderColor: "var(--stone)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
