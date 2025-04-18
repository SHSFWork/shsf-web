import { allProducts } from "@shsfwork/.content-collections/generated";
import { HeaderMenuItemProps } from "./types";
import { Home } from "lucide-react";

export const HEADER_NAV: HeaderMenuItemProps[] = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "All Products",
        icon: Home,
        excerpt: "Explore all our products",
        url: "/products",
      },

      ...allProducts.map((product) => ({
        title: product.title,
        url: product.url,
        excerpt: product.excerpt,
        icon: product.icon,
      })),
    ],
  },
  { title: "Boilerplates", url: "/boilerplates" },
  { title: "Starter Kits", url: "/starter-kits" },
];
