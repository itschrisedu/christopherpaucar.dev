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
    <section id="projects" ref={ref} className="relative py-32 sm:py-40 bg-surface dark:bg-[#0e0e0e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[40%] right-[-8%] w-[500px] h-[500px] bg-accent-orange/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-5">{t.projects.label[locale]}</span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold tracking-[-0.03em] text-primary leading-[1.1]">{t.projects.title[locale]}</h2>
          </div>
          <p className="text-[14px] text-secondary max-w-sm leading-relaxed">{t.projects.subtitle[locale]}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#151515] border border-border dark:border-white/8
                         cursor-pointer transition-all duration-500
                         hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/[0.06]
                         hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-accent-orange/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-accent/[0.07] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <span className="inline-flex items-center px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent bg-accent/8 border border-accent/15 mb-7">{p.type}</span>
                <h3 className="text-xl sm:text-[22px] font-bold text-primary mb-5 group-hover:text-accent transition-colors duration-300 tracking-[-0.01em]">{p.title}</h3>

                <div className="space-y-3.5 mb-7">
                  <p className="text-[14px] text-secondary leading-[1.65]"><span className="font-bold text-primary">{locale === "en" ? "Problem" : "Problema"}:</span> {p.problem}</p>
                  <p className="text-[14px] text-secondary leading-[1.65]"><span className="font-bold text-primary">{locale === "en" ? "Solution" : "Solución"}:</span> {p.solution}</p>
                  <p className="text-[14px] font-bold text-accent-orange leading-[1.65]">{locale === "en" ? "Result" : "Resultado"}: {p.result}</p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-lg text-[11px] font-mono font-semibold text-muted bg-surface dark:bg-white/5 border border-border dark:border-white/8">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
