"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;
const iconsBg = [
  "from-amber-500/20 to-orange-500/10",
  "from-blue-500/20 to-cyan-500/10",
  "from-purple-500/20 to-pink-500/10",
  "from-emerald-500/20 to-teal-500/10",
];

export default function Differential() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.differential.items[locale];

  return (
    <section id="differential" ref={ref} className="relative scroll-mt-28 py-20 sm:py-24 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <Container className="relative">
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-20">
            <SectionHeading centered label={t.differential.label[locale]} title={t.differential.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
                className="group relative min-h-[240px] p-8 rounded-3xl bg-card dark:bg-[#151515] border border-border dark:border-white/10
                           hover:border-accent/25 transition-all duration-500
                           hover:shadow-2xl hover:shadow-accent/[0.06] hover:-translate-y-1.5 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className={`flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${iconsBg[i]} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <span className="text-2xl">{["🎯", "🔧", "💡", "📐"][i]}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-[13px] text-secondary dark:text-gray-400 leading-[1.75]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
