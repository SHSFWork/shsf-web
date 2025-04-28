import { type Guide } from "content-collections";

import Image from "next/image";

import Markdown from "@shsfwork/components/mdx/markdown";
import Balancer from "@shsfwork/components/semantic-elements/balancer";
import NavigationButton from "./components/navigation-button";

import { createPrevAndNext } from "./lib";
import DateTime from "../../components/custom/date-time";
import ScrollToTop from "./components/scroll-to-top";
import { CCGuideDetailsSchema } from "@shsfwork/modules/guide-page/components/schema";
import { Badge } from "@shsfwork/components/shadcn/badge";

type GuideDetailsPageProps = {
  guide: Guide;
};

export default function GuideDetailsPage({ guide }: GuideDetailsPageProps) {
  const { next, prev } = createPrevAndNext(guide);

  return (
    <>
      <CCGuideDetailsSchema guide={guide} />

      <figure className="flex flex-col gap-4 pb-4">
        <div className="aspect-video relative rounded-xl overflow-hidden border shadow">
          <Image
            src={guide.image.url}
            alt={guide.title}
            blurDataURL={
              guide.image.blurDataURL || "data:image/svg+xml;base64,AAAA"
            }
            placeholder={guide.image.blurDataURL ? "blur" : undefined}
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            draggable={false}
            quality={90}
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{guide.title}</h1>
          <p className="text-xl text-muted-foreground">
            <Balancer id="guide-excerpt">{guide.excerpt}</Balancer>
          </p>
        </div>
      </figure>

      <div className="flex justify-between py-4 text-muted-foreground border-b">
        <p>{guide.readingTime}</p>
        <DateTime title="Guideed at" value={guide.createdAt} />
      </div>

      <Markdown code={guide.content.mdx} />

      <div className="flex items-center justify-between gap-4 flex-wrap py-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-xs text-muted-foreground">
            Category:
          </span>
          <Badge className="capitalize">{guide.category}</Badge>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-xs text-muted-foreground">
            Tags:
          </span>
          <div className="flex gap-1 flex-wrap">
            {guide.tags.map((tag) => (
              <Badge key={tag} className="capitalize" variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center border-t pt-4">
        <NavigationButton type="prev" guide={prev} />
        <ScrollToTop />
        <NavigationButton type="next" guide={next} />
      </nav>
    </>
  );
}
