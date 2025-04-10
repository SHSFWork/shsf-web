"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { allProducts } from "content-collections";
import { getTocType, TocType } from "@shsfwork/lib/toc"; // TocType'ı import edin
import Toc from "@shsfwork/components/mdx/toc";
import BackButton from "@shsfwork/components/custom/back-button";
import NewsletterBgEffect from "@shsfwork/layouts/marketing-layout/components/footer/components/newsletter-bg-effect";
import { NewsletterSection } from "@shsfwork/components/custom/newsletter";

export default function AsideRight() {
  const pathname = usePathname();
  const [toc, setToc] = React.useState<TocType | null>(null);

  const slug = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] === "products" && segments.length > 1
      ? segments.slice(1).join("/")
      : "";
  }, [pathname]);

  const product = React.useMemo(
    () => allProducts.find((p) => p._meta.path === slug),
    [slug]
  );

  React.useEffect(() => {
    if (!product) return;

    let isMounted = true;
    const loadToc = async () => {
      try {
        const tocData = await getTocType(product.content.raw);
        if (isMounted) setToc(tocData);
      } catch (error) {
        console.error("Error loading TOC:", error);
      }
    };

    loadToc();
    return () => {
      isMounted = false;
    };
  }, [product]);

  if (!product) return null;

  return (
    <>
      <BackButton />
      {toc && <Toc toc={toc} />}
      <div className="hidden md:block relative overflow-hidden bg-sidebar rounded-xl px-4">
        <NewsletterSection />
        <NewsletterBgEffect />
      </div>
    </>
  );
}
