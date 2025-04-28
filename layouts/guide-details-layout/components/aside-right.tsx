"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { allGuides } from "content-collections";
import { getTocType, TocType } from "@shsfwork/lib/toc";
import Toc from "@shsfwork/components/mdx/toc";
import BackButton from "@shsfwork/components/custom/back-button";
import NewsletterBgEffect from "@shsfwork/layouts/root-layout/components/footer/components/newsletter-bg-effect";
import { NewsletterSection } from "@shsfwork/components/custom/newsletter";
import { useMounted } from "@shsfwork/hooks/useMounted";
import Author from "@shsfwork/layouts/guide-details-layout/components/author";

export default function AsideRight() {
  const mounted = useMounted();
  const pathname = usePathname();
  const [toc, setToc] = React.useState<TocType | null>(null);

  const slug = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] === "guide" && segments.length > 1
      ? segments.slice(1).join("/")
      : "";
  }, [pathname]);

  const guide = React.useMemo(
    () => allGuides.find((p) => p._meta.path === slug),
    [slug]
  );

  React.useEffect(() => {
    if (!guide) return;
    const loadToc = async () => {
      try {
        const tocData = await getTocType(guide.content.raw);
        if (mounted) setToc(tocData);
      } catch (error) {
        console.error("Error loading TOC:", error);
      }
    };
    loadToc();
  }, [guide, mounted]);

  if (!guide) return null;

  return (
    <>
      <BackButton />
      <Author />
      {toc && <Toc toc={toc} />}
      <div className="hidden lg:block relative overflow-hidden bg-accent rounded-xl px-4">
        <NewsletterSection />
        <NewsletterBgEffect />
      </div>
    </>
  );
}
