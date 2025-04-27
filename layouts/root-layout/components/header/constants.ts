import { allProducts } from "@shsfwork/.content-collections/generated";
import { HeaderMenuItemProps } from "./types";
import { Bookmark, CakeSlice, Candy, Home } from "lucide-react";

export const HEADER_NAV: HeaderMenuItemProps[] = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services" },
  { title: "Blog", url: "/blog" },
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
  {
    title: "Open Source",
    url: "#",
    items: [
      {
        icon: Bookmark,
        url: "/bookmarks",
        title: "Bookmarks",
        excerpt: "Explore all our bookmarks",
      },

      {
        title: "Boilerplates",
        icon: Candy,
        excerpt: "Explore all our boilerplates",
        url: "/boilerplates",
      },
      {
        title: "Starter Kits",
        url: "/starter-kits",
        excerpt: "Explore all our starter kits",
        icon: CakeSlice,
      },
    ],
  },
];
