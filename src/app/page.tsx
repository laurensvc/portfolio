"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="flex items-center justify-center min-h-screen px-4"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome
            </span>
          </h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
          >
            I&apos;m a passionate developer creating beautiful digital experiences
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-secondary rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Amazing project showcasing modern web development practices
                </p>
                <button className="text-primary font-semibold hover:underline">
                  View Project →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I&apos;m a full-stack developer with expertise in modern web technologies. I love building
            interactive and performant web applications that solve real-world problems. When I&apos;m not
            coding, you can find me exploring new technologies or contributing to open source.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect</h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
