import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import ProductsPage from "@shsfwork/modules/porducts-page";
import { Metadata } from "next";

export default function Products() {
  return <ProductsPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Featured Products",
  description:
    "A curated collection of websites, applications, and digital products built with modern frameworks and optimized for performance.",
  // TODO:
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Featured Products"
  )}&description=${encodeURI(
    "A curated collection of websites, applications, and digital products built with modern frameworks and optimized for performance."
  )}`,
});
