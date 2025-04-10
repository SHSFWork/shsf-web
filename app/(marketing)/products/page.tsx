import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import MarketingProductsPage from "@shsfwork/modules/marketing-porducts-page";
import { Metadata } from "next";

export default function MarketingProducts() {
  return <MarketingProductsPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Products",
  description: "Explore our products",
  // TODO:
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Products"
  )}&description=${encodeURI("Explore all our products")}`,
});
