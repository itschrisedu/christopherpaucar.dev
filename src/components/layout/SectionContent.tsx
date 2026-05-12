import * as React from "react";

import { cn } from "@/lib/utils";

type SectionContentProps = React.HTMLAttributes<HTMLDivElement>;

export function SectionContent({ className, children, ...props }: SectionContentProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
}
