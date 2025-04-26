"use client";

import { useState, useRef } from "react";
import { Clipboard, Check } from "lucide-react";
import { DEV_ONLINE } from "@shsfwork/constants/common";

export const EmailCopyButton = () => {
  const email = DEV_ONLINE.contact.email;

  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset copied state after 2 seconds
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex items-center gap-2 relative">
      <span className="text-xs font-medium tracking-wider">{email}</span>

      <button
        aria-label="Copy email address"
        className="bg-background/10 rounded-md size-7 flex items-center justify-center cursor-copy"
        onClick={handleCopy}
      >
        {copied ? <Check size={14} /> : <Clipboard size={14} />}
      </button>
    </div>
  );
};
