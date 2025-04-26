"use client";

import { Button } from "@shsfwork/components/custom/3d-button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });
  return (
    <Button
      size="icon"
      variant="outline"
      title="Scroll back to the top"
      onClick={scrollToTop}
      className="mx-auto"
    >
      <ChevronUp size={16} />
    </Button>
  );
}
