import Image from "next/image";
import Link from "next/link";

import { SITE } from "@shsfwork/constants/common";
import { cn } from "@shsfwork/lib/cn";

type LogoProps = {
  isText?: boolean;
} & Omit<React.ComponentProps<typeof Link>, "href" | "aria-label" | "title">;

export default function Logo(props: LogoProps) {
  const { isText = true, className, ...rest } = props;

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center justify-start gap-1.5 shrink-0",
        className
      )}
      title={SITE.title + " Logo"}
      aria-label={SITE.title + " Logo"}
      {...rest}
    >
      <Image
        src="/logo.png"
        alt={SITE.title + " Logo"}
        width={40}
        height={40}
        className="size-10 rounded-md aspect-square object-cover border"
        priority
        draggable={false}
      />

      {isText && <span className="text-lg font-semibold">{SITE.title}</span>}
    </Link>
  );
}
