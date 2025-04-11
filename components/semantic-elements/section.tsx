import * as React from "react";
import { cn } from "@shsfwork/lib/cn";

type SectionProps = {
  id: string;
} & React.ComponentProps<"section">;

export default function Section(props: SectionProps) {
  const { children, className, id, ...rest } = props;

  return (
    <section
      id={id}
      className={cn("py-8 sm:py-12 md:py-20", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
