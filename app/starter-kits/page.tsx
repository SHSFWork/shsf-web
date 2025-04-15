import { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import StarterKitsPage from "@shsfwork/modules/starter-kits-page";
import { getOrganizationRepositories } from "@shsfwork/services/github/index";

export default async function StarterKits() {
  // TODO: pagination
  const data = await getOrganizationRepositories();

  if (!data) return notFound();

  return <StarterKitsPage {...data} />;
}

export const metadata: Metadata = constructMetadata({
  title: "Starter Kits",
  description:
    "Browse a selection of fully built starter kits designed to kickstart your projects.",
});
