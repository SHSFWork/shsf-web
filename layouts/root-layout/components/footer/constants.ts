import { allProducts } from "@shsfwork/.content-collections/generated";

export const FOOTER__NAV = {
  root: [
    { href: "/", title: "Home" },
    { href: "/services", title: "Services" },
    { href: "/sponsorship", title: "Sponsorship" },
  ],
  openSource: [
    { href: "/guide", title: "Guide" },
    { href: "/bookmarks", title: "Bookmarks" },
    { href: "/boilerplates", title: "Boilerplates" },
    { href: "/starter-kits", title: "Starter Kits" },
  ],
  online: [
    { href: "https://github.com/shsfwork", title: "GitHub" },
    { href: "https://medium.com/shsfwork", title: "Medium" },
    { href: "https://www.linkedin.com/company/shsf-work", title: "LinkedIn" },
    { href: "https://bsky.app/profile/shsf.work", title: "Bluesky" },
  ],
  product: [
    { href: "/", title: "Home" },
    ...allProducts.map((product) => ({
      title: product.title,
      href: product.url,
    })),
  ],
};
