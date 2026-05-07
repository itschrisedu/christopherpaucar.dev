"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const items = t.projects.items[locale];

  return (
    <section id="projects" ref={ref} className="relative -mt-24 py-8 sm:py-10 bg-surface dark:bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[40%] right-[-8%] w-[500px] h-[500px] bg-accent-orange/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <SectionContent>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-6 sm:mb-8">
            <SectionHeading label={t.projects.label[locale]} title={t.projects.title[locale]} subtitle={t.projects.subtitle[locale]} />
          </motion.div>

          {/* Infinite Scroll */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
            <div className="group w-full">
              <InfiniteMovingCards
                items={[]}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="max-w-full"
                itemClassName="w-[300px] sm:w-[400px] lg:w-[500px]"
              >
                {items.map((project) => (
                  <div key={project.title} className="w-[300px] sm:w-[400px] lg:w-[500px] h-[620px] sm:h-[650px] flex-shrink-0">
                    <ProjectCard project={project} locale={locale} />
                  </div>
                ))}
              </InfiniteMovingCards>
            </div>
          </motion.div>
        </SectionContent>
      </Container>
    </section>
  );
}
