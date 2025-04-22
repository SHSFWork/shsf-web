import LinkifyIt, { Match } from "linkify-it";

const linkify = new LinkifyIt();
const hashtagRegex = /#[\w]+/g;
const mentionRegex = /@[\w.]+/g; // Adjusted to include periods

type HashtagMatch = {
  index: number;
  lastIndex: number;
  text: string;
  url: string;
};

type MentionMatch = {
  index: number;
  lastIndex: number;
  text: string;
  url: string;
};

export default function getFormatDescription(description: string) {
  const linkMatches = linkify.match(description) || [];
  const hashtagMatches = Array.from(description.matchAll(hashtagRegex)).map(
    (match) => ({
      index: match.index!,
      lastIndex: match.index! + match[0].length,
      text: match[0],
      url: `https://bsky.app/hashtag/${match[0].slice(1)}`,
    })
  );
  const mentionMatches = Array.from(description.matchAll(mentionRegex)).map(
    (match) => ({
      index: match.index!,
      lastIndex: match.index! + match[0].length,
      text: match[0],
      url: `https://bsky.app/profile/${match[0].slice(1)}`,
    })
  );

  const combinedMatches: (Match | HashtagMatch | MentionMatch)[] = [
    ...linkMatches,
    ...hashtagMatches,
    ...mentionMatches,
  ].sort((a, b) => a.index - b.index);

  if (combinedMatches.length === 0) return description;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  combinedMatches.forEach((match, index) => {
    const { index: startIndex, lastIndex: endIndex, text } = match;

    if (lastIndex < startIndex) {
      parts.push(description.slice(lastIndex, startIndex));
    }

    parts.push(
      <span
        key={`link-${index}`}
        className="text-bone-700 dark:text-bone-600  transition-colors duration-300"
        // onClick={() => window.open(url, "_blank", "noopener noreferrer")}
      >
        {text.replace(/^https?:\/\/(www\.)?/, "")}
      </span>
    );

    lastIndex = endIndex;
  });

  if (lastIndex < description.length) {
    parts.push(description.slice(lastIndex));
  }

  return parts;
}
