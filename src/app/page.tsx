"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import TerminalIntro from "@/components/terminal/TerminalIntro";
import Hero from "@/components/hero/Hero";
import { prefetchHeroGlobe } from "@/lib/prefetch-hero-globe";

/* ── Lazy-loaded sections ────────────────────────────────────────────
   These components are NOT included in the initial JS bundle.
   They load on-demand when React renders them, which happens
   as the user scrolls past the Hero.                                */
const HowIWork      = dynamic(() => import("@/components/howitworks/HowIWork"), { ssr: false });
const Projects      = dynamic(() => import("@/components/projects/Projects"), { ssr: false });
const About         = dynamic(() => import("@/components/about/About"), { ssr: false });
const Differential  = dynamic(() => import("@/components/differential/Differential"), { ssr: false });
const Testimonials  = dynamic(() => import("@/components/testimonials/Testimonials"), { ssr: false });
const FAQ           = dynamic(() => import("@/components/faq/FAQ"), { ssr: false });
const Pricing       = dynamic(() => import("@/components/pricing/Pricing"), { ssr: false });
const Contact       = dynamic(() => import("@/components/contact/Contact"), { ssr: false });
const Footer        = dynamic(() => import("@/components/footer/Footer"), { ssr: false });

type Phase = "terminal" | "portfolio";
const EASE = [0.16, 1, 0.3, 1] as const;

/* ── Viewport-aware lazy wrapper ─────────────────────────────────────
   Only mounts the child component once the wrapper enters the viewport.
   Uses IntersectionObserver with a 200px rootMargin to start loading
   slightly before the user reaches the section.                      */
function LazySection({ children, fallbackHeight = "50vh" }: { children: React.ReactNode; fallbackHeight?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  if (isVisible) return <>{children}</>;
  return <div ref={setRef} style={{ minHeight: fallbackHeight }} />;
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>("terminal");
  const done = useCallback(() => setPhase("portfolio"), []);

  /* Preload globe JS while the user watches the terminal (~5–15s window) */
  useEffect(() => {
    prefetchHeroGlobe();
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape" && phase === "terminal") done(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [phase, done]);

  return (
    <main className="relative w-full min-h-screen bg-fog dark:bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {phase === "terminal" && (
          <motion.div key="terminal" exit={{ opacity: 0, y: -40, filter: "blur(8px)", transition: { duration: 0.6, ease: EASE } }}>
            <TerminalIntro onComplete={done} />
          </motion.div>
        )}
        {phase === "portfolio" && (
          <motion.div key="portfolio" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.1 } }}>
            {/* Hero loads immediately — it's the first thing the user sees */}
            <Hero />

            {/* Everything below loads lazily as the user scrolls */}
            <div className="relative flex w-full flex-col">
              <LazySection fallbackHeight="80vh">
                <HowIWork />
              </LazySection>
              <LazySection fallbackHeight="80vh">
                <Projects />
              </LazySection>
              <LazySection fallbackHeight="60vh">
                <About />
              </LazySection>
              <LazySection fallbackHeight="60vh">
                <Differential />
              </LazySection>
              <LazySection fallbackHeight="60vh">
                <Testimonials />
              </LazySection>
              <LazySection fallbackHeight="40vh">
                <FAQ />
              </LazySection>
              <LazySection fallbackHeight="60vh">
                <Pricing />
              </LazySection>
              <LazySection fallbackHeight="60vh">
                <Contact />
              </LazySection>
            </div>
            <LazySection fallbackHeight="20vh">
              <Footer />
            </LazySection>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
