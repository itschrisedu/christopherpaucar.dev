import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[15px] font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 focus-visible:ring-offset-fog disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-[#0a0a0a]",
  {
    variants: {
      variant: {
        primary: "bg-azure text-snow rounded-full hover:bg-[#0077ED] hover:scale-[1.02]",
        secondary: "bg-transparent text-cobalt-link dark:text-azure rounded-full hover:underline underline-offset-4",
        ghost: "bg-transparent text-ink dark:text-[var(--color-ink)] hover:bg-ink/5 dark:hover:bg-snow/5 rounded-full",
        dark: "bg-obsidian dark:bg-snow text-snow dark:text-obsidian rounded-full hover:scale-[1.02]",
      },
      size: {
        default: "h-12 px-7",
        lg: "h-[52px] px-9",
        sm: "h-10 px-5 text-[14px]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild) {
    const child = props.children;
    if (React.isValidElement(child)) {
      const el = child as React.ReactElement<{ className?: string }>;
      return React.cloneElement(el, { className: cn(classes, el.props.className) });
    }
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {props.children}
    </button>
  );
});
Button.displayName = "Button";

export { buttonVariants };
