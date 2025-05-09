import { allProducts } from "@shsfwork/.content-collections/generated";

export const FOOTER_NAV_SECTIONS = [
  {
    title: "Root",
    id: "root",
    items: [
      { href: "/", title: "Home" },
      { href: "/services", title: "Services" },
      { href: "/sponsorship", title: "Sponsorship" },
    ],
  },
  {
    title: "Open Source",
    id: "open-source",
    items: [
      { href: "/guide", title: "Guide" },
      { href: "/bookmarks", title: "Bookmarks" },
      { href: "/boilerplates", title: "Boilerplates" },
      { href: "/starter-kits", title: "Starter Kits" },
    ],
  },
  {
    title: "Products",
    id: "product",
    items: [
      { href: "/products", title: "Home" },
      ...allProducts.map((product) => ({
        title: product.title,
        href: product.url,
      })),
    ],
  },
  {
    title: "Online",
    id: "online",
    items: [
      { href: "https://github.com/shsfwork", title: "GitHub" },
      { href: "https://medium.com/shsfwork", title: "Medium" },
      { href: "https://www.linkedin.com/company/shsf-work", title: "LinkedIn" },
      { href: "https://bsky.app/profile/shsf.work", title: "Bluesky" },
    ],
  },
];
