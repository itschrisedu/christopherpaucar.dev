"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.8, ease: EASE } }),
};

const globeConfig = {
  pointSize: 4, globeColor: "#d2d2d7", showAtmosphere: true, atmosphereColor: "#0071e3",
  atmosphereAltitude: 0.15, emissive: "#e8e8ed", emissiveIntensity: 0.08, shininess: 0.9,
  polygonColor: "rgba(0,0,0,0.15)", ambientLight: "#f5f5f7",
  directionalLeftLight: "#e8e8ed", directionalTopLight: "#ffffff", pointLight: "#ffffff",
  arcTime: 1200, arcLength: 0.9, rings: 3, maxRings: 6,
  initialPosition: { lat: -1.2544, lng: -78.6226 }, autoRotate: true, autoRotateSpeed: 0.4,
};
const cc = ["#0071e3", "#0066cc", "#5ac8fa", "#007aff"];
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
    <section id="hero" className="relative min-h-[100vh] overflow-hidden bg-fog dark:bg-[#0a0a0a]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.3] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d2d2d7 0.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Globe — subtle decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.4, scale: 0.85 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] pointer-events-none hidden sm:block"
      >
        <World data={arcs} globeConfig={globeConfig} />
      </motion.div>

      {/* Content — Apple centered-stack hero */}
      <div className="relative z-10 flex min-h-[100vh] items-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 py-20">
            {/* Availability badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full
                bg-snow/80 dark:bg-[#1c1c1e]/80 backdrop-blur-sm
                border border-silver-mist/60 dark:border-[#38383a]
                text-[13px] font-normal text-graphite dark:text-[var(--color-graphite)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34c759]" />
                </span>
                <span>{t.hero.badge[locale]}</span>
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[14px] font-semibold tracking-[0.1em] uppercase text-azure mb-4"
            >
              {t.hero.role[locale]}
            </motion.p>

            {/* Display headline — Apple 80px weight 700 */}
            <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold tracking-[-0.03em] text-ink dark:text-[var(--color-ink)] leading-[1.04] mb-6"
            >
              Christopher
              <br />
              <span className="text-ink/70 dark:text-[var(--color-ink)]/70">Paucar</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2 custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] font-semibold text-ink dark:text-[var(--color-ink)] leading-snug max-w-2xl lg:max-w-none whitespace-pre-line mb-4"
            >
              {t.hero.title[locale]}
            </motion.h2>

            {/* Description */}
            <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[15px] sm:text-[17px] font-normal text-graphite dark:text-[var(--color-graphite)] leading-[1.47] tracking-[-0.1px] max-w-xl lg:max-w-2xl mb-8"
            >
              {t.hero.description[locale]}
            </motion.p>

            {/* CTA buttons */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-4 justify-center lg:justify-start">
              {/* Primary — Dark pill */}
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                  bg-obsidian dark:bg-snow text-snow dark:text-obsidian
                  text-[15px] font-normal
                  hover:scale-[1.02] transition-transform duration-200"
              >
                {t.hero.cta[locale]}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {/* Secondary — Ghost text link */}
              <a href="#projects"
                className="text-[15px] font-normal text-cobalt-link dark:text-azure hover:underline underline-offset-4 transition-all duration-200"
              >
                {t.hero.ctaSecondary[locale]}
              </a>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-graphite/60 dark:text-[var(--color-graphite)]/60">Scroll</span>
          <div className="h-9 w-[22px] rounded-full border-2 border-silver-mist dark:border-[#38383a] flex items-start justify-center pt-1.5">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="h-2 w-2 rounded-full bg-azure" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
