"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart, and secure payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "gradient-1",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A real-time collaborative task management application that allows teams to organize, track, and complete projects efficiently with live updates and notifications.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "gradient-2",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization and analytics platform",
    longDescription:
      "An interactive analytics dashboard that provides insights through beautiful charts and graphs, with real-time data updates and customizable reports.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    image: "gradient-3",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const gradientClasses = {
  "gradient-1": "from-blue-500 to-purple-600",
  "gradient-2": "from-green-500 to-teal-600",
  "gradient-3": "from-orange-500 to-red-600",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            A selection of projects I&apos;ve worked on, showcasing my skills and experience
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${gradientClasses[project.image as keyof typeof gradientClasses]} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
