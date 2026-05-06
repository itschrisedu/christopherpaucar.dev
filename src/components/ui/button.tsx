import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-[#0b0b0b]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-[#0b0b0b] dark:text-white shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 hover:bg-accent-hover",
        secondary: "border-2 border-border bg-transparent text-primary dark:text-white hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10",
        ghost: "bg-transparent text-primary dark:text-white hover:bg-surface dark:hover:bg-white/5",
      },
      size: {
        default: "h-12 px-7",
        lg: "h-[52px] px-9",
        sm: "h-10 px-4 rounded-xl text-[13px]",
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

