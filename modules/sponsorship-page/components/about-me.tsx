"use client";
import * as React from "react";
import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import { Card, CardContent } from "@shsfwork/components/custom/3d-card";
import Link from "@shsfwork/components/custom/link";
import Section from "@shsfwork/components/semantic-elements/section";
import { Progress } from "@shsfwork/components/shadcn/progress";
import { DEV_ONLINE } from "@shsfwork/constants/common";
import { Github, Pizza } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface AboutMeProps {
  githubSponsors: GithubSponsorshipResponse;
}

export default function AboutMe({ githubSponsors }: AboutMeProps) {
  const { activeGithubGoal, activeSponsors, goalPercentage } =
    React.useMemo(() => {
      const activeGithubGoal =
        githubSponsors?.viewer?.sponsorsListing?.activeGoal;
      const githubSponsorships =
        githubSponsors?.viewer?.sponsorshipsAsMaintainer?.nodes || [];
      const activeSponsors = githubSponsorships.filter(
        (s) => s.isActive
      ).length;

      const goalPercentage = activeGithubGoal
        ? Math.min(100, (activeSponsors / activeGithubGoal.targetValue) * 100)
        : 0;

      return {
        activeGithubGoal,
        activeSponsors,
        goalPercentage,
      };
    }, [githubSponsors]);

  return (
    <Section id="about-work" className="py-8 md:py-12">
      <Card variant="dots">
        <CardContent className="grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-2 p-6">
          <div className="prose dark:prose-invert">
            <ReactMarkdown>
              {githubSponsors?.viewer?.sponsorsListing?.fullDescription}
            </ReactMarkdown>
          </div>

          <div className="text-center flex item-center justify-center flex-col gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">
                {activeGithubGoal?.title}
              </h3>
              <Progress value={goalPercentage} className="h-3 mb-2" />
              <div className="flex justify-between text-sm">
                <span>
                  {activeSponsors} of {activeGithubGoal?.targetValue || "?"}{" "}
                  sponsors
                </span>
                <span className="font-medium">
                  {Math.round(goalPercentage)}%
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                className={buttonVariants({
                  variant: "bone",
                  size: "lg",
                })}
                title={DEV_ONLINE.sponsor.github.title}
                href={DEV_ONLINE.sponsor.github.href}
              >
                <Github />
                Sponsor on GitHub
              </Link>
              <span className="text-sm font-medium">or</span>
              <Link
                className={buttonVariants({
                  variant: "outline",
                })}
                title={DEV_ONLINE.sponsor.buymeacoffee.title}
                href={DEV_ONLINE.sponsor.buymeacoffee.href}
              >
                <Pizza />
                Buy Me a Pizza
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
