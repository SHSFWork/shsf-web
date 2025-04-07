import * as React from "react";

import { cn } from "@shsfwork/lib/cn";
import Link from "@shsfwork/components/custom/link";

import { FOOTER_MARKETING_NAV } from "../constants";

type FooterNavProps = {
  id: string;
  items?: (typeof FOOTER_MARKETING_NAV)[keyof typeof FOOTER_MARKETING_NAV];
} & React.ComponentProps<"nav">;

export default function FooterNav(props: FooterNavProps) {
  const { className, items: ITEMS, id, children, ...rest } = props;

  return (
    <nav id={id + "-nav"} {...rest}>
      <ul
        id={id + "-nav-list"}
        className={cn("flex flex-col gap-2", className)}
      >
        {ITEMS
          ? ITEMS.map((item, i) => (
              <li key={i} id={id + "-nav-item-" + i}>
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
