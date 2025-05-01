"use client";
import * as React from "react";
import { Card, CardContent } from "@shsfwork/components/custom/3d-card";
import SponsorCard from "./sponsor-card";
import { Clock, Zap } from "lucide-react";

interface GithubSponsorsProps {
  githubSponsors: GithubSponsorshipResponse;
}

export default function GithubSponsors({
  githubSponsors,
}: GithubSponsorsProps) {
  const {
    recurringTiers,
    oneTimeTiers,
    monthlyCustomSponsors,
    oneTimeCustomSponsors,
    sponsorsByTier,
  } = React.useMemo(() => {
    const tiers = githubSponsors?.viewer?.sponsorsListing?.tiers?.nodes || [];
    const sponsorships =
      githubSponsors?.viewer?.sponsorshipsAsMaintainer?.nodes || [];

    const recurringTiers = tiers.filter((tier) => !tier.isOneTime);
    const oneTimeTiers = tiers.filter((tier) => tier.isOneTime);

    const knownTierIds = tiers.map((tier) => tier.id);
    const customSponsors = sponsorships.filter(
      (sponsor) => !knownTierIds.includes(sponsor.tier?.id)
    );

    const monthlyCustomSponsors = customSponsors.filter(
      (s) => !s.tier?.isOneTime
    );
    const oneTimeCustomSponsors = customSponsors.filter(
      (s) => s.tier?.isOneTime
    );

    const sponsorsByTier: { [key: string]: typeof sponsorships } = {};
    tiers.forEach((tier) => {
      sponsorsByTier[tier.id] = sponsorships.filter(
        (sponsor) => sponsor.tier?.id === tier.id
      );
    });

    return {
      recurringTiers,
      oneTimeTiers,
      monthlyCustomSponsors,
      oneTimeCustomSponsors,
      sponsorsByTier,
    };
  }, [githubSponsors]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4" />
          <h3 className="text-lg font-medium">Monthly Sponsors</h3>
        </div>

        <div className="space-y-4">
          {recurringTiers.length > 0 ? (
            recurringTiers.map((tier) => (
              <SponsorCard
                key={`monthly-${tier.id}`}
                title={tier.name}
                description={tier.description}
                sponsors={sponsorsByTier[tier.id]}
              />
            ))
          ) : (
            <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                No monthly sponsor tiers available.
              </CardContent>
            </Card>
          )}

          {monthlyCustomSponsors.length > 0 && (
            <SponsorCard
              title="Custom Monthly"
              description="Other monthly sponsors"
              sponsors={monthlyCustomSponsors}
            />
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4" />
          <h3 className="text-lg font-medium">One-time Sponsors</h3>
        </div>

        <div className="space-y-4">
          {oneTimeTiers.length > 0 ? (
            oneTimeTiers.map((tier) => (
              <SponsorCard
                key={`onetime-${tier.id}`}
                title={tier.name}
                description={tier.description}
                sponsors={sponsorsByTier[tier.id]}
              />
            ))
          ) : (
            <Card>
              <CardContent className="py-6 text-center text-muted-foreground">
                No one-time sponsor tiers available.
              </CardContent>
            </Card>
          )}

          {oneTimeCustomSponsors.length > 0 && (
            <SponsorCard
              title="Custom One-time"
              description="Other one-time sponsors"
              sponsors={oneTimeCustomSponsors}
            />
          )}
        </div>
      </div>
    </div>
  );
}
