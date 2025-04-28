import { notFound } from "next/navigation";

import { allGuides } from "@shsfwork/.content-collections/generated";

import GuideDetailPage from "@shsfwork/modules/guide-detail-page";
import { Metadata } from "next";
import { absoluteUrl } from "@shsfwork/lib/absoluteUrl";
import { SITE } from "@shsfwork/constants/common";

type GuideDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GuideDetails({ params }: GuideDetailsProps) {
  const resolvedParams = await params;
  const guide = allGuides.find((p) => p._meta.path === resolvedParams.slug);
  if (!guide) {
    notFound();
  }

  return <GuideDetailPage guide={guide} />;
}

export async function generateMetadata({
  params,
}: GuideDetailsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = allGuides.find((p) => p._meta.path === resolvedParams.slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} — ${SITE.title}`,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      url: absoluteUrl(guide.url),
      images: [
        {
          url: guide.og,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.excerpt,
      // images: [guide.image],
      creator: SITE.author,
    },
  };
}
