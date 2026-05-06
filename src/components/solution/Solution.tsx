"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;
const stepColors = [
  "from-red-500 to-rose-600",
  "from-amber-500 to-orange-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const steps = t.solution.steps[locale];

  return (
    <section id="solution" ref={ref} className="relative scroll-mt-28 py-20 sm:py-24 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-16 sm:mb-20">
            <SectionHeading label={t.solution.label[locale]} title={t.solution.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 relative">
            {/* Connector */}
            <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-border via-accent/20 to-border rounded-full" />

            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: EASE }}
                className="group relative min-h-[220px] p-7 sm:p-8 rounded-3xl bg-card dark:bg-[#141414] border border-border dark:border-white/10
                           hover:border-accent/30 transition-all duration-500
                           hover:shadow-2xl hover:shadow-accent/[0.08] hover:-translate-y-1.5"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stepColors[i]} text-white text-sm font-bold mb-5 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-primary dark:text-white mb-2.5 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-[14px] text-secondary dark:text-gray-400 leading-[1.75]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
