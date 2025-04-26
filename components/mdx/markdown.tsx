"use client";

import { MDXContent } from "@content-collections/mdx/react";
import { Hash } from "lucide-react";
import { ReactNode } from "react";
import ContentArticle from "./content-article";
import MarkdownImage from "./markdown-image";
import Pre from "./pre";
import Link from "@shsfwork/components/custom/link";
import { cn } from "@shsfwork/lib/cn";

type MarkdownProps = {
  code: string;
};

type HeadingProps = {
  id?: string;
  children?: ReactNode;
};

const heading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id, children }: HeadingProps) => (
    <Link
      title={children?.toString() || ""}
      href={`#${id}`}
      className="group relative no-underline focus-visible:ring-0"
    >
      <Hash
        className="absolute -left-5 hidden h-full p-1 text-primary-500 group-hover:block group-focus-visible:block sm:-left-6 dark:text-primary-400"
        strokeWidth="3"
      />
      <As
        id={id}
        className="group-focus-visible:underline group-focus-visible:decoration-primary-500 group-focus-visible:decoration-2"
      >
        {children}
      </As>
    </Link>
  );
  Heading.displayName = As;
  return Heading;
};

export default function Markdown({ code }: MarkdownProps) {
  return (
    <ContentArticle>
      <MDXContent
        code={code}
        components={{
          a: Link,
          pre: Pre,
          img: MarkdownImage,

          h1: heading("h1"),
          h2: heading("h2"),
          h3: heading("h3"),
          h4: heading("h4"),
          h5: heading("h5"),
          h6: heading("h6"),

          code: ({
            className,
            ...props
          }: React.HTMLAttributes<HTMLElement>) => (
            <code className={cn("px-2 py-[0.2rem]", className)} {...props} />
          ),
        }}
      />
    </ContentArticle>
  );
}
