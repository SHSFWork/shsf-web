import { useMemo } from "react";
import Section from "@shsfwork/components/semantic-elements/section";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@shsfwork/components/shadcn/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@shsfwork/components/shadcn/card";
import { Calendar, Check, Gift, Github, Pizza } from "lucide-react";
import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import { cn } from "@shsfwork/lib/cn";
import Link from "@shsfwork/components/custom/link";
import { DEV_ONLINE } from "@shsfwork/constants/common";

interface SponsorshipOptionsProps {
  githubSponsors: GithubSponsorshipResponse;
}

export default function SponsorshipOptions({
  githubSponsors,
}: SponsorshipOptionsProps) {
  const { monthlyGithubTiers, oneTimeGithubTiers } = useMemo(() => {
    const githubTiers =
      githubSponsors?.viewer?.sponsorsListing?.tiers?.nodes || [];

    return {
      monthlyGithubTiers: githubTiers.filter((tier) => !tier.isOneTime),
      oneTimeGithubTiers: githubTiers.filter((tier) => tier.isOneTime),
    };
  }, [githubSponsors]);

  return (
    <Section id="sponsorship-options" className="py-8 md:py-12">
      <Tabs defaultValue="monthly">
        <TabsList className="grid grid-cols-2 w-full max-w-lg mx-auto mb-8 border h-10">
          <TabsTrigger value="monthly" className="flex items-center gap-2">
            <Calendar />
            Monthly Support
          </TabsTrigger>
          <TabsTrigger value="one-time" className="flex items-center gap-2">
            <Gift />
            One-time Donation
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="monthly"
          className="flex items-start justify-center gap-4 flex-wrap"
        >
          {monthlyGithubTiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                tier.monthlyPriceInDollars >= 15
                  ? "border-t-4 border-t-primary"
                  : "border-t-4"
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {tier.description || "Supporter"}
                  </CardTitle>
                </div>
                <CardDescription>Monthly recurring support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  ${tier.monthlyPriceInDollars}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    /month
                  </span>
                </div>

                <ul className="space-y-2">
                  {getTierFeatures(tier.monthlyPriceInDollars).map(
                    (feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  title={DEV_ONLINE.sponsor.github.title}
                  href={DEV_ONLINE.sponsor.github.href}
                  className={cn("w-full", buttonVariants({}))}
                >
                  <Github />
                  Sponsor ${tier.monthlyPriceInDollars}/month
                </Link>
              </CardFooter>
            </Card>
          ))}

          <PizzaCard />
        </TabsContent>

        <TabsContent
          value="one-time"
          className="flex items-start justify-center gap-4 flex-wrap"
        >
          {oneTimeGithubTiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                tier.monthlyPriceInDollars >= 300
                  ? "border-t-4 border-t-primary"
                  : "border-t-4"
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {tier.description ||
                      (tier.monthlyPriceInDollars >= 300
                        ? "Investor"
                        : "Sponsor")}
                  </CardTitle>
                </div>
                <CardDescription>One-time support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  ${tier.monthlyPriceInDollars}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    one-time
                  </span>
                </div>

                <ul className="space-y-2">
                  {getTierFeatures(tier.monthlyPriceInDollars, true).map(
                    (feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  title={DEV_ONLINE.sponsor.github.title}
                  href={DEV_ONLINE.sponsor.github.href}
                  className={cn("w-full", buttonVariants({}))}
                >
                  <Gift />
                  Donate ${tier.monthlyPriceInDollars}
                </Link>
              </CardFooter>
            </Card>
          ))}
          <PizzaCard />
        </TabsContent>
      </Tabs>
    </Section>
  );
}

const PizzaCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Pizza Supporter
          </CardTitle>
        </div>
        <CardDescription>Buy me a pizza</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          $5
          <span className="text-sm font-normal text-muted-foreground">
            {" "}
            per pizza
          </span>
        </div>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sand-dune-500 flex-shrink-0" />
            <span className="text-sm">Support my work</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sand-dune-500 flex-shrink-0" />
            <span className="text-sm">Leave a custom message</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sand-dune-500 flex-shrink-0" />
            <span className="text-sm">Name in supporters list</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Link
          title={DEV_ONLINE.sponsor.buymeacoffee.title}
          href={DEV_ONLINE.sponsor.buymeacoffee.href}
          className={cn(
            "w-full",
            buttonVariants({
              variant: "outline",
            })
          )}
        >
          <Pizza />
          Buy Me a Pizza
        </Link>
      </CardFooter>
    </Card>
  );
};

const getTierFeatures = (price: number, isOneTime = false) => {
  const baseFeatures = [
    "Support open-source development",
    "Name in sponsors list",
  ];

  if (isOneTime) {
    if (price >= 300) {
      return [
        ...baseFeatures,
        "Premium supporter badge",
        "Priority feature requests",
        "1 hour consultation call",
        "Listed as Investor in README",
      ];
    }
    if (price >= 150) {
      return [
        ...baseFeatures,
        "Gold supporter badge",
        "Priority feature requests",
        "Listed as Sponsor in README",
      ];
    }
    return baseFeatures;
  } else {
    if (price >= 15) {
      return [
        ...baseFeatures,
        "Early access to projects",
        "Priority support",
        "Listed as Contributor in README",
      ];
    }
    return baseFeatures;
  }
};
