import { FolderIcon } from "lucide-react";
import Link from "@shsfwork/components/custom/link";
import DateTime from "@shsfwork/components/custom/date-time";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      title={collection.title}
      href={`/bookmarks/${collection._id}`}
      className="group"
    >
      <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
        <div className="bg-bone-100 dark:bg-outer-space-800 rounded-tl-none rounded-lg border-t-4 border-bone-300 dark:border-outer-space-700">
          <div className="absolute -top-4 left-0 w-2/5 h-4 bg-bone-300 dark:bg-outer-space-700 rounded-t-lg" />

          <div className="p-4 py-6 rounded-tl-none border rounded-tr-sm rounded-lg border-bone-300 dark:border-outer-space-700">
            <h3 className="flex items-center gap-2 text-outer-space-900 dark:text-bone-50 font-medium mb-3">
              <FolderIcon className="h-5 w-5" />
              <span className="line-clamp-1">{collection.title}</span>
            </h3>

            <p className="text-sm text-outer-space-700 dark:text-bone-300">
              {collection.count} bookmarks
            </p>

            <p className="text-xs text-outer-space-500 dark:text-bone-400 mt-2">
              <DateTime value={collection.lastUpdate} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
