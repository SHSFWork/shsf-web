import { formatDistanceToNow, Locale } from "date-fns";

export function getBookmarkTimeAgo(
  created: string | Date,
  locale?: Locale
): string {
  try {
    const date = typeof created === "string" ? new Date(created) : created;

    return formatDistanceToNow(date, {
      addSuffix: true,
      includeSeconds: true,
      locale,
    });
  } catch {
    return "Unknown time";
  }
}

export function getBookmarkTags(tags: string[]): string {
  return tags.map((tag) => `#${tag}`).join(", ");
}
