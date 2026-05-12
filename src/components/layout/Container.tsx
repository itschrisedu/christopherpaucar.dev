import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
  fullWidth?: boolean;
  align?: "center" | "start";
};

export function Container({ className, size = "default", fullWidth = false, align = "center", children, ...props }: ContainerProps) {
  return (
    <div className={align === "start" ? "flex justify-start w-full" : "flex justify-center w-full"}>
      <div
        className={cn(
          fullWidth ? "w-full" : "px-6 sm:px-10 w-full",
          fullWidth ? "max-w-none" : size === "wide" ? "max-w-[1400px]" : "max-w-[1200px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
