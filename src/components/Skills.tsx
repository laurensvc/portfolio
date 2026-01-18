"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD", "MongoDB", "Linux"],
    color: "from-purple-500 to-pink-500",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4">
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
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            Technologies I work with to bring ideas to life
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3
                  className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
