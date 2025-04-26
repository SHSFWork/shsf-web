import Link from "@shsfwork/components/custom/link";
import { Github } from "lucide-react";

export default function OpenSourceBadge() {
  return (
    <Link
      title="View our open source code"
      href="https://github.com/shsfwork/shsf-web"
      className="inline-flex items-center gap-1.5 text-sm"
      aria-label="View our open source code on GitHub"
    >
      <span className="text-muted-foreground">Source on</span>
      <Github className="size-4 fill-muted-foreground" />
    </Link>
  );
}
