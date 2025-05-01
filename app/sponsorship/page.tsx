import { constructMetadata } from "@shsfwork/lib/constructMetadata";
import { Metadata } from "next";
import SponsorshipPage from "@shsfwork/modules/sponsorship-page";
import {
  getBuyCoffeeOneTimeSupporters,
  getBuyCoffeeSubscriptions,
} from "@shsfwork/services/buy-coffee";
import { getGithubSponsors } from "@shsfwork/services/github";
import { notFound } from "next/navigation";

export default async function Sponsorship() {
  const [githubSponsors, coffeeSubscriptions, coffeeSupporters] =
    await Promise.all([
      getGithubSponsors(),
      getBuyCoffeeSubscriptions(),
      getBuyCoffeeOneTimeSupporters(),
    ]);

  if (!githubSponsors || !coffeeSubscriptions || !coffeeSupporters)
    return notFound();

  return (
    <SponsorshipPage
      githubSponsors={githubSponsors}
      coffeeSubscriptions={coffeeSubscriptions}
      coffeeSupporters={coffeeSupporters}
    />
  );
}

export const metadata: Metadata = constructMetadata({
  title: "Sponsorship",
  description:
    "Support open source work and projects through sponsorship. Every contribution helps me create better tools and content for the community.",
});


