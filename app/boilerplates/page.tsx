import { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import BoilerplatesPage from "@shsfwork/modules/boilerplates-page";
import { getOrganizationRepositories } from "@shsfwork/services/github/index";

export default async function Boilerplates() {
  // TODO: pagination
  const data = await getOrganizationRepositories();

  if (!data) return notFound();

  return <BoilerplatesPage {...data} />;
}

export const metadata: Metadata = constructMetadata({
  title: "Boilerplates",
  description: "Explore and utilize starter templates for various projects.",
  image: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
    "Boilerplates"
  )}&description=${encodeURI(
    "Explore and utilize starter templates for various projects."
  )}`,
});
