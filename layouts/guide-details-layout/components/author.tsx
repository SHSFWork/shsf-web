"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { allGuides } from "content-collections";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shsfwork/components/shadcn/avatar";
import Link from "@shsfwork/components/custom/link";

export default function Author() {
  const pathname = usePathname();

  const slug = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] === "guide" && segments.length > 1
      ? segments.slice(1).join("/")
      : "";
  }, [pathname]);

  const guide = React.useMemo(
    () => allGuides.find((p) => p._meta.path === slug),
    [slug]
  );

  if (!guide) return null;

  return (
    <Link
      title={`${guide.author.name} on ${guide.title}`}
      href={guide.author.href}
      className="flex items-center gap-2 border bg-card px-3 py-2 rounded-lg"
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={guide.author.src} alt={guide.author.name} />
          <AvatarFallback>
            {guide.author.name?.match(/\b\w/g)?.join("")?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <span className="absolute -end-1.5 -top-1.5">
          <span className="sr-only">Verified</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              className="fill-background"
              d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
            />
            <path
              className="fill-primary"
              d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
            />
            <path
              className="fill-background"
              d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
            />
          </svg>
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold">{guide.author.name}</p>
        <p className="text-xs text-muted-foreground">{guide.author.title}</p>
      </div>
    </Link>
  );
}
