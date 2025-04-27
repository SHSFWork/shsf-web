"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@shsfwork/components/shadcn/dialog";
import Link from "@shsfwork/components/custom/link";
import { Button } from "@shsfwork/components/custom/3d-button";
import { ArrowUpRight } from "lucide-react";
import { getBookmarkTags, getBookmarkTimeAgo } from "@shsfwork/lib/raindrop";

interface BookmarkCardDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookmark: Bookmark;
}

export default function BookmarkCardDetail(props: BookmarkCardDetailProps) {
  const { open, onOpenChange, bookmark } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start mr-3 line-clamp-3">
            {bookmark?.title}
          </DialogTitle>
          {bookmark?.note && (
            <DialogDescription className="line-clamp-6 text-start">
              <span className="font-medium">Note: </span>
              <span>{bookmark?.note}</span>
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-2 overflow-y-auto max-h-[560px]">
          <div className="h-8 w-auto flex justify-start items-baseline gap-1 border rounded-md px-2 py-1 flex-nowrap overflow-x-auto overflow-y-hidden">
            <span>Tags:</span>
            <span className="shrink-0">
              {bookmark.tags && getBookmarkTags(bookmark.tags)}
            </span>
          </div>

          <div className="space-y-2 p-4 rounded-md border">
            <div className="flex item-center justify-between ">
              <Button
                variant="outline"
                size="sm"
                className="relative p-0 px-2 h-7"
              >
                <Link
                  title="Visit Bookmark"
                  className="flex items-center gap-1"
                  href={bookmark.link}
                >
                  <span className="text-sm">Explore</span>
                  <ArrowUpRight size={16} className="size-4" />
                </Link>
              </Button>
              <time className="text-sm leading-none flex items-center justify-end text-muted-foreground">
                {getBookmarkTimeAgo(String(bookmark?.lastUpdate))}
              </time>
            </div>
            <figure className="aspect-video overflow-hidden rounded-md border">
              <img
                className="aspect-video bg-cover bg-center bg-no-repeat object-cover rounded-md"
                src={bookmark.cover}
                alt={bookmark.title}
                width={1200}
                height={630}
                loading="lazy"
                draggable={false}
              />
            </figure>
            {bookmark.excerpt && (
              <div className="space-y-1">
                <h6 className="font-semibold text-base">Excerpt:</h6>
                <p className="">{bookmark.excerpt}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center border rounded-md px-2 py-1 text-muted-foreground">
            <Link
              title="Visit Bookmark"
              className="text-sm truncate max-w-[240px]"
              href={bookmark.link}
            >
              {bookmark.domain}
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
