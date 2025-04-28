import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";
import CollectionCard from "./components/collection-card";
import BookmarkCard from "./components/bookmark-card";
import Grid from "./components/grid";

interface BookmarksPageProps {
  collectionsData: Collections;
  bookmarksData: Bookmarks;
}

export default function BookmarksPage(props: BookmarksPageProps) {
  const { collectionsData, bookmarksData } = props;

  const collections = collectionsData.items.filter((c) => c._id !== 0);
  const recentBookmarks = bookmarksData.items.slice(0, 9);

  return (
    <div>
      <PageHeader
        title="Bookmarks"
        description="Explore open-source projects, repositories, and tools across various categories."
        className="mb-8"
      />

      <Section id="bookmarks" className="space-y-4 md:space-y-8">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg md:text-2xl font-semibold tracking-tight">
              Collections
            </h2>
            <p className="text-muted-foreground text-sm">
              {collections.length} collection
              {collections.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Grid className="gap-8 md:!gap-y-8 md:gap-4">
            {collections.map((collection) => (
              <CollectionCard key={collection._id} collection={collection} />
            ))}
          </Grid>
        </div>

        <div>
          <h2 className="text-lg md:text-2xl font-semibold tracking-tight mb-4">
            Fresh drops
          </h2>
          <Grid>
            {recentBookmarks.map((bookmark) => (
              <BookmarkCard key={bookmark._id} bookmark={bookmark} />
            ))}
          </Grid>
        </div>
      </Section>
    </div>
  );
}
