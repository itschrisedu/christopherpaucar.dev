"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

interface WorkItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const Notification = ({ name, description, icon, color, time }: WorkItem) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-2xl p-3.5",
        "transition-all duration-344 ease hover:scale-[1.01]",
        "bg-snow dark:bg-[#2c2c2e] border border-silver-mist/50 dark:border-[#38383a]"
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden flex-1">
          <figcaption className="flex flex-col text-sm font-semibold text-ink dark:text-[var(--color-ink)] leading-tight">
            <span className="flex items-center gap-1">
              {name}
              <span className="text-xs font-normal text-graphite dark:text-[var(--color-graphite)]">• {time}</span>
            </span>
          </figcaption>
          <p className="text-xs font-normal text-graphite dark:text-[var(--color-graphite)] mt-0.5">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function HowIWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale, t } = useLanguage();
  const steps = t.solution.steps[locale];

  const workItems: WorkItem[] = [
    { name: "Nuevo evento", description: "Interfaz de usuario mágica", icon: "🔗", color: "#0071e3", time: "Hace 2 minutos" },
    { name: "Nuevo mensaje", description: "Interfaz de usuario mágica", icon: "💬", color: "#ff375f", time: "Hace 5 minutos" },
    { name: "El usuario se registró", description: "Interfaz de usuario mágica", icon: "👤", color: "#ff9f0a", time: "Hace 10 minutos" },
    { name: "Pago recibido", description: "Interfaz de usuario mágica", icon: "✈️", color: "#30d158", time: "Hace 15 minutos" },
  ];

  return (
    <section id="how-i-work" ref={ref} className="relative bg-snow dark:bg-[#1c1c1e] overflow-hidden">

      <Container>
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-10 sm:mb-14"
          >
            <SectionHeading label={t.solution.label[locale]} title={t.solution.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* LEFT SIDE - Animated List in Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="rounded-[28px] bg-fog dark:bg-[#0a0a0a] p-6 h-fit w-full max-w-md">
                <h3 className="text-[15px] font-semibold text-ink dark:text-[var(--color-ink)] mb-4">Últimos eventos</h3>
                <div className="relative">
                  <AnimatedList delay={2000}>
                    {workItems.map((item, idx) => (
                      <Notification key={idx} {...item} />
                    ))}
                  </AnimatedList>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-fog dark:from-[#0a0a0a]"></div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Step Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: EASE }}
                    className="group relative min-h-[200px] p-7 rounded-[28px]
                      bg-fog dark:bg-[#0a0a0a]
                      hover:bg-silver-mist/40 dark:hover:bg-[#2c2c2e]
                      transition-all duration-344"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-azure/10 text-azure text-sm font-bold mb-5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-[16px] font-semibold text-ink dark:text-[var(--color-ink)] mb-2.5 group-hover:text-azure transition-colors duration-344">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-graphite dark:text-[var(--color-graphite)] leading-[1.75]">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
