import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  size?: "default" | "wide";
};

export function Section({ className, containerClassName, size = "wide", children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

