"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Rocket } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project",
  },
  {
    icon: Coffee,
    title: "Collaboration",
    description: "Working closely with teams to deliver exceptional results",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
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
            About Me
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto"
          >
            Get to know more about who I am and what drives me
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m a passionate full-stack developer with a strong focus on creating
                exceptional digital experiences. With years of experience in modern web
                technologies, I specialize in building scalable, performant applications that
                solve real-world problems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in software development started with a curiosity about how things work
                on the web, and it has evolved into a career dedicated to crafting elegant
                solutions. I thrive in collaborative environments and enjoy mentoring others while
                continuously learning new technologies.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new frameworks, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-50"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
