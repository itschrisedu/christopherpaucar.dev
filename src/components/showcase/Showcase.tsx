"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

const iconsBg = [
  "from-amber-500/20 to-orange-500/10",
  "from-blue-500/20 to-cyan-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-purple-500/20 to-pink-500/10",
];

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.showcase.items[locale];

  return (
    <section id="showcase" ref={ref} className="relative py-32 sm:py-40 bg-surface dark:bg-[#0e0e0e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-20 max-w-2xl">
          <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-5">{t.showcase.label[locale]}</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold tracking-[-0.03em] text-primary dark:text-white leading-[1.1]">{t.showcase.title[locale]}</h2>
          <p className="mt-6 text-base sm:text-[17px] text-secondary dark:text-gray-400 leading-relaxed max-w-lg">{t.showcase.subtitle[locale]}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#151515] border border-border dark:border-white/8
                         hover:border-accent/25 transition-all duration-500
                         hover:shadow-2xl hover:shadow-accent/[0.06] hover:-translate-y-1.5
                         overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/[0.06] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start gap-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${iconsBg[i]} flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <span className="text-xl">{["⚡", "🔗", "🚀", "✨"][i]}</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-[14px] text-secondary dark:text-gray-400 leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
