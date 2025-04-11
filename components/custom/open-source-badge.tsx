import Link from "@shsfwork/components/custom/link";
import { Heart } from "lucide-react";

export default function OpenSourceBadge() {
  return (
    <Link
      title="View our open source code"
      href="https://github.com/shsfwork/shsfwork-web"
      className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
      aria-label="View our open source code on GitHub"
    >
      <span className="text-muted-foreground group-hover/link:text-primary/70 transition-all">
        Open source
      </span>
      <Heart
        className="size-4 fill-rose-500 text-rose-600"
        strokeWidth={1.75}
      />
      <span className="inline-flex transition-colors duration-300 text-xs text-rose-500 group-hover/link:text-rose-600">
        Star on GitHub
      </span>
    </Link>
  );
}
