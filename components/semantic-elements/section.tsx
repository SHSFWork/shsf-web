import * as React from "react";
import { cn } from "@shsfwork/lib/cn";

type SectionProps = {
  id: string;
} & React.ComponentProps<"section">;

export default function Section(props: SectionProps) {
  const { children, className, id, ...rest } = props;

  return (
    <section id={id} className={cn("py-8 md:py-12", className)} {...rest}>
      {children}
    </section>
  );
}
