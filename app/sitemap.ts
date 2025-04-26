import { allBlogs, allProducts } from "content-collections";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const domain = headersList.get("host") as string;
  const protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },

    {
      url: `${protocol}://${domain}/services`,
      lastModified: new Date(),
    },

    {
      url: `${protocol}://${domain}/boilerplates`,
      lastModified: new Date(),
    },

    {
      url: `${protocol}://${domain}/starter-kits`,
      lastModified: new Date(),
    },

    {
      url: `${protocol}://${domain}/terms-of-service`,
      lastModified: new Date(),
    },

    ...allProducts.map((p) => ({
      url: `${protocol}://${domain}/${p.url}`,
      lastModified: p.lastModification,
    })),

    ...allBlogs.map((b) => ({
      url: `${protocol}://${domain}/${b.url}`,
      lastModified: b.lastModification,
    })),
  ];
}
