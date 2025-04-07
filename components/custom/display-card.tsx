"use client";

import Link from "@shsfwork/components/custom/link";
import Balancer from "@shsfwork/components/semantic-elements/balancer";
import { cn } from "@shsfwork/lib/cn";
import { Sparkles } from "lucide-react";

type DisplayCardProps = {
  linkTitle: string;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  domain?: string;
  iconClassName?: string;
  titleClassName?: string;
};

function DisplayCard({
  linkTitle,
  href,
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  domain = "shsf.work",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <Link
      href={href}
      title={linkTitle}
      className={cn(
        "relative flex h-36 w-full max-w-lg -skew-y-[5deg] select-none flex-col justify-between rounded-xl border border-border/30 bg-gradient-to-br from-sidebar/90 to-sidebar/60 px-4 py-3 transition-all duration-500 backdrop-blur-lg shadow-sm",
        "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tr after:from-transparent after:via-background-foreground/5 after:to-background-foreground/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
        "before:absolute before:-inset-0.5 before:rounded-xl before:bg-gradient-to-br before:from-transparent before:via-border/40 before:to-border/5 before:opacity-0 before:blur-sm before:transition-opacity before:duration-500 hover:before:opacity-100",
        "hover:border-border hover:shadow-md hover:scale-[1.02] [&>*]:relative [&>*]:z-10 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span
          className={cn(
            "relative inline-flex items-center justify-center rounded-md p-1 bg-sidebar backdrop-blur-sm border",
            iconClassName
          )}
        >
          {icon}
        </span>
        <h5 className={cn("md:text-lg font-medium", titleClassName)}>
          {title}
        </h5>
      </div>
      <p className="whitespace-normal break-words text-sm md:text-lg line-clamp-2 text-foreground/90">
        <Balancer id="description">{description}</Balancer>
      </p>
      <p className="text-muted-foreground text-sm opacity-75">{domain}</p>
    </Link>
  );
}

type DisplayCardsProps = {
  cards: DisplayCardProps[];
};

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="relative grid  max-w-sm md:max-w-md lg:max-w-lg mx-auto [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-500 pr-8 sm:pr-0 py-8 mb-28">
      {cards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
