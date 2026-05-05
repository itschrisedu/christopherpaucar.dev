"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.projects.items[locale];

  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 bg-surface dark:bg-[#0e0e0e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[40%] right-[-8%] w-[500px] h-[500px] bg-accent-orange/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-20 w-full">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-4">{t.projects.label[locale]}</span>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold tracking-[-0.03em] text-primary leading-[1.1]">{t.projects.title[locale]}</h2>
          </div>
          <p className="text-[14px] text-secondary max-w-sm leading-[1.7]">{t.projects.subtitle[locale]}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              className="group relative rounded-3xl bg-white dark:bg-[#151515] border border-border dark:border-white/8
                         cursor-pointer transition-all duration-500
                         hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/[0.06]
                         hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-accent-orange/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-accent/[0.07] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-8 sm:p-10">
                {/* Type badge */}
                <span className="inline-flex items-center px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent bg-accent/8 border border-accent/15 mb-6">{p.type}</span>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300 tracking-[-0.01em] leading-tight">{p.title}</h3>

                {/* Problem / Solution / Result */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-1 rounded-full bg-red-400/40 mt-1" />
                    <p className="text-[14px] text-secondary leading-[1.7]"><span className="font-bold text-primary">{locale === "en" ? "Problem" : "Problema"}:</span> {p.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-1 rounded-full bg-blue-400/40 mt-1" />
                    <p className="text-[14px] text-secondary leading-[1.7]"><span className="font-bold text-primary">{locale === "en" ? "Solution" : "Solución"}:</span> {p.solution}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-1 rounded-full bg-accent/60 mt-1" />
                    <p className="text-[14px] font-semibold text-accent-orange leading-[1.7]">{locale === "en" ? "Result" : "Resultado"}: {p.result}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-lg text-[11px] font-mono font-semibold text-muted bg-surface dark:bg-white/5 border border-border dark:border-white/8">{tag}</span>
                  ))}
                </div>

                {/* GitHub link */}
                {"github" in p && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2.5 text-[13px] font-semibold text-secondary hover:text-accent transition-colors duration-200 group/link"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="group-hover/link:underline underline-offset-4">{locale === "en" ? "View source code" : "Ver código fuente"}</span>
                    <svg className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
