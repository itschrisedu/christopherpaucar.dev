"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "./ProjectCard";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type CaseStudyModalProps = {
  project: Project;
  locale: "en" | "es";
  onClose: () => void;
};

export function CaseStudyModal({ project, locale, onClose }: CaseStudyModalProps) {
  const cs = project.caseStudy;

  const handleEsc = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleEsc]);

  if (!cs) return null;

  const l = {
    overview: locale === "en" ? "Overview" : "Descripción",
    challenge: locale === "en" ? "The Challenge" : "El Desafío",
    approach: locale === "en" ? "The Approach" : "El Enfoque",
    tech: locale === "en" ? "Tech Stack" : "Stack Técnico",
    results: locale === "en" ? "Results" : "Resultados",
    lessons: locale === "en" ? "Takeaway" : "Aprendizaje",
    source: locale === "en" ? "View source code" : "Ver código fuente",
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[6px]"
        onClick={onClose}
      />

      {/* Centered Modal */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
      >
        <div
          className="pointer-events-auto relative w-full max-w-2xl max-h-[80vh] overflow-hidden
            rounded-[24px] bg-snow dark:bg-[#1c1c1e]
            shadow-[0_24px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)]
            dark:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4
            bg-snow/90 dark:bg-[#1c1c1e]/90 backdrop-blur-md
            border-b border-silver-mist/30 dark:border-[#38383a]/50">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full
                text-[9px] font-mono font-bold uppercase tracking-[0.14em]
                text-azure bg-azure/8 flex-shrink-0">
                {project.type}
              </span>
              <h2 className="text-[16px] font-semibold text-ink dark:text-[var(--color-ink)] truncate">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded-full
                bg-fog dark:bg-[#2c2c2e] text-graphite dark:text-[var(--color-graphite)]
                hover:bg-silver-mist/60 dark:hover:bg-[#3a3a3c] transition-colors duration-150 flex-shrink-0 ml-3"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto overscroll-contain max-h-[calc(80vh-56px)] px-6 py-6">

            {/* Hero image */}
            {project.image && (
              <div className="relative mb-6 h-40 sm:h-52 overflow-hidden rounded-2xl bg-fog dark:bg-[#0a0a0a]">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="640px" priority />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-azure bg-azure/8">
                  {tag}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="text-[15px] leading-[1.7] text-graphite dark:text-[var(--color-graphite)] mb-6">
              {cs.overview}
            </p>

            <hr className="border-silver-mist/30 dark:border-[#38383a]/50 mb-6" />

            {/* Challenge */}
            <div className="mb-6">
              <Label color="red">{l.challenge}</Label>
              <div className="flex gap-3 rounded-xl bg-[#ff375f]/5 dark:bg-[#ff375f]/8 p-4">
                <span className="flex-shrink-0 w-0.5 rounded-full bg-[#ff375f]/40" />
                <p className="text-[14px] leading-[1.65] text-ink/80 dark:text-[var(--color-ink)]/80">
                  {cs.challenge}
                </p>
              </div>
            </div>

            {/* Approach — compact timeline */}
            <div className="mb-6">
              <Label color="blue">{l.approach}</Label>
              <div className="space-y-3">
                {cs.approach.map((step, i) => {
                  const [title, ...rest] = step.split(" — ");
                  return (
                    <div key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full
                        bg-azure text-snow text-[10px] font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-[13px] font-semibold text-ink dark:text-[var(--color-ink)]">{title}</span>
                        {rest.length > 0 && (
                          <p className="text-[13px] leading-[1.55] text-graphite dark:text-[var(--color-graphite)] mt-0.5">
                            {rest.join(" — ")}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech decisions */}
            <div className="mb-6">
              <Label color="gray">{l.tech}</Label>
              <div className="rounded-xl bg-fog dark:bg-[#0a0a0a] p-4">
                <p className="text-[13px] leading-[1.6] text-graphite dark:text-[var(--color-graphite)]">
                  {cs.techDecisions}
                </p>
              </div>
            </div>

            {/* Results — 2x2 grid */}
            <div className="mb-6">
              <Label color="blue">{l.results}</Label>
              <div className="grid grid-cols-2 gap-2.5">
                {cs.results.map((m) => (
                  <div key={m.label} className="rounded-xl bg-fog dark:bg-[#0a0a0a] p-3.5 text-center">
                    <p className="text-[1.4rem] font-bold tracking-tight text-azure leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="text-[10px] font-medium text-graphite dark:text-[var(--color-graphite)] uppercase tracking-wider">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons */}
            <div className="mb-6">
              <Label color="green">{l.lessons}</Label>
              <div className="flex gap-3 rounded-xl bg-[#34c759]/5 dark:bg-[#34c759]/8 p-4">
                <span className="flex-shrink-0 w-0.5 rounded-full bg-[#34c759]/40" />
                <p className="text-[13px] leading-[1.6] text-ink/80 dark:text-[var(--color-ink)]/80 italic">
                  {cs.lessons}
                </p>
              </div>
            </div>

            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium
                  text-cobalt-link dark:text-azure hover:underline underline-offset-4"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {l.source}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ── Label helper ───────────────────── */
function Label({ children, color }: { children: React.ReactNode; color: "red" | "blue" | "green" | "gray" }) {
  const colors = {
    red: "text-[#ff375f]",
    blue: "text-azure",
    green: "text-[#34c759]",
    gray: "text-graphite dark:text-[var(--color-graphite)]",
  };
  return (
    <h3 className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-3 ${colors[color]}`}>
      {children}
    </h3>
  );
}
