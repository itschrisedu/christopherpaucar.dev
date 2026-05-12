import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Card ─────────────────────────────────────────────────────── */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[28px] bg-snow dark:bg-[#1c1c1e] transition-all duration-344",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

/* ── Card Header ──────────────────────────────────────────────── */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-2 p-7", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

/* ── Card Title ───────────────────────────────────────────────── */
const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-[17px] font-semibold leading-tight tracking-[-0.1px] text-ink dark:text-[var(--color-ink)]",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

/* ── Card Description ─────────────────────────────────────────── */
const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-[14px] text-graphite dark:text-[var(--color-graphite)]", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

/* ── Card Content ─────────────────────────────────────────────── */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-7 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

/* ── Card Footer ──────────────────────────────────────────────── */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-7 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
