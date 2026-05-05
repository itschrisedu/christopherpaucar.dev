"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.projects.items[locale];

  return (
    <section id="projects" ref={ref} className="relative scroll-mt-28 py-20 sm:py-24 bg-surface dark:bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[40%] right-[-8%] w-[500px] h-[500px] bg-accent-orange/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <SectionContent>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-16 sm:mb-20">
            <SectionHeading label={t.projects.label[locale]} title={t.projects.title[locale]} subtitle={t.projects.subtitle[locale]} />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {items.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}>
                <ProjectCard project={p} locale={locale} />
              </motion.div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
