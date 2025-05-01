"use server";
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";
import { unstable_cache as cache } from "next/cache";
import {
  CACHE_DURATION,
  DEFAULT_ORGANIZATION_REPOSITORIES,
  USE_MOCK,
  GITHUB_ORG_REPO_QUERY,
  GITHUB_SPONSORSHIP_QUERY,
  DEFAULT_GITHUB_SPONSORSHIP_RESPONSE,
} from "./constants";

async function getGithubToken() {
  const auth = createAppAuth({
    appId: process.env.GITHUB_APP_ID!,
    privateKey: process.env.GITHUB_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    installationId: process.env.GITHUB_INSTALLATION_ID!,
  });

  const { token } = await auth({ type: "installation" });
  return token;
}

export const getOrganizationRepositories = cache(
  async (
    organizationName: string = "shsfwork",
    cursor: string | null = null,
    limit: number = 10
  ): Promise<GithubOrganizationRepositories | null> => {
    try {
      // Return mock data in development
      if (process.env.NODE_ENV === "development" && USE_MOCK) {
        return DEFAULT_ORGANIZATION_REPOSITORIES;
      }

      const token = await getGithubToken();
      const octokit = new Octokit({ auth: token });

      const data = await octokit.graphql<GithubOrganizationRepositories>(
        GITHUB_ORG_REPO_QUERY,
        {
          organizationName,
          cursor,
          limit,
        }
      );
      return data;
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      return null;
    }
  },
  ["github-organization-repositories"],
  {
    revalidate: CACHE_DURATION,
  }
);

export const getGithubSponsors = cache(
  async (
    sponsorshipsAsMaintainerFirst: number = 100,
    sponsoringFirst: number = 100,
    tiersFirst: number = 100
  ): Promise<GithubSponsorshipResponse | null> => {
    try {
      // Return mock data in development
      if (process.env.NODE_ENV === "development" && USE_MOCK) {
        return DEFAULT_GITHUB_SPONSORSHIP_RESPONSE;
      }
      const octokit = new Octokit({
        auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
      });

      const data = await octokit.graphql<GithubSponsorshipResponse>(
        GITHUB_SPONSORSHIP_QUERY,
        {
          sponsorshipsAsMaintainerFirst,
          sponsoringFirst,
          tiersFirst,
        }
      );
      return data;
    } catch (error) {
      console.error("Error fetching GitHub sponsorships:", error);
      return null;
    }
  },
  ["github-sponsorship"],
  {
    revalidate: CACHE_DURATION,
  }
);
