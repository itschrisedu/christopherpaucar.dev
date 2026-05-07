import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** When true the heading will span the full width instead of being constrained to max-w-4xl */
  fullWidth?: boolean;
  className?: string;
};

export function SectionHeading({ label, title, subtitle, centered = true, fullWidth = false, className }: SectionHeadingProps) {
  const baseClass = centered
    ? "w-full text-center"
    : fullWidth
    ? "w-full"
    : "max-w-4xl";

  return (
    <div className={cn(baseClass, className)}>
      <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] text-accent leading-[1.08] mb-3">{label}</h2>
      <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-bold tracking-[-0.03em] text-primary dark:text-white leading-[1.08]">{title}</p>
      {subtitle ? <p className="mt-4 text-[15px] leading-relaxed text-secondary dark:text-gray-400">{subtitle}</p> : null}
    </div>
  );
}

