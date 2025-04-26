import { allBlogs } from "@shsfwork/.content-collections/generated";
import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";

import { CCBlogSchema } from "./components/schema";
import BlogCard from "./components/blog-card";

export default function BlogPage() {
  return (
    <div>
      <CCBlogSchema />

      <PageHeader
        title="Blog"
        description="Stay updated with the latest news, tutorials, and insights from the world of web development."
        className="mb-8"
      />
      <Section id="blog">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {allBlogs.map((b, i) => (
            <li key={i}>
              <article>
                <BlogCard blog={b} />
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
