"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Over", href: "#about", number: "01" },
  { name: "Ervaring", href: "#experience", number: "02" },
  { name: "Vaardigheden", href: "#skills", number: "03" },
  { name: "Projecten", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Fixed nav bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(250, 249, 247, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="font-display font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span style={{ color: 'var(--accent)' }}>◆</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="group relative font-mono text-sm uppercase tracking-wider text-muted hover:text-ink transition-colors"
              >
                <span className="text-xs opacity-50 mr-2">{item.number}</span>
                {item.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--ink)', 
                color: 'var(--paper)' 
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'var(--accent)'
              }}
            >
              Laten we praten
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-ink"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-ink"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-ink"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'var(--paper)' }}
          >
            <div className="flex flex-col justify-center items-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-4xl font-display font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="font-mono text-sm text-muted mr-4">{item.number}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
