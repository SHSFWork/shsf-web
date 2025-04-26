import { type Blog } from "content-collections";

import Image from "next/image";

import Markdown from "@shsfwork/components/mdx/markdown";
import Balancer from "@shsfwork/components/semantic-elements/balancer";
import NavigationButton from "./components/navigation-button";

import { createPrevAndNext } from "./lib";
import DateTime from "../../components/custom/date-time";
import ScrollToTop from "./components/scroll-to-top";
import { CCBlogDetailsSchema } from "@shsfwork/modules/blog-page/components/schema";
import { Badge } from "@shsfwork/components/shadcn/badge";

type BlogDetailsPageProps = {
  blog: Blog;
};

export default function BlogDetailsPage({ blog }: BlogDetailsPageProps) {
  const { next, prev } = createPrevAndNext(blog);

  return (
    <>
      <CCBlogDetailsSchema blog={blog} />

      <figure className="flex flex-col gap-4 pb-4">
        <div className="aspect-video relative rounded-xl overflow-hidden border shadow">
          <Image
            src={blog.image.url}
            alt={blog.title}
            blurDataURL={
              blog.image.blurDataURL || "data:image/svg+xml;base64,AAAA"
            }
            placeholder={blog.image.blurDataURL ? "blur" : undefined}
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            draggable={false}
            quality={90}
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="text-xl text-muted-foreground">
            <Balancer id="blog-excerpt">{blog.excerpt}</Balancer>
          </p>
        </div>
      </figure>

      <div className="flex justify-between py-4 text-muted-foreground border-b">
        <p>{blog.readingTime}</p>
        <DateTime title="Bloged at" value={blog.createdAt} />
      </div>

      <Markdown code={blog.content.mdx} />

      <div className="flex items-center justify-between gap-4 flex-wrap py-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-xs text-muted-foreground">
            Category:
          </span>
          <Badge className="capitalize">{blog.category}</Badge>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-xs text-muted-foreground">
            Tags:
          </span>
          <div className="flex gap-1 flex-wrap">
            {blog.tags.map((tag) => (
              <Badge key={tag} className="capitalize" variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center border-t pt-4">
        <NavigationButton type="prev" blog={prev} />
        <ScrollToTop />
        <NavigationButton type="next" blog={next} />
      </nav>
    </>
  );
}
