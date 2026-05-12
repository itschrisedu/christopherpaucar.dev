"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { SectionContent } from "@/components/layout/SectionContent";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { IconCloudDemo } from "@/components/about/IconCloudDemo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { locale } = useLanguage();

  const stats = [
    { value: "3+", label: locale === "en" ? "Years Experience" : "Años experiencia" },
    { value: "10+", label: locale === "en" ? "Projects Shipped" : "Proyectos lanzados" },
    { value: "6+", label: locale === "en" ? "Clients Served" : "Clientes atendidos" },
    { value: "100%", label: locale === "en" ? "Code Ownership" : "Propiedad del código" },
  ];

  return (
    <section id="about" ref={ref} className="relative bg-snow dark:bg-[#1c1c1e] overflow-hidden">

      <Container>
        <SectionContent>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="mb-10 sm:mb-14">
            <SectionHeading centered label={locale === "en" ? "About" : "Acerca"} title={locale === "en" ? "Focused on what matters — building software that works." : "Enfocado en lo que importa — construir software que funciona."} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Photo + Stats */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="space-y-6">
              <div className="relative overflow-hidden rounded-[28px] bg-fog dark:bg-[#0a0a0a]">
                <Image src="/assets/icons/hero1.svg" alt="Christopher Paucar" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
                    className="p-6 rounded-[28px] bg-fog dark:bg-[#0a0a0a]
                      hover:bg-silver-mist/40 dark:hover:bg-[#2c2c2e]
                      transition-all duration-344"
                  >
                    <p className="text-[1.75rem] sm:text-[2rem] font-bold text-azure tracking-tight">{s.value}</p>
                    <p className="mt-1 text-[11px] sm:text-[12px] font-semibold text-graphite dark:text-[var(--color-graphite)] uppercase tracking-wider">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: EASE }} className="space-y-8 lg:pt-4">
              <p className="text-[15px] leading-[1.8] text-graphite dark:text-[var(--color-graphite)]">
                {locale === "en"
                  ? "I'm a Full Stack Developer from Ecuador. I build web applications that solve real business problems using modern technologies. My approach: understand the problem, design clean architecture, execute with precision, deliver measurable results."
                  : "Soy Desarrollador Full Stack de Ecuador. Construyo aplicaciones web que resuelven problemas reales de negocio con tecnologías modernas. Mi enfoque: entender el problema, diseñar arquitectura limpia, ejecutar con precisión, entregar resultados medibles."}
              </p>

              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-azure mb-6">
                  {locale === "en" ? "Tech stack" : "Tecnologías"}
                </h3>
                <IconCloudDemo />
              </div>

              <div className="h-px bg-silver-mist dark:bg-[#38383a]" />

              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-azure mb-6">{locale === "en" ? "Experience" : "Experiencia"}</h3>
                <div className="p-7 rounded-[28px] bg-fog dark:bg-[#0a0a0a]
                  hover:bg-silver-mist/40 dark:hover:bg-[#2c2c2e]
                  transition-all duration-344"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-[16px] font-bold text-ink dark:text-[var(--color-ink)]">Full Stack Developer</h4>
                      <p className="text-[14px] text-azure font-semibold mt-0.5">Freelance</p>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-azure/70 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-azure/8">
                      2023 — {locale === "en" ? "Present" : "Actual"}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] text-graphite dark:text-[var(--color-graphite)] leading-[1.75]">{locale === "en" ? "Building scalable web apps for clients across industries. Focus on conversion and performance." : "Construyendo apps web escalables para clientes de diversas industrias. Enfoque en conversión y rendimiento."}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContent>
      </Container>
    </section>
  );
}
