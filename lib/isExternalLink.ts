export function isExternalLink(href: string | undefined | null): boolean {
  if (!href) return false;

  return !(href.startsWith("/") || href.startsWith("#"));
}
