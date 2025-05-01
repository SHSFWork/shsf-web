import PageHeader from "@shsfwork/components/custom/page-header";
import AboutMe from "./components/about-me";
import SponsorshipOptions from "./components/sponsorship-options";
import CurrentSupporters from "./components/current-supporters";
import CTA from "./components/cta";

interface SponsorshipPageProps {
  githubSponsors: GithubSponsorshipResponse;
  coffeeSubscriptions: SubscriptionResponse;
  coffeeSupporters: SupporterResponse;
}

export default function SponsorshipPage(props: SponsorshipPageProps) {
  const { githubSponsors, coffeeSubscriptions, coffeeSupporters } = props;
  return (
    <div>
      <PageHeader
        title="Sponsorship"
        description="Every contribution helps me create better tools and content for the community."
      />

      <AboutMe githubSponsors={githubSponsors} />

      <SponsorshipOptions githubSponsors={githubSponsors} />

      <CurrentSupporters
        githubSponsors={githubSponsors}
        coffeeSupporters={coffeeSupporters}
        coffeeSubscriptions={coffeeSubscriptions}
      />

      <CTA />
    </div>
  );
}
