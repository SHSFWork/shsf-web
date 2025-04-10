import { SITE } from "@shsfwork/constants/common";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/public/"],
    },
    sitemap: SITE.url + "/sitemap.xml",
  };
}
