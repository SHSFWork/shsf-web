import { SITE, ONLINE } from "@shsfwork/constants/common";
import { absoluteUrl } from "./absoluteUrl";
import { Metadata } from "next";

export function constructMetadata({
  title = `${SITE.title} - ${SITE.subtitle}`,
  description = SITE.description,
  image,
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  const defaultImage = absoluteUrl(
    `/og?title=${encodeURI(title)}&description=${encodeURI(description)}`
  );

  return {
    title,
    description,
    keywords: [
      "ozan tekin",
      "shsf work",
      "ozan",
      "shsf",
      "work",
      "developer",
      "software engineer",
      "ozantekin",
      "ozantek.in",
      "freelance",
      "frontend developer",
      "fullstack developer",
      "backend developer",
      "SaaS",
      "web development",
      "web design",
      "software",
      "software development",
      "screenie",
      "unarkhive",
      "shsfui",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || defaultImage],
      creator: `@${ONLINE.bluesky.title}`,
    },
    icons: "/favicon.ico",
    metadataBase: new URL(SITE.url),
    authors: [
      {
        name: SITE.author,
        url: SITE.url,
      },
    ],
    other: {
      pinterest: "nopin",
    },
    creator: SITE.author,
    ...props,
  };
}
