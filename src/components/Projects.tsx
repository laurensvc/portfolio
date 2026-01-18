"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
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

const projects: Project[] = [
  {
    id: "01",
    title: "Fintech Dashboard",
    category: "Web Application",
    year: "2024",
    description: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights for institutional investors.",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "/projects/project1.jpg",
    color: "#ff4d00",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "02",
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2023",
    description: "Headless commerce solution with custom CMS, payment integration, and inventory management serving 100K+ monthly users.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/projects/project2.jpg",
    color: "#00d4aa",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "03",
    title: "Design System",
    category: "Component Library",
    year: "2023",
    description: "Enterprise-grade design system with 50+ components, comprehensive documentation, and Figma integration used across multiple product teams.",
    technologies: ["React", "Storybook", "TypeScript", "Radix UI"],
    image: "/projects/project3.jpg",
    color: "#0a0a0a",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "04",
    title: "AI Content Studio",
    category: "SaaS Product",
    year: "2024",
    description: "AI-powered content generation and management platform with collaborative editing, version control, and publishing workflows.",
    technologies: ["Next.js", "OpenAI", "Prisma", "Redis"],
    image: "/projects/project4.jpg",
    color: "#ff4d00",
    liveUrl: "#"
  }
];

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink relative overflow-hidden">
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
            <span className="font-mono text-sm text-paper/50 tracking-widest">04</span>
            <div className="w-12 h-px bg-paper/30" />
            <span className="font-mono text-sm text-paper/50 tracking-widest uppercase">Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-paper">
            Selected
            <span style={{ color: 'var(--accent)' }}> projects</span>
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a 
                href={project.liveUrl}
                className="block py-10 border-t border-paper/10 transition-colors hover:border-paper/30"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="col-span-1 hidden lg:block">
                    <span className="font-mono text-sm text-paper/30">{project.id}</span>
                  </div>

                  {/* Title */}
                  <div className="col-span-12 lg:col-span-5">
                    <motion.h3 
                      className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-paper transition-colors"
                      style={{ 
                        color: hoveredProject === project.id ? project.color : undefined 
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Category & Year */}
                  <div className="col-span-6 lg:col-span-3">
                    <span className="font-mono text-sm text-paper/50 block">{project.category}</span>
                    <span className="font-mono text-sm text-paper/30">{project.year}</span>
                  </div>

                  {/* Technologies */}
                  <div className="col-span-6 lg:col-span-2 text-right lg:text-left">
                    <div className="flex flex-wrap gap-2 justify-end lg:justify-start">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span 
                          key={tech}
                          className="font-mono text-xs text-paper/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 lg:col-span-1 hidden lg:flex justify-end">
                    <motion.div
                      animate={{ x: hoveredProject === project.id ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        className="text-paper/50 group-hover:text-paper transition-colors"
                      >
                        <path 
                          d="M7 17L17 7M17 7H7M17 7V17" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Expandable description */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: hoveredProject === project.id ? "auto" : 0,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-2">
                      <p className="text-paper/60 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4 flex gap-4 mt-4 lg:mt-0 lg:justify-end">
                      {project.liveUrl && (
                        <span className="font-mono text-xs text-paper/50 uppercase tracking-wider hover:text-accent transition-colors">
                          View Live →
                        </span>
                      )}
                      {project.githubUrl && (
                        <span className="font-mono text-xs text-paper/50 uppercase tracking-wider hover:text-accent transition-colors">
                          Source →
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* More work CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 font-mono text-sm text-paper/50 uppercase tracking-wider hover:text-accent transition-colors"
            whileHover={{ x: 10 }}
          >
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
