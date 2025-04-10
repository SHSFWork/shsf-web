import { notFound } from "next/navigation";

import { allProducts } from "@shsfwork/.content-collections/generated";

import ProductDetailPage from "@shsfwork/modules/marketing-product-detail-page";

type MarketingProductDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MarketingProductDetails({
  params,
}: MarketingProductDetailsProps) {
  const resolvedParams = await params;
  const product = allProducts.find((p) => p._meta.path === resolvedParams.slug);
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}

export const generateMetadata = async ({
  params,
}: MarketingProductDetailsProps) => {
  const resolvedParams = await params;
  const product = allProducts.find((p) => p._meta.path === resolvedParams.slug);
  if (!product) {
    return;
  }

  return {
    title: product.title,
    description: product.excerpt,
    openGraph: {
      title: product.title,
      description: product.excerpt,
      type: "article",
      alternates: {
        canonical: product.url,
      },
    },
  };
};
