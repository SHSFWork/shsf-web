import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import MarketingProductsPage from "@shsfwork/modules/marketing-porducts-page";
import { Metadata } from "next";

export default function MarketingProducts() {
  return <MarketingProductsPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Products",
  description: "Explore all our products",
});
