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
  // TODO:
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Products"
  )}&description=${encodeURI("Explore all our products")}`,
  description: "Explore our products",
  author,
};

export function ProductsSchema() {
  return <JsonLdSchema schema={product} />;
}

type ProductDetailsSchemaProps = {
  product: Product;
};

export function ProductDetailsSchema({ product }: ProductDetailsSchemaProps) {
  const url = absoluteUrl(product.url);
  const schema: BlogPosting = {
    "@type": "BlogPosting",
    headline: product.title,
    description: product.excerpt,

    url,
    image: product.og,

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
