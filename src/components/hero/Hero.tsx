"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.8, ease: EASE } }),
};

const globeConfig = {
  pointSize: 8, globeColor: "#062056", showAtmosphere: true, atmosphereColor: "#38bdf8",
  atmosphereAltitude: 0.2, emissive: "#062056", emissiveIntensity: 0.15, shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)", ambientLight: "#94a3b8",
  directionalLeftLight: "#e2e8f0", directionalTopLight: "#e2e8f0", pointLight: "#e2e8f0",
  arcTime: 1200, arcLength: 0.9, rings: 3, maxRings: 6,
  initialPosition: { lat: -1.2544, lng: -78.6226 }, autoRotate: true, autoRotateSpeed: 0.4,
};
const cc = ["#38bdf8", "#06b6d4", "#67e8f9", "#0ea5e9"];
const arcs = [
  { order: 1, startLat: -1.25, startLng: -78.62, endLat: 40.71, endLng: -74.01, arcAlt: 0.3, color: cc[0] },
  { order: 1, startLat: -1.25, startLng: -78.62, endLat: 51.51, endLng: -0.13, arcAlt: 0.4, color: cc[1] },
  { order: 2, startLat: -1.25, startLng: -78.62, endLat: 35.68, endLng: 139.65, arcAlt: 0.5, color: cc[2] },
  { order: 2, startLat: -1.25, startLng: -78.62, endLat: 48.86, endLng: 2.35, arcAlt: 0.35, color: cc[3] },
  { order: 3, startLat: -1.25, startLng: -78.62, endLat: -33.87, endLng: 151.21, arcAlt: 0.6, color: cc[0] },
  { order: 3, startLat: -1.25, startLng: -78.62, endLat: 52.52, endLng: 13.41, arcAlt: 0.35, color: cc[1] },
  { order: 4, startLat: -1.25, startLng: -78.62, endLat: 25.2, endLng: 55.27, arcAlt: 0.5, color: cc[2] },
  { order: 4, startLat: -1.25, startLng: -78.62, endLat: 28.61, endLng: 77.21, arcAlt: 0.45, color: cc[3] },
  { order: 5, startLat: -1.25, startLng: -78.62, endLat: -22.91, endLng: -43.17, arcAlt: 0.2, color: cc[0] },
  { order: 5, startLat: -1.25, startLng: -78.62, endLat: 34.05, endLng: -118.24, arcAlt: 0.15, color: cc[1] },
  { order: 6, startLat: -1.25, startLng: -78.62, endLat: 19.43, endLng: -99.13, arcAlt: 0.2, color: cc[2] },
  { order: 6, startLat: -1.25, startLng: -78.62, endLat: -34.60, endLng: -58.38, arcAlt: 0.25, color: cc[3] },
  { order: 7, startLat: -1.25, startLng: -78.62, endLat: 4.71, endLng: -74.07, arcAlt: 0.1, color: cc[0] },
  { order: 7, startLat: -1.25, startLng: -78.62, endLat: -12.05, endLng: -77.04, arcAlt: 0.12, color: cc[1] },
  { order: 8, startLat: -1.25, startLng: -78.62, endLat: -33.45, endLng: -70.67, arcAlt: 0.22, color: cc[2] },
  { order: 9, startLat: 40.71, startLng: -74.01, endLat: 51.51, endLng: -0.13, arcAlt: 0.2, color: cc[3] },
  { order: 9, startLat: 51.51, startLng: -0.13, endLat: 1.35, endLng: 103.82, arcAlt: 0.35, color: cc[0] },
  { order: 10, startLat: 48.86, startLng: 2.35, endLat: 35.68, endLng: 139.65, arcAlt: 0.4, color: cc[1] },
  { order: 10, startLat: 34.05, startLng: -118.24, endLat: 37.57, endLng: 126.98, arcAlt: 0.45, color: cc[2] },
  { order: 11, startLat: 1.35, startLng: 103.82, endLat: -33.87, endLng: 151.21, arcAlt: 0.15, color: cc[3] },
  { order: 11, startLat: 25.2, startLng: 55.27, endLat: 28.61, endLng: 77.21, arcAlt: 0.1, color: cc[0] },
];

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0b0b0b]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="hidden dark:block">
          <StarsBackground starDensity={0.0003} twinkleProbability={0.8} minTwinkleSpeed={0.3} maxTwinkleSpeed={0.8} />
          <ShootingStars minSpeed={15} maxSpeed={35} minDelay={1500} maxDelay={3500} starColor="#38bdf8" trailColor="#0ea5e9" starWidth={15} starHeight={2} />
          <ShootingStars minSpeed={10} maxSpeed={25} minDelay={2500} maxDelay={5000} starColor="#67e8f9" trailColor="#06b6d4" starWidth={12} starHeight={1} />
        </div>
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #d4d4d4 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-5%] left-[5%] w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/80 dark:from-[#0b0b0b]/80 to-transparent z-[1]" />
      </div>

      {/* Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="absolute bottom-[-20%] right-[-12%] w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] pointer-events-none hidden sm:block"
      >
        <World data={arcs} globeConfig={globeConfig} />
      </motion.div>

      {/* Content — centered with grid layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-32 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <span className="text-[13px] font-medium text-secondary tracking-wide">{t.hero.badge[locale]}</span>
              </span>
            </motion.div>

            {/* Photo + Name */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden ring-[3px] ring-accent/40 ring-offset-4 ring-offset-white dark:ring-offset-[#0b0b0b] shadow-2xl shadow-black/10">
                  <Image src="/assets/icons/hero1.svg" alt="Christopher Paucar" width={104} height={104} className="h-full w-full object-cover" priority />
                </div>
                <span className="absolute -bottom-1 -right-1 block h-5 w-5 rounded-full bg-success ring-[3px] ring-white dark:ring-[#0b0b0b]" />
              </div>
              <div>
                <p className="text-[12px] font-mono font-bold text-accent tracking-[0.2em] uppercase mb-1.5">{t.hero.role[locale]}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
                  Christopher<br />
                  <span className="text-secondary">Paucar</span>
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-xl sm:text-2xl font-semibold text-primary/90 leading-snug max-w-lg whitespace-pre-line">
              {t.hero.title[locale]}
            </motion.h2>

            {/* Description */}
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="text-[15px] text-secondary leading-relaxed max-w-lg">
              {t.hero.description[locale]}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contact" className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-2xl bg-accent px-9 text-sm font-bold text-[#0b0b0b] shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5">
                {t.hero.cta[locale]}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#projects" className="inline-flex h-[52px] items-center justify-center rounded-2xl border-2 border-border dark:border-white/15 px-9 text-sm font-semibold text-primary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300">
                {t.hero.ctaSecondary[locale]}
              </a>
            </motion.div>

            {/* Stack */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-5 pt-6 border-t border-border/60 dark:border-white/8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted">Stack</span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {["Next.js", "TypeScript", "NestJS", "AI"].map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-lg text-[11px] font-mono font-semibold text-muted bg-surface dark:bg-white/5 border border-border dark:border-white/8 hover:border-accent/30 hover:text-accent transition-all duration-200">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — empty spacer for globe area on desktop */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-faint">Scroll</span>
          <div className="h-9 w-[22px] rounded-full border-2 border-border dark:border-white/15 flex items-start justify-center pt-1.5">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-2 w-2 rounded-full bg-accent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
