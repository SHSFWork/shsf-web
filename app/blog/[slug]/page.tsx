import { notFound } from "next/navigation";

import { allBlogs } from "@shsfwork/.content-collections/generated";

import BlogDetailPage from "@shsfwork/modules/blog-detail-page";
import { Metadata } from "next";
import { absoluteUrl } from "@shsfwork/lib/absoluteUrl";
import { SITE } from "@shsfwork/constants/common";

type BlogDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const resolvedParams = await params;
  const blog = allBlogs.find((p) => p._meta.path === resolvedParams.slug);
  if (!blog) {
    notFound();
  }

  return <BlogDetailPage blog={blog} />;
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = allBlogs.find((p) => p._meta.path === resolvedParams.slug);

  if (!blog) {
    return {};
  }

  return {
    title: `${blog.title} — ${SITE.title}`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: absoluteUrl(blog.url),
      images: [
        {
          url: blog.og,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      // images: [blog.image],
      creator: SITE.author,
    },
  };
}
