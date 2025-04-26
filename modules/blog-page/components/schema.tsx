import { Blog as CCBlog } from "content-collections";

import { Blog, BlogPosting, Person } from "schema-dts";
import { SITE } from "@shsfwork/constants/common";
import { absoluteUrl, baseUrl } from "@shsfwork/lib/absoluteUrl";

const author: Person = {
  "@type": "Person",
  name: SITE.author,
  url: baseUrl(),
};

const ccBlog: Blog = {
  "@type": "Blog",
  name: SITE.domain,
  url: baseUrl(),
  // TODO:
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Blog"
  )}&description=${encodeURI("Explore all our blog")}`,
  description: "Explore our blog",
  author,
};

export function CCBlogSchema() {
  return <JsonLdSchema schema={ccBlog} />;
}

type CCBlogDetailsSchemaProps = {
  blog: CCBlog;
};

export function CCBlogDetailsSchema({ blog }: CCBlogDetailsSchemaProps) {
  const url = absoluteUrl(blog.url);
  const schema: BlogPosting = {
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,

    url,
    image: blog.og,

    datePublished: blog.createdAt,
    dateCreated: blog.createdAt,
    dateModified: blog.lastModification,

    author,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl(),
    },
  };
  return <JsonLdSchema schema={schema} />;
}

type JsonLdSchemaProps = {
  schema: object;
};

function JsonLdSchema({ schema }: JsonLdSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...schema,
        }),
      }}
    />
  );
}
