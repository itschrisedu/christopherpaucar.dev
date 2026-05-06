import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export function Container({ className, size = "default", children, ...props }: ContainerProps) {
  return (
    <div className="flex justify-center w-full">
      <div
        className={cn(
          "px-6 sm:px-10 w-full",
          size === "wide" ? "max-w-[1800px]" : "max-w-[1400px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

