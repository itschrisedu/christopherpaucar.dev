import * as React from "react";

import { cn } from "@/lib/utils";

type SectionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  inset?: "none" | "gutter";
};

export function SectionContent({ className, inset = "gutter", children, ...props }: SectionContentProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 justify-center", className)} {...props}>
      <div
        className={cn(
          "lg:col-span-12",
          inset === "gutter"
            ? ""
            : "",
        )}
      >
        {children}
      </div>
    </div>
  );
}

