import { Product } from "content-collections";

import { Blog, BlogPosting, Person } from "schema-dts";
import { SITE } from "@shsfwork/constants/common";
import { absoluteUrl, baseUrl } from "@shsfwork/lib/absoluteUrl";

const author: Person = {
  "@type": "Person",
  name: SITE.author,
  url: baseUrl(),
};

const product: Blog = {
  "@type": "Blog",
  name: SITE.domain,
  url: baseUrl(),
  image: absoluteUrl("/og"),
  description: "Explore our products",
  author,
};

export function MarketingProductsSchema() {
  return <JsonLdSchema schema={product} />;
}

type MarketingProductDetailsSchemaProps = {
  product: Product;
};

export function MarketingProductDetailsSchema({
  product,
}: MarketingProductDetailsSchemaProps) {
  const url = absoluteUrl(product.url);
  const schema: BlogPosting = {
    "@type": "BlogPosting",
    headline: product.title,
    description: product.excerpt,

    url,
    image: absoluteUrl("/og"),

    datePublished: product.createdAt,
    dateCreated: product.createdAt,
    dateModified: product.lastModification,

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
