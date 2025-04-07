import { Book, Sunset, Trees } from "lucide-react";

export const HEADER_NAV = [
  { title: "Home", url: "#" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "SHSF UI",
        description: "A component library for building beautiful UIs",
        icon: Book,
        url: "#",
      },
      {
        title: "Unarkhive",
        description: "A powerful tool for managing your data",
        icon: Trees,
        url: "#",
      },
      {
        title: "Screenie",
        description: "Capture and share your screen with ease",
        icon: Sunset,
        url: "#",
      },
    ],
  },
  { title: "Blog", url: "#" },
];
