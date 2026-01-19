"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { roles } from "@/data/hero";

export const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-paper">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--ink) 1px, transparent 1px),
            linear-gradient(90deg, var(--ink) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-24 h-24 rounded-full"
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-16 h-16"
        style={{ backgroundColor: "var(--highlight)", opacity: 0.15 }}
        animate={{
          rotate: [0, 90, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8">
        {/* Top bar */}
        <motion.div
          className="flex justify-between items-center font-mono text-sm text-muted"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>PORTFOLIO © {new Date().getFullYear()}</span>
          <span>{time}</span>
        </motion.div>

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Eyebrow */}
            <motion.p
              className="font-mono text-sm md:text-base text-muted mb-6 tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block w-12 h-px bg-muted mr-4 align-middle" />
              Hallo, ik ben
            </motion.p>

            {/* Name - Large display */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-extrabold leading-[0.85] tracking-tight"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                Laurens
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-extrabold leading-[0.85] tracking-tight flex items-baseline gap-4"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="text-accent">VCWORKS</span>
              </motion.h1>
            </div>

            {/* Role switcher */}
            <motion.div
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className="font-mono text-muted text-sm">Ik ben een</span>
              <div className="relative h-10 overflow-hidden">
                <motion.div
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-display font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {roles[currentRole]}
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-xl text-lg md:text-xl text-muted leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ik creëer digitale ervaringen die
              <span className="text-ink font-medium"> gedurfde esthetiek </span>
              combineren met
              <span className="text-ink font-medium"> vlekkeloze functionaliteit</span>. Gevestigd
              in Schilde.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 font-mono text-sm uppercase tracking-wider overflow-hidden"
                style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Bekijk Werk</span>
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: "var(--accent)" }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 font-mono text-sm uppercase tracking-wider border-2 transition-colors duration-300"
                style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
                whileHover={{
                  backgroundColor: "var(--ink)",
                  color: "var(--paper)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Laten we praten
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex justify-between items-center text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex gap-6 font-mono text-muted">
            <a href="#" className="hover:text-accent transition-colors">
              GH
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              LI
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              TW
            </a>
          </div>
          <motion.div
            className="hidden md:flex items-center gap-2 font-mono text-muted cursor-pointer"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>SCROLLEN</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-90">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
