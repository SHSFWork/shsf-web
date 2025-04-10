"use client";
import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@shsfwork/components/custom/3d-button";
import { cn } from "@shsfwork/lib/cn";

type BackButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export default function BackButton(props: BackButtonProps) {
  const { className, ...rest } = props;

  const router = useRouter();

  return (
    <Button
      variant="outline"
      className={cn("group", className)}
      onClick={() => router.back()}
      {...rest}
    >
      <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
      <span>Back</span>
    </Button>
  );
}
