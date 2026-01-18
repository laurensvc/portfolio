"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "hover:text-red-500" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-600" },
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername", color: "hover:text-gray-800 dark:hover:text-gray-200" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
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
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            I&apos;m always open to discussing new opportunities, interesting projects, or just
            having a chat about technology. Feel free to reach out!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all ${social.color}`}
              >
                <social.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
            <p className="text-foreground/70 mb-6">
              Prefer email? Drop me a line at{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-primary hover:underline font-semibold"
              >
                your.email@example.com
              </a>
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/50"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
