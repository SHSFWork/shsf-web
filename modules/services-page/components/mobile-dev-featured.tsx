import { MOBILE_DEV_FEATURED_DATA } from "../constants";
import FeaturedCard from "./featured-card";

export default function MobileDevFeatured() {
  return (
    <FeaturedCard
      title="Mobile Development"
      items={MOBILE_DEV_FEATURED_DATA}
      hero={
        <div className="relative h-78 w-full max-w-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-72 rounded-3xl border-4 border-foreground shadow-xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
          </div>
          <div className="absolute top-6 right-1/2 transform translate-x-6 w-36 h-72 rounded-3xl border-4 border-foreground shadow-xl overflow-hidden rotate-6">
            <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-indigo-600"></div>
          </div>
        </div>
      }
    />
  );
}
