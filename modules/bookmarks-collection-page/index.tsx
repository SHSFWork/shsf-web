import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";
import BookmarkCard from "@shsfwork/modules/bookmarks-page/components/bookmark-card";
import Grid from "@shsfwork/modules/bookmarks-page/components/grid";

interface BookmarksCollectionPageProps {
  bookmarksData: Bookmarks;
  title: string;
}

export default function BookmarksCollectionPage(
  props: BookmarksCollectionPageProps
) {
  const { bookmarksData, title } = props;

  const bookmarks = bookmarksData.items;
  const bookmarkCount = bookmarksData.count;

  return (
    <div>
      <PageHeader
        title={title}
        description={`${bookmarkCount} bookmark${
          bookmarkCount !== 1 ? "s" : ""
        } in this collection`}
        className="mb-8"
      />

      <Section id={title}>
        <Grid>
          {bookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark._id} bookmark={bookmark} />
          ))}
        </Grid>
      </Section>
    </div>
  );
}
