import { Button } from "@shsfwork/components/custom/3d-button";
import { cn } from "@shsfwork/lib/cn";
import { type Blog } from "content-collections";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  blog: Blog | null;
  type: "prev" | "next";
};

export default function NavigationButton({
  blog,
  type,
}: NavigationButtonProps) {
  if (!blog) return null;

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
          href={blog.url}
          title={`Navigate to blog "${blog.title}"`}
        >
          <Icon size={16} />
          <span className="hidden md:block">{blog.title}</span>
        </a>
      </Button>
    </>
  );
}
