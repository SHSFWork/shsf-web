"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@shsfwork/lib/cn";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawstring__?: string;
}

export default function Pre(props: PreProps) {
  const { children, __rawstring__ = "" } = props;

  const [isCopied, setIsCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(__rawstring__);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <>
      <pre className="relative group" {...props}>
        <button
          onClick={copy}
          disabled={isCopied}
          aria-label="Copy"
          className={cn(
            "absolute right-2 top-2 z-10",
            "md:opacity-0 md:group-hover:opacity-100 duration-200 transition-all",
            "[&_svg:not([class*='size-'])]:size-4 p-2 cursor-pointer",
            "disabled:opacity-10 disabled:pointer-events-none"
          )}
        >
          {isCopied ? <Check /> : <Copy />}
        </button>

        {children}
      </pre>
    </>
  );
}
