import findProductByPath from "@shsfwork/lib/findProductByPath";
import {
  Smile,
  Zap,
  Heart,
  Sparkles,
  Paintbrush,
  Minimize,
  Search,
} from "lucide-react";

export const PRINCIPLES = [
  /* MOCK CONTENT */
  {
    title: "Performance Optimization",
    description:
      "Fast-loading websites that keep users engaged and improve conversion rates through efficient code and modern optimization techniques.",
    icon: Heart,
  },
  {
    title: "Accessibility First",
    description:
      "Creating inclusive digital experiences that work for everyone, regardless of ability or device, following WCAG standards.",
    icon: Search,
  },
  {
    title: "Responsive Design",
    description:
      "Seamless experiences across all devices and screen sizes, ensuring your digital presence looks and functions perfectly everywhere.",
    icon: Minimize,
  },
  {
    title: "SEO Implementation",
    description:
      "Building with search engines in mind from the ground up, with semantic HTML, optimized assets, and performance metrics that boost rankings.",
    icon: Zap,
  },
  {
    title: "User-Centered Approach",
    description:
      "Every decision guided by how it impacts the end user, creating intuitive interfaces that solve real problems.",
    icon: Smile,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Leveraging the latest frameworks and tools while ensuring stability and future-proof solutions.",
    icon: Paintbrush,
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "Writing code that's not just functional but sustainable, making future updates easier and more cost-effective.",
    icon: Sparkles,
  },
];

export const WALL_OF_LOVE = [
  {
    platform: "bluesky",
    comment:
      "Ozan has a natural skill for creating well-designed web apps and creating these in almost no time.",
    author: "Furkan Başaran",
    createdAt: "Dec 23, 2024",
    product: "screenie.me",
  },
  {
    platform: "bluesky",
    comment: "Shoutout to @ozantek.in for such a nice tool!",
    author: "Not a Nomad",
    createdAt: "Dec 25, 2024",
    link: "https://bsky.app/profile/notanomad.bsky.social/post/3le55zogz2s2p",
    product: "screenie.me",
  },
  {
    platform: "bluesky",
    comment: "This is cool. Easy, quick, looks great.",
    author: "Brandon Wind",
    createdAt: "Jan 03, 2025",
    product: "screenie.me",
  },
  {
    platform: "web",
    comment:
      "Easily capture and share BlueSky profile cards—now with a special Christmas touch. More integrations like GitHub and posts are on the way.🎅",
    author: "bskyinfo.com",
    createdAt: "Dec 23, 2024",
    product: "screenie.me",
  },
  {
    platform: "web",
    comment:
      "Screenie is a creative tool that transforms your Bluesky moments into visually appealing cards that are perfect for sharing.",
    author: "growbluesky.com",
    createdAt: "Dec 30, 2024",
    product: "screenie.me",
  },
];

export const PRODUCTS = [
  {
    ...findProductByPath("screenie"),
    titleClassName: "text-orange-600",
    className:
      "[grid-area:stack] grayscale hover:grayscale-0 hover:z-10 transition-all duration-500",
  },
  {
    ...findProductByPath("shsfui"),
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-4 translate-y-12 grayscale hover:grayscale-0 hover:z-20 transition-all duration-500",
  },
  {
    ...findProductByPath("myikas"),
    titleClassName: "text-emerald-500",
    className:
      "[grid-area:stack] translate-x-8 translate-y-24 grayscale hover:grayscale-0 hover:z-30 transition-all duration-500",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What technologies do you specialize in?",
    answer:
      "React, React Native, Next.js, TypeScript, and modern CSS frameworks with a focus on performance optimization and responsive design.",
  },
  {
    id: "faq-2",
    question: "What makes your approach different?",
    answer:
      "We blend technical expertise with business understanding to create solutions that look great and deliver measurable results.",
  },
  {
    id: "faq-3",
    question: "Do you offer maintenance and support?",
    answer:
      "Yes, we provide ongoing support packages to ensure your digital products remain secure, fast, and up-to-date.",
  },
  {
    id: "faq-4",
    question: "How do you handle project timelines?",
    answer:
      "We use an agile approach with clear milestones, regular deliverables, and transparent communication throughout the project lifecycle.",
  },
  {
    id: "faq-5",
    question: "Can you work with my existing design team?",
    answer:
      "Absolutely. We seamlessly integrate with your current workflow and team structure.",
  },
];
