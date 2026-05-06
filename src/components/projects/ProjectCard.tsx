import * as React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  type: string;
  problem: string;
  solution: string;
  result: string;
  tags: readonly string[];
  github?: string;
  image?: string;
};

const techIconMap: Record<string, string> = {
  "Next.js": "N",
  NestJS: "Ne",
  PostgreSQL: "Pg",
  Docker: "Dk",
  JWT: "J",
  React: "R",
  TypeScript: "TS",
  "Node.js": "Nd",
  Leaflet: "Lf",
  OSRM: "Os",
  Python: "Py",
  Django: "Dj",
  JavaScript: "JS",
  OpenCV: "Cv",
  Biometrics: "Bi",
  Angular: "Ng",
  SCSS: "Sc",
  RxJS: "Rx",
};

function TechTag({ tag }: { tag: string }) {
  const iconLabel = techIconMap[tag] ?? tag.slice(0, 2);

  return (
    <span className="inline-flex w-full items-center gap-1.5 px-2 py-1.5 rounded-md text-[10px] font-mono font-semibold text-muted dark:text-gray-500 bg-surface/80 dark:bg-white/5 border border-border/70 dark:border-white/10">
      <span className="inline-flex items-center justify-center min-w-5 h-5 rounded-[6px] bg-accent/15 text-accent text-[9px] leading-none font-bold tracking-tight">
        {iconLabel}
      </span>
      <span className="truncate">{tag}</span>
    </span>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: "en" | "es" }) {
  return (
    <Card
      className={cn(
        "group relative h-[620px] sm:h-[650px] overflow-hidden rounded-3xl border border-border/70 p-5 sm:p-6 flex flex-col",
        "bg-card/95 dark:bg-[#151515]/95",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_24px_45px_rgba(245,185,66,0.16)]",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent-orange/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-10 -right-8 w-36 h-36 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full flex flex-col">
        {project.image ? (
          <div className="mb-4 relative overflow-hidden rounded-2xl border border-border/70 dark:border-white/10 h-36 sm:h-40 flex-shrink-0 bg-surface/40 dark:bg-white/[0.03]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 1024px) 500px, (min-width: 640px) 400px, 300px"
            />
          </div>
        ) : null}

        <span className="inline-flex w-fit items-center px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-accent bg-accent/10 border border-accent/20 mb-3">
          {project.type}
        </span>

        <h3 className="text-[20px] sm:text-[22px] font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 tracking-[-0.015em] leading-tight [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden min-h-[52px] sm:min-h-[58px]">
          {project.title}
        </h3>

        <div className="space-y-2.5 mb-4 h-[236px]">
          <div className="flex gap-3 rounded-xl border border-border/60 dark:border-white/10 p-2.5 min-h-[72px] bg-surface/50 dark:bg-white/[0.02]">
            <span className="flex-shrink-0 w-1 rounded-full bg-red-400/50 mt-1" />
            <p className="text-[13px] text-secondary dark:text-gray-400 leading-relaxed [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
              <span className="font-semibold text-primary dark:text-white">{locale === "en" ? "Problem" : "Problema"}:</span> {project.problem}
            </p>
          </div>
          <div className="flex gap-3 rounded-xl border border-border/60 dark:border-white/10 p-2.5 min-h-[72px] bg-surface/50 dark:bg-white/[0.02]">
            <span className="flex-shrink-0 w-1 rounded-full bg-blue-400/50 mt-1" />
            <p className="text-[13px] text-secondary dark:text-gray-400 leading-relaxed [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
              <span className="font-semibold text-primary dark:text-white">{locale === "en" ? "Solution" : "Solución"}:</span> {project.solution}
            </p>
          </div>
          <div className="flex gap-3 rounded-xl border border-accent/25 dark:border-accent/25 bg-accent/8 p-2.5 min-h-[68px]">
            <span className="flex-shrink-0 w-1 rounded-full bg-accent/70 mt-1" />
            <p className="text-[13px] font-semibold text-accent-orange leading-relaxed [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
              {locale === "en" ? "Result" : "Resultado"}: {project.result}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 h-[58px] overflow-hidden">
          {project.tags.slice(0, 4).map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 border-t border-border/60 dark:border-white/10 inline-flex items-center gap-2.5 text-[13px] font-semibold text-secondary dark:text-gray-400 hover:text-accent transition-colors duration-200 group/link"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="group-hover/link:underline underline-offset-4">{locale === "en" ? "View source code" : "Ver código fuente"}</span>
            <svg className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        ) : null}
      </div>
    </Card>
  );
}

