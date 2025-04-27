"use client";
import { MousePointerClick } from "lucide-react";
import { useState } from "react";
import BookmarkCardDetail from "@shsfwork/modules/bookmarks-page/components/bookmark-card-detail";

interface BookmarkCardProps {
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
  const [dialogOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <button className="space-y-1.5 cursor-pointer" onClick={handleDrawerOpen}>
        <div className="relative aspect-video w-full overflow-hidden">
          {bookmark.cover && (
            <div className="relative h-48 w-full">
              <img
                className="aspect-video bg-cover bg-center bg-no-repeat object-cover rounded-md overflow-hidden border"
                src={bookmark.cover || "/assets/fallback.avif"}
                alt={bookmark.title}
                width={1120}
                height={630}
                loading="lazy"
                draggable="false"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between rounded-md h-9 px-2 bg-background gap-2 text-sm border">
          <h4 className="font-medium max-w-48 truncate">{bookmark.title}</h4>
          <MousePointerClick size={16} className="size-4" />
        </div>
      </button>

      <BookmarkCardDetail
        open={dialogOpen}
        onOpenChange={(open) =>
          open ? handleDrawerOpen() : handleDrawerClose()
        }
        bookmark={bookmark}
      />
    </>
  );
}
