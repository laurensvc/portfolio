"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "99%", label: "Code Quality" },
];

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-paper relative overflow-hidden">
      {/* Large background text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-extrabold opacity-[0.02] pointer-events-none whitespace-nowrap"
        style={{ y }}
      >
        ABOUT ME
      </motion.div>

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
            <span className="font-mono text-sm text-muted tracking-widest">01</span>
            <div className="w-12 h-px bg-muted" />
            <span className="font-mono text-sm text-muted tracking-widest uppercase">About</span>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - Image/Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] bg-stone overflow-hidden group">
              {/* Placeholder for your photo */}
              <div 
                className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm"
                style={{ backgroundColor: 'var(--stone)' }}
              >
                [ YOUR PHOTO ]
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 -z-10"
                style={{ borderColor: 'var(--accent)' }}
              />
              <div 
                className="absolute top-4 left-4 w-8 h-8 border-2 border-ink opacity-20"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 px-6 py-4 font-mono text-xs uppercase tracking-wider"
              style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>Based in</div>
              <div className="text-lg font-display font-bold mt-1">Your City</div>
            </motion.div>
          </motion.div>

          {/* Right column - Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I create digital products that
              <span style={{ color: 'var(--accent)' }}> make an impact</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-muted leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I&apos;m a full-stack developer and designer with a passion for creating 
                exceptional digital experiences. My approach combines 
                <span className="text-ink font-medium"> technical expertise</span> with 
                <span className="text-ink font-medium"> creative vision</span> to build 
                products that truly resonate with users.
              </p>
              <p>
                With a background spanning startups to enterprise, I bring a unique 
                perspective to every project. I believe great software should be both 
                beautiful and functional—never compromising one for the other.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t"
              style={{ borderColor: 'var(--stone)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div 
                    className="text-3xl md:text-4xl font-display font-bold mb-1"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
