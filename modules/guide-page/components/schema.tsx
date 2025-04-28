import { Guide as CCGuide } from "content-collections";

import { Blog, BlogPosting, Person } from "schema-dts";
import { SITE } from "@shsfwork/constants/common";
import { absoluteUrl, baseUrl } from "@shsfwork/lib/absoluteUrl";

const author: Person = {
  "@type": "Person",
  name: SITE.author,
  url: baseUrl(),
};

const ccGuide: Blog = {
  "@type": "Blog",
  name: SITE.domain,
  url: baseUrl(),
  // TODO:
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Guide"
  )}&description=${encodeURI("Explore all our guide")}`,
  description: "Explore our guide",
  author,
};

export function CCGuideSchema() {
  return <JsonLdSchema schema={ccGuide} />;
}

type CCGuideDetailsSchemaProps = {
  guide: CCGuide;
};

export function CCGuideDetailsSchema({ guide }: CCGuideDetailsSchemaProps) {
  const url = absoluteUrl(guide.url);
  const schema: BlogPosting = {
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.excerpt,

    url,
    image: guide.og,

    datePublished: guide.createdAt,
    dateCreated: guide.createdAt,
    dateModified: guide.lastModification,

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
