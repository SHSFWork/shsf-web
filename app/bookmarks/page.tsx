import BookmarksPage from "@shsfwork/modules/bookmarks-page";
import { getAllBookmarks, getCollections } from "@shsfwork/services/raindrop";
import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import { Metadata } from "next";

export default async function Bookmarks() {
  const [collectionsData, bookmarksData] = await Promise.all([
    getCollections(),
    getAllBookmarks(),
  ]);

  return (
    <BookmarksPage
      collectionsData={collectionsData}
      bookmarksData={bookmarksData}
    />
  );
}

export const metadata: Metadata = constructMetadata({
  title: "Bookmarks",
  description:
    "Explore open-source projects, repositories, and tools across various categories.",
});
