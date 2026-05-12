"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.faq.items[locale];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="relative bg-fog dark:bg-[#0a0a0a] overflow-hidden">

      <Container>
        <SectionContent>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-10 sm:mb-14">
              <SectionHeading centered label={t.faq.label[locale]} title={t.faq.title[locale]} />
            </motion.div>

            <div className="space-y-3">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}>
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className={`w-full flex items-center justify-between gap-6 text-left p-7 rounded-[28px] transition-all duration-344 cursor-pointer
                      ${open === i
                        ? "bg-snow dark:bg-[#1c1c1e]"
                        : "bg-snow dark:bg-[#1c1c1e] hover:bg-silver-mist/30 dark:hover:bg-[#2c2c2e]"
                      }`}
                  >
                    <span className="text-[15px] font-semibold text-ink dark:text-[var(--color-ink)]">{item.q}</span>
                    <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                      className={`flex items-center justify-center h-9 w-9 rounded-xl text-lg flex-shrink-0 font-bold transition-colors duration-344
                        ${open === i
                          ? "bg-azure text-snow"
                          : "bg-azure/8 text-azure"
                        }`}
                    >
                      +
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                        <div className="px-7 pb-7 pt-4">
                          <p className="text-[14px] text-graphite dark:text-[var(--color-graphite)] leading-[1.8]">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
