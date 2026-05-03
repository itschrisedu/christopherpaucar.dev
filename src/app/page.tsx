"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalIntro from "@/components/terminal/TerminalIntro";
import Hero from "@/components/hero/Hero";
import Showcase from "@/components/showcase/Showcase";
import Solution from "@/components/solution/Solution";
import Projects from "@/components/projects/Projects";
import Differential from "@/components/differential/Differential";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

type Phase = "terminal" | "portfolio";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [phase, setPhase] = useState<Phase>("terminal");
  const done = useCallback(() => setPhase("portfolio"), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape" && phase === "terminal") done(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [phase, done]);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {phase === "terminal" && (
          <motion.div key="terminal" exit={{ opacity: 0, y: -40, filter: "blur(8px)", transition: { duration: 0.6, ease: EASE } }}>
            <TerminalIntro onComplete={done} />
          </motion.div>
        )}
        {phase === "portfolio" && (
          <motion.div key="portfolio" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.1 } }}>
            <Hero />
            <Showcase />
            <Solution />
            <Projects />
            <Differential />
            <Testimonials />
            <About />
            <FAQ />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
