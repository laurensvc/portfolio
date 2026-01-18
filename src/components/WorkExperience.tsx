"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Company Name",
    position: "Senior Software Engineer",
    location: "City, Country",
    period: "2022 - Present",
    description: [
      "Led development of scalable web applications serving 100K+ users",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Mentored junior developers and established coding best practices",
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    company: "Previous Company",
    position: "Full Stack Developer",
    location: "City, Country",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client-facing applications",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["Vue.js", "Python", "Django", "Docker", "MongoDB"],
  },
  {
    company: "Another Company",
    position: "Junior Developer",
    location: "City, Country",
    period: "2018 - 2020",
    description: [
      "Built responsive web applications using modern JavaScript frameworks",
      "Participated in code reviews and agile development processes",
      "Fixed bugs and implemented new features based on client requirements",
    ],
    technologies: ["JavaScript", "React", "Express.js", "MySQL"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
            Work Experience
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            My professional journey and the impact I&apos;ve made at each role
          </motion.p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                            <p className="text-lg font-semibold text-primary mb-2">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-foreground/70 flex items-start gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
