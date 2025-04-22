import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shsfwork/lib/cn";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 border cursor-pointer [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        bone: "bg-bone-600 text-white hover:bg-bone-700 border-bone-700 border-b-4 border-b-bone-700 shadow-md dark:bg-bone-700  dark:hover:bg-bone-800 dark:border-bone-900 dark:border-b-bone-800",
        default:
          "bg-blue-500 text-white hover:bg-blue-600 border-blue-700 border-b-4 border-b-blue-600 shadow-md dark:bg-blue-700 dark:hover:bg-blue-800 dark:border-blue-900 dark:border-b-blue-800",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-600 border-red-700 border-b-4 shadow-md dark:bg-red-800 dark:text-white dark:hover:bg-red-900 dark:border-red-950",
        outline:
          "border bg-white hover:bg-neutral-100 border-neutral-300 border-b-4 border-b-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:border-b-neutral-600",
        outline_destructive:
          "border text-red-500 bg-white hover:bg-red-50 border-red-600 border-b-4 border-b-red-500 dark:bg-neutral-900 dark:text-red-300 dark:hover:bg-red-950 dark:border-red-800 dark:border-b-red-700",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary-dark dark:text-secondary-foreground-dark dark:hover:bg-secondary-dark/90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent-dark/90 dark:hover:text-accent-foreground-dark",
        ghost_destructive:
          "bg-transparent text-red-500 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-950",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary-dark dark:hover:text-primary-dark/90",
        solid:
          "bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        xs: "h-8 rounded-md px-4 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "bone",
      size: "default",
    },
  }
);

type ButtonPropsType = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonPropsType) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
