import { absoluteUrl } from "@shsfwork/lib/absoluteUrl";
import BookmarksCollectionPage from "@shsfwork/modules/bookmarks-collection-page";
import { getBookmarks, getCollections } from "@shsfwork/services/raindrop";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BookmarksCollectionProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BookmarksCollectionProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = parseInt(resolvedParams.slug);
  const collectionsData = await getCollections();
  const collection = collectionsData.items.find((c) => c._id === slug);

  if (!collection) {
    return {};
  }

  const title = collection.title;
  const description = `${collectionsData.items.length} bookmark${
    collectionsData.items.length !== 1 ? "s" : ""
  } in this collection`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(`/bookmarks/${resolvedParams.slug}`),
      images: [
        {
          url: absoluteUrl(`/og?title=${title}&description=${description}`),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BookmarkCollection({
  params,
}: BookmarksCollectionProps) {
  const resolvedParams = await params;
  const slug = parseInt(resolvedParams.slug);

  if (isNaN(slug)) {
    notFound();
  }

  const [collectionsData, bookmarksData] = await Promise.all([
    getCollections(),
    getBookmarks(slug),
  ]);

  const isRootCollection = slug === 0;

  if (!isRootCollection) {
    const collection = collectionsData.items.find((c) => c._id === slug);
    if (!collection) {
      notFound();
    }
  }

  const title = isRootCollection
    ? "All Bookmarks"
    : collectionsData.items.find((c) => c._id === slug)?.title || "Collection";

  return (
    <BookmarksCollectionPage bookmarksData={bookmarksData} title={title} />
  );
}
