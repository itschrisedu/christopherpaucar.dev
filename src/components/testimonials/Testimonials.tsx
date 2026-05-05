"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();

  const items = t.testimonials.items[locale];

  return (
    <section id="testimonials" ref={ref} className="relative scroll-mt-28 py-20 sm:py-24 bg-surface dark:bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-20">
            <SectionHeading centered label={t.testimonials.label[locale]} title={t.testimonials.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE }}
                className="group min-h-[280px] p-8 sm:p-10 rounded-3xl bg-card dark:bg-[#151515] border border-border dark:border-white/10
                           hover:border-accent/25 transition-all duration-500
                           hover:shadow-2xl hover:shadow-accent/[0.06] hover:-translate-y-1.5
                           overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="text-5xl text-accent/30 mb-6 select-none leading-none font-serif">&ldquo;</div>
                  <p className="text-[14px] text-secondary leading-[1.8] mb-8">{item.text}</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border dark:border-white/8">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-orange/10 flex items-center justify-center text-[15px] font-bold text-accent shadow-sm">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-primary">{item.author}</p>
                      <p className="text-[12px] text-muted mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
