import * as React from "react";

import { cn } from "@/lib/utils";

type SectionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  inset?: "none" | "gutter";
};

export function SectionContent({ className, inset = "gutter", children, ...props }: SectionContentProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12", className)} {...props}>
      <div
        className={cn(
          inset === "gutter"
            ? "lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8"
            : "lg:col-span-12",
        )}
      >
        {children}
      </div>
    </div>
  );
}

