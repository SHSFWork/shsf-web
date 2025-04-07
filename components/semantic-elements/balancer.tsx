import * as React from "react";
import { cn } from "@shsfwork/lib/cn";

type BalancerProps = {
  id: string;
} & React.ComponentProps<"span">;

export default function Balancer(props: BalancerProps) {
  const { children, className, id, ...rest } = props;

  return (
    <span
      id={id}
      className={cn("inline-block text-balance", className)}
      {...rest}
    >
      {children}
    </span>
  );
}
