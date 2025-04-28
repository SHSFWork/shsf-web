import { Button } from "@shsfwork/components/custom/3d-button";
import { cn } from "@shsfwork/lib/cn";
import { type Guide } from "content-collections";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  guide: Guide | null;
  type: "prev" | "next";
};

export default function NavigationButton({
  guide,
  type,
}: NavigationButtonProps) {
  if (!guide) return null;

  const Icon = type === "next" ? ChevronRight : ChevronLeft;
  return (
    <>
      {/* desktop */}
      <Button variant="outline" title="Scroll back to the top" asChild>
        <a
          className={cn("flex items-center justify-start gap-2", {
            "text-left": type === "prev",
            "flex-row-reverse text-right": type === "next",
          })}
          href={guide.url}
          title={`Navigate to guide "${guide.title}"`}
        >
          <Icon size={16} />
          <span className="hidden md:block max-w-40 truncate">
            {guide.title}
          </span>
        </a>
      </Button>
    </>
  );
}
