"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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
    <section id="about" ref={ref} className="relative py-24 sm:py-32 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo + Stats */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: EASE }} className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-border dark:border-white/8 shadow-2xl shadow-black/8 dark:shadow-black/30">
              <Image src="/assets/icons/hero1.svg" alt="Christopher Paucar" width={600} height={400} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
                  className="p-5 sm:p-6 rounded-2xl bg-surface dark:bg-[#151515] border border-border dark:border-white/8
                             hover:border-accent/25 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <p className="text-[1.75rem] sm:text-[2rem] font-bold text-accent tracking-tight">{s.value}</p>
                  <p className="mt-1 text-[11px] sm:text-[12px] font-semibold text-secondary uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: EASE }} className="space-y-8 lg:pt-4">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-4">{locale === "en" ? "About" : "Acerca"}</span>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] text-primary leading-[1.15] whitespace-pre-line">
                {locale === "en" ? "Focused on what matters —\nbuilding software that works." : "Enfocado en lo que importa —\nconstruir software que funciona."}
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-secondary">
              {locale === "en"
                ? "I'm a Full Stack Developer from Ecuador. I build web applications that solve real business problems using modern technologies. My approach: understand the problem, design clean architecture, execute with precision, deliver measurable results."
                : "Soy Desarrollador Full Stack de Ecuador. Construyo aplicaciones web que resuelven problemas reales de negocio con tecnologías modernas. Mi enfoque: entender el problema, diseñar arquitectura limpia, ejecutar con precisión, entregar resultados medibles."}
            </p>
            <div className="h-px bg-gradient-to-r from-border to-transparent" />
            <div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-6">{locale === "en" ? "Experience" : "Experiencia"}</h3>
              <div className="p-6 sm:p-7 rounded-2xl bg-surface dark:bg-[#151515] border border-border dark:border-white/8 hover:border-accent/25 transition-all duration-500">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[16px] font-bold text-primary">Full Stack Developer</h4>
                    <p className="text-[14px] text-accent font-semibold mt-0.5">Freelance</p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-accent/70 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-accent/8 border border-accent/15">
                    2023 — {locale === "en" ? "Present" : "Actual"}
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-secondary leading-[1.75]">{locale === "en" ? "Building scalable web apps for clients across industries. Focus on conversion and performance." : "Construyendo apps web escalables para clientes de diversas industrias. Enfoque en conversión y rendimiento."}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
