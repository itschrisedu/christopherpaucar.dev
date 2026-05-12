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
    <section id="projects" ref={ref} className="relative bg-fog dark:bg-[#0a0a0a] overflow-hidden">

      <Container>
        <SectionContent>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-10 sm:mb-14">
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
