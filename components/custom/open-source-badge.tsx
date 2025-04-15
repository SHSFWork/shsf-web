import Link from "@shsfwork/components/custom/link";
import { Star } from "lucide-react";

export default function OpenSourceBadge() {
  return (
    <Link
      title="View our open source code"
      href="https://github.com/shsfwork/shsf-web"
      className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
      aria-label="View our open source code on GitHub"
    >
      <span className="text-muted-foreground group-hover/link:text-primary/70 transition-all">
        Open source
      </span>
      <Star className="size-4 fill-amber-500 text-amber-500 group-hover/link:fill-amber-600 group-hover/link:text-amber-600 transition-all duration-300" />
      <span className="inline-flex transition-colors duration-300 text-xs text-amber-500 group-hover/link:text-amber-600">
        Star on GitHub
      </span>
    </Link>
  );
}
