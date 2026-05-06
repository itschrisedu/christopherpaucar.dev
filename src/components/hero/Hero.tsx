"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

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
    <section id="hero" className="relative scroll-mt-28 min-h-screen overflow-hidden bg-white dark:bg-[#070707]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="hidden dark:block">
          <StarsBackground starDensity={0.0003} twinkleProbability={0.8} minTwinkleSpeed={0.3} maxTwinkleSpeed={0.8} />
          <ShootingStars minSpeed={15} maxSpeed={35} minDelay={1500} maxDelay={3500} starColor="#38bdf8" trailColor="#0ea5e9" starWidth={15} starHeight={2} />
          <ShootingStars minSpeed={10} maxSpeed={25} minDelay={2500} maxDelay={5000} starColor="#67e8f9" trailColor="#06b6d4" starWidth={12} starHeight={1} />
        </div>
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #d4d4d4 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-5%] left-[5%] w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/80 dark:from-[#0b0b0b]/80 to-transparent z-[1]" />
      </div>

      {/* Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 0.85 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="absolute bottom-[-20%] right-[-12%] w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] pointer-events-none hidden sm:block"
      >
        <World data={arcs} globeConfig={globeConfig} />
      </motion.div>

      {/* Content — centered hero layout */}
      <div className="relative z-10 flex min-h-screen items-center pt-28 pb-20 sm:pt-32 sm:pb-24">
        <Container>
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
            <div className="group/card relative flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border/80 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-8 sm:p-10 text-center backdrop-blur-md shadow-xl shadow-black/5 min-h-[520px]">
            {/* Badge (normal flow, at top) */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="w-full flex justify-start">
              <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-white/95 dark:bg-white/6 backdrop-blur-sm shadow-sm text-[13px] font-medium text-secondary dark:text-gray-400 tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <span>{t.hero.badge[locale]}</span>
              </span>
            </motion.div>

            {/* Photo + Name */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
              <div className="group relative flex-shrink-0 cursor-pointer">
                <div className="absolute inset-0 h-44 w-44 sm:h-56 sm:w-56 rounded-full ring-[4px] ring-accent/50 ring-offset-6 ring-offset-white dark:ring-offset-[#0b0b0b] shadow-2xl shadow-accent/20 dark:shadow-accent/10 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent" />
                <div className="relative h-44 w-44 sm:h-56 sm:w-56 overflow-visible">
                  <Image src="/assets/icons/hero1.svg" alt="Christopher Paucar" width={200} height={200} className="h-full w-full object-cover [clip-path:inset(0_0_0_0_round_0_0_999px_999px)] transition-transform duration-300 ease-out group-hover/card:-translate-y-2 group-hover/card:scale-110" priority />
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-[12px] font-mono font-bold text-accent tracking-[0.2em] uppercase mb-1.5">{t.hero.role[locale]}</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary dark:text-white leading-[1.02]">
                  Christopher<br />
                  <span className="text-primary/80 dark:text-white/80">Paucar</span>
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.h2 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-xl sm:text-2xl font-semibold text-primary dark:text-white leading-snug max-w-lg whitespace-pre-line text-left">
              {t.hero.title[locale]}
            </motion.h2>

            {/* Description */}
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" className="text-[15px] text-secondary dark:text-gray-400 leading-relaxed max-w-2xl">
              {t.hero.description[locale]}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mt-6">
              <Button asChild size="lg" className="group hover:-translate-y-0.5">
                <a href="#contact">
                {t.hero.cta[locale]}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#projects">
                {t.hero.ctaSecondary[locale]}
                </a>
              </Button>
            </motion.div>

            {/* Stack removed per request */}
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-faint dark:text-gray-500">Scroll</span>
          <div className="h-9 w-[22px] rounded-full border-2 border-border dark:border-white/15 flex items-start justify-center pt-1.5">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-2 w-2 rounded-full bg-accent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
