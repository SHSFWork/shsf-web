import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import ProductsPage from "@shsfwork/modules/porducts-page";
import { Metadata } from "next";

export default function Products() {
  return <ProductsPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Products",
  description:
    "A curated collection of websites, applications, and digital products built with modern frameworks and optimized for performance.",
});
