import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({ label, title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-accent mb-4">{label}</span>
      <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold tracking-[-0.03em] text-primary leading-[1.08]">{title}</h2>
      {subtitle ? <p className="mt-4 text-[15px] leading-relaxed text-secondary">{subtitle}</p> : null}
    </div>
  );
}

