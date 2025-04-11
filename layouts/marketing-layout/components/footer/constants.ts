import { allProducts } from "@shsfwork/.content-collections/generated";

export const FOOTER_MARKETING_NAV = {
  website: [
    { href: "/", title: "Home" },
    { href: "/products", title: "Products" },
  ],
  online: [{ href: "https://github.com/shsfwork", title: "GitHub" }],
  product: [
    ...allProducts.map((product) => ({
      title: product.title,
      href: product.url,
    })),
  ],
};
