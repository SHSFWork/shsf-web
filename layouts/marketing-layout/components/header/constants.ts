import findProductByPath from "@shsfwork/lib/findProductByPath";
import { Book, Trees } from "lucide-react";

export const HEADER_NAV = [
  { title: "Home", url: "#" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "All Products",
        description: "Explore all our products",
        icon: Book,
        url: "/products",
      },
      {
        title: findProductByPath("unarkhive")?.title,
        description: findProductByPath("unarkhive")?.excerpt,
        icon: Trees,
        url: findProductByPath("unarkhive")?.url,
      },
    ],
  },
];
