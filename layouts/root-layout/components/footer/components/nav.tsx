import * as React from "react";
import { cn } from "@shsfwork/lib/cn";
import Link from "@shsfwork/components/custom/link";

type FooterNavProps = {
  id: string;
  items?: { href: string; title: string }[];
} & React.ComponentProps<"nav">;

export default function FooterNav(props: FooterNavProps) {
  const { className, items, id, children, ...rest } = props;

  return (
    <nav id={"footer-nav-" + id} {...rest}>
      <ul
        id={"footer-nav-" + id + "-list"}
        className={cn("flex flex-col gap-2", className)}
      >
        {items
          ? items.map((item, i) => (
              <li key={i} id={"footer-nav-" + id + "-item-" + i}>
                <Link
                  href={item.href}
                  className={cn("text-muted-foreground hover:text-primary")}
                  title={item.title}
                  aria-label={item.title}
                >
                  {item.title}
                </Link>
              </li>
            ))
          : children}
      </ul>
    </nav>
  );
}
