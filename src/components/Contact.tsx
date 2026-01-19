"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", handle: "@yourusername", url: "https://github.com" },
  { name: "LinkedIn", handle: "/in/yourprofile", url: "https://linkedin.com" },
  { name: "Twitter", handle: "@yourhandle", url: "https://twitter.com" },
  { name: "Dribbble", handle: "@yourhandle", url: "https://dribbble.com" },
];

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-paper relative overflow-hidden"
    >
      {/* Large background text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-[15vw] font-display font-extrabold opacity-[0.02] pointer-events-none whitespace-nowrap leading-none"
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
      >
        Laten we praten
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
            <span className="font-mono text-sm text-muted tracking-widest">05</span>
            <div className="w-12 h-px bg-muted" />
            <span className="font-mono text-sm text-muted tracking-widest uppercase">Contact</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              Heb je een project in gedachten?
              <span style={{ color: "var(--accent)" }}>
                {" "}
                Laten we samen iets geweldigs creëren.
              </span>
            </h2>

            <p className="text-lg text-muted leading-relaxed mb-12">
              Ik ben momenteel beschikbaar voor freelance werk en full-time mogelijkheden. Als je
              een project hebt dat een combinatie van design thinking en technische expertise nodig
              heeft, hoor ik graag van je.
            </p>

            <motion.a
              href="mailto:your.email@example.com"
              className="group inline-flex items-center gap-4"
              whileHover={{ x: 10 }}
            >
              <span
                className="text-2xl md:text-3xl font-display font-bold transition-colors group-hover:text-accent"
                style={{ color: "var(--ink)" }}
              >
                your.email@example.com
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-muted group-hover:text-accent transition-colors"
              >
                <path
                  d="M9 23L23 9M23 9H9M23 9V23"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right - Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              Vind me op
            </h3>

            <div className="space-y-0">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-b transition-colors"
                  style={{ borderColor: "var(--stone)" }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div>
                    <span className="text-xl font-display font-bold group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                    <span className="font-mono text-sm text-muted ml-4">{link.handle}</span>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-muted group-hover:text-accent transition-colors"
                  >
                    <path
                      d="M5 15L15 5M15 5H5M15 5V15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              className="mt-12 p-6 border"
              style={{ borderColor: "var(--stone)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--highlight)" }}
                />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Momenteel beschikbaar
                </span>
              </div>
              <p className="text-sm text-muted">
                Open voor full-time posities en spannende freelance projecten. Reactietijd is
                meestal binnen 24 uur.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--stone)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-muted">
            © 2026 VCworks. Alle rechten voorbehouden.
          </div>
          <div className="font-mono text-sm text-muted">Ontworpen & Gebouwd met precisie</div>
        </motion.div>
      </div>
    </section>
  );
};
