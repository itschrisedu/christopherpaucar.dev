"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const icons = ["🎯", "🔧", "💡", "📐"];

export default function Differential() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.differential.items[locale];

  return (
    <section id="differential" ref={ref} className="relative bg-fog dark:bg-[#0a0a0a] overflow-hidden">

      <Container className="relative">
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-10 sm:mb-14">
            <SectionHeading centered label={t.differential.label[locale]} title={t.differential.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
                className={`group relative min-h-[260px] p-8 rounded-[28px] text-center overflow-hidden
                  transition-all duration-344
                  ${i === 0
                    ? "bg-obsidian dark:bg-snow text-snow dark:text-obsidian"
                    : "bg-snow dark:bg-[#1c1c1e] hover:bg-silver-mist/30 dark:hover:bg-[#2c2c2e]"
                  }`}
              >
                <div className="relative">
                  <div className={`flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-2xl
                    ${i === 0
                      ? "bg-snow/15 dark:bg-obsidian/15"
                      : "bg-azure/8"
                    }
                    group-hover:scale-105 transition-transform duration-344`}>
                    <span className="text-2xl">{icons[i]}</span>
                  </div>
                  <h3 className={`text-[16px] font-semibold mb-3 transition-colors duration-344
                    ${i === 0
                      ? "text-snow dark:text-obsidian"
                      : "text-ink dark:text-[var(--color-ink)] group-hover:text-azure"
                    }`}>
                    {item.title}
                  </h3>
                  <p className={`text-[13px] leading-[1.75]
                    ${i === 0
                      ? "text-snow/70 dark:text-obsidian/70"
                      : "text-graphite dark:text-[var(--color-graphite)]"
                    }`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
