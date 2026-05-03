"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.faq.items[locale];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="relative py-32 sm:py-40 bg-surface dark:bg-[#0e0e0e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-16 text-center">
          <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-5">{t.faq.label[locale]}</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold tracking-[-0.03em] text-primary leading-[1.1]">{t.faq.title[locale]}</h2>
        </motion.div>

        <div className="space-y-3.5">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-6 text-left p-7 rounded-2xl border transition-all duration-400 cursor-pointer
                  ${open === i
                    ? "bg-white dark:bg-[#151515] border-accent/25 shadow-xl shadow-accent/[0.05]"
                    : "bg-white dark:bg-[#151515] border-border dark:border-white/8 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.03]"
                  }`}
              >
                <span className="text-[15px] font-bold text-primary">{item.q}</span>
                <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                  className={`flex items-center justify-center h-9 w-9 rounded-xl text-lg flex-shrink-0 font-bold transition-colors duration-300
                    ${open === i ? "bg-accent text-[#0b0b0b]" : "bg-accent/10 text-accent"}`}
                >+</motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                    <div className="px-7 pb-7 pt-4">
                      <p className="text-[14px] text-secondary leading-[1.8]">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
