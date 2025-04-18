import FeaturedCard from "./featured-card";
import { WEB_APPS_FEATURED_DATA } from "../constants";

export default function WebAppsFeatured() {
  return (
    <FeaturedCard
      title="Web Applications"
      items={WEB_APPS_FEATURED_DATA}
      hero={
        <div className="relative w-full max-w-md h-64 md:h-80 overflow-hidden bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700">
          <div className="h-12 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto pr-12 bg-white dark:bg-zinc-800 text-center text-sm rounded-full py-1 px-4 border border-zinc-200 dark:border-zinc-700">
              app.example.com
            </div>
          </div>
          <div className="flex h-full">
            <div className="w-48 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-700 p-4 hidden md:block">
              <div className="w-full h-6 bg-zinc-200 dark:bg-zinc-800 rounded mb-4"></div>
              <div className="w-full h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
              <div className="w-5/6 h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-6"></div>
              <div className="w-full h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
              <div className="w-2/3 h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
            </div>
            <div className="flex-1 p-4 overflow-hidden">
              <div className="w-full h-8 bg-zinc-100 dark:bg-zinc-800 rounded mb-4"></div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="h-24 bg-blue-100 dark:bg-blue-900/20 rounded"></div>
                <div className="h-24 bg-green-100 dark:bg-green-900/20 rounded"></div>
              </div>
              <div className="w-full h-4 bg-zinc-100 dark:bg-zinc-800 rounded mb-2"></div>
              <div className="w-5/6 h-4 bg-zinc-100 dark:bg-zinc-800 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
            </div>
          </div>
        </div>
      }
    />
  );
}
