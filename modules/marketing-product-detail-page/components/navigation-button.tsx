import { Button } from "@shsfwork/components/custom/3d-button";
import { cn } from "@shsfwork/lib/cn";
import { type Product } from "content-collections";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  product: Product | null;
  type: "prev" | "next";
};

export default function NavigationButton({
  product,
  type,
}: NavigationButtonProps) {
  if (!product) return null;

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
          href={product.url}
          title={`Navigate to product "${product.title}"`}
        >
          <Icon size={16} />
          <span className="hidden md:block">{product.title}</span>
        </a>
      </Button>
    </>
  );
}
