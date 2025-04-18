import NextLink from "next/link";

import { cn } from "@shsfwork/lib/cn";
import { isExternalLink } from "@shsfwork/lib/isExternalLink";
import { SITE } from "@shsfwork/constants/common";

type LinkProps = {
  href: string;
  className?: string;
  title: string;
} & ChildrenType;

export default function Link(props: LinkProps) {
  const { href, title, className, ...rest } = props;

  const isMailto = href.startsWith("mailto:");

  if (isExternalLink(href) && !isMailto) {
    return (
      <a
        title={title}
        aria-label={title}
        href={href + "?ref=" + SITE.domain}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
        {...rest}
      />
    );
  }

  return (
    <NextLink
      title={title}
      aria-label={title}
      href={href}
      className={cn(className)}
      {...rest}
    />
  );
}
