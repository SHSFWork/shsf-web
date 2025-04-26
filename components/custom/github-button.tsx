import Link from "@shsfwork/components/custom/link";
import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import { REPO_ONLINE } from "@shsfwork/constants/common";
import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <Link
      title={REPO_ONLINE.github.title}
      href={REPO_ONLINE.github.href}
      className={buttonVariants({ variant: "ghost", size: "icon" })}
    >
      <Github className="size-4 text-muted-foreground fill-muted-foreground" />

      <span className="sr-only">{REPO_ONLINE.github.title}</span>
    </Link>
  );
}
