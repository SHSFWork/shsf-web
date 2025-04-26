import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import Link from "@shsfwork/components/custom/link";
import { REPO_ONLINE } from "@shsfwork/constants/common";

export default function DiscordButton() {
  return (
    <Link
      title={REPO_ONLINE.discord.title}
      href={REPO_ONLINE.discord.href}
      className={buttonVariants({ variant: "ghost" })}
    >
      Join us
    </Link>
  );
}
