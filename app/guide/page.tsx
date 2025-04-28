import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import GuidePage from "@shsfwork/modules/guide-page";
import { Metadata } from "next";

export default function Guide() {
  return <GuidePage />;
}

export const metadata: Metadata = constructMetadata({
  title: "Guide",
  description:
    "Stay updated with the latest news, tutorials, and insights from the world of web development.",
});
