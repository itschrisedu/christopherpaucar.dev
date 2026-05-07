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

const stepColors = [
  "from-red-500 to-rose-600",
  "from-amber-500 to-orange-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
];

const Notification = ({ name, description, icon, color, time }: WorkItem) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl p-3 sm:p-3",
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_8px_16px_rgba(0,0,0,.05)]",
        "dark:bg-[#141414] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: color }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden flex-1">
          <figcaption className="flex flex-col text-sm font-bold dark:text-white leading-tight">
            <span className="flex items-center gap-1">
              {name}
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">• {time}</span>
            </span>
          </figcaption>
          <p className="text-xs font-normal text-gray-600 dark:text-white/60 mt-0.5">
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
    {
      name: "Nuevo evento",
      description: "Interfaz de usuario mágica",
      icon: "🔗",
      color: "#3B82F6",
      time: "Hace 2 minutos",
    },
    {
      name: "Nuevo mensaje",
      description: "Interfaz de usuario mágica",
      icon: "💬",
      color: "#EC4899",
      time: "Hace 5 minutos",
    },
    {
      name: "El usuario se registró",
      description: "Interfaz de usuario mágica",
      icon: "👤",
      color: "#F59E0B",
      time: "Hace 10 minutos",
    },
    {
      name: "Pago recibido",
      description: "Interfaz de usuario mágica",
      icon: "✈️",
      color: "#14B8A6",
      time: "Hace 15 minutos",
    },
  ];

  return (
    <section id="how-i-work" ref={ref} className="relative mt-0 py-0 sm:py-0 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-6 sm:mb-8"
          >
            <SectionHeading label={t.solution.label[locale]} title={t.solution.title[locale]} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE - Animated List in Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="rounded-3xl bg-card dark:bg-[#141414] border border-border dark:border-white/10 p-6 h-fit w-full max-w-md">
                <h3 className="text-base font-bold text-primary mb-4 dark:text-white">Últimos eventos</h3>
                <div className="relative">
                  <AnimatedList delay={2000}>
                    {workItems.map((item, idx) => (
                      <Notification key={idx} {...item} />
                    ))}
                  </AnimatedList>
                  <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t"></div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Original Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.13, ease: EASE }}
                    className="group relative min-h-[200px] p-6 sm:p-7 rounded-3xl bg-card dark:bg-[#141414] border border-border dark:border-white/10
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
            </motion.div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
