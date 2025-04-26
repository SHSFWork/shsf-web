"use client";

import * as React from "react";
import { CheckCheck, Copy } from "lucide-react";

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
    <div className="relative group">
      <button
        onClick={copy}
        disabled={isCopied}
        aria-label="Copy"
        className="absolute right-0 top-0 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-200 transition-opacity [&_svg:not([class*='size-'])]:size-4 p-3 cursor-pointer disabled:text-stack-700 disabled:pointer-events-none text-stack-300"
      >
        {isCopied ? <CheckCheck /> : <Copy />}
      </button>
      <pre className="overflow-auto" {...props}>
        {children}
      </pre>
    </div>
  );
}
