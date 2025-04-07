import * as React from "react";
import { cn } from "@shsfwork/lib/cn";

type ContainerProps = {
  id: string;
} & React.ComponentProps<"div">;

export default function Container(props: ContainerProps) {
  const { children, className, id, ...rest } = props;

  return (
    <div
      id={id}
      className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
