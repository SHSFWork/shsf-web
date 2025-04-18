import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import { Metadata } from "next";
import ServicesPage from "@shsfwork/modules/services-page";

export default function Services() {
  return <ServicesPage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Crafting high-performance web and mobile experiences with modern tools.",
});
