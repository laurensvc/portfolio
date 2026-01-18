"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "CSS / Tailwind", level: 92, category: "Frontend" },
  { name: "Animation / Motion", level: 85, category: "Frontend" },
  { name: "Three.js / WebGL", level: 70, category: "Frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "GraphQL", level: 78, category: "Backend" },
  { name: "AWS / Cloud", level: 75, category: "Backend" },
  // Design
  { name: "Figma", level: 88, category: "Design" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Design Systems", level: 82, category: "Design" },
];

const toolMarquee = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", 
  "Figma", "Git", "GraphQL", "Redis", "Tailwind", "Prisma", "Vercel"
];

export const Skills: React.FC = () => {
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-paper relative overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-0 left-0 right-0 py-4 border-y overflow-hidden" style={{ borderColor: 'var(--stone)' }}>
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...toolMarquee, ...toolMarquee].map((tool, i) => (
            <span key={i} className="font-mono text-sm text-muted mx-8 flex items-center gap-2">
              <span style={{ color: 'var(--accent)' }}>◆</span>
              {tool}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-muted tracking-widest">03</span>
            <div className="w-12 h-px bg-muted" />
            <span className="font-mono text-sm text-muted tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            My
            <span style={{ color: 'var(--accent)' }}> toolkit</span>
          </h2>
        </motion.div>

        {/* Skills grid by category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span 
                  className="w-3 h-3"
                  style={{ 
                    backgroundColor: catIndex === 0 ? 'var(--accent)' : 
                                    catIndex === 1 ? 'var(--highlight)' : 'var(--ink)'
                  }}
                />
                <h3 className="font-display font-bold text-xl">{category}</h3>
              </div>

              <div className="space-y-6">
                {skills.filter(s => s.category === category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-stone overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ 
                          backgroundColor: catIndex === 0 ? 'var(--accent)' : 
                                          catIndex === 1 ? 'var(--highlight)' : 'var(--ink)'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mt-24 pt-16 border-t text-center"
          style={{ borderColor: 'var(--stone)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-display font-medium max-w-3xl mx-auto leading-relaxed">
            &ldquo;I believe in choosing the
            <span style={{ color: 'var(--accent)' }}> right tool </span>
            for the job—not just the trendy one.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
