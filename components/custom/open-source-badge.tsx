import Link from "@shsfwork/components/custom/link";
import { REPO_ONLINE } from "@shsfwork/constants/common";
import { Github } from "lucide-react";

export default function OpenSourceBadge() {
  return (
    <Link
      title={REPO_ONLINE.github.title}
      href={REPO_ONLINE.github.href}
      className="inline-flex items-center gap-1.5 text-sm"
      aria-label="View our open source code on GitHub"
    >
      <span className="text-muted-foreground">Source on</span>
      <Github className="size-4  text-muted-foreground fill-muted-foreground" />
    </Link>
  );
}
