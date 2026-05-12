import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** When true the heading will span the full width instead of being constrained */
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
      {/* Eyebrow — SF Pro Display style */}
      <p className="text-[14px] sm:text-[17px] font-semibold tracking-[-0.1px] text-azure uppercase mb-3 dark:text-azure">
        {label}
      </p>
      {/* Headline — Large, bold, tight tracking */}
      <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] text-ink leading-[1.07] dark:text-[var(--color-ink)]">
        {title}
      </h2>
      {/* Subtitle — Light weight, secondary color */}
      {subtitle ? (
        <p className="mt-5 text-[17px] sm:text-[20px] font-light tracking-[-0.2px] leading-[1.4] text-graphite dark:text-[var(--color-graphite)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
