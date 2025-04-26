import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import BlogPage from "@shsfwork/modules/blog-page";
import { Metadata } from "next";

export default function Blog() {
  return <BlogPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Blog",
  description:
    "Stay updated with the latest news, tutorials, and insights from the world of web development.",
});
