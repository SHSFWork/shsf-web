import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import Link from "@shsfwork/components/custom/link";

export default function DiscordButton() {
  return (
    <Link
      title="Join us on Discord"
      href="https://discord.gg/7QWGDKBksn"
      className={buttonVariants({ variant: "ghost" })}
    >
      Join us
    </Link>
  );
}
