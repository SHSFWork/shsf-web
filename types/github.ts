interface GithubRepository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  isArchived: boolean;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  updatedAt: string;
  licenseInfo: {
    name: string;
  } | null;
  topics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
}

interface GithubOrganizationRepositories {
  organization: {
    repositories: {
      totalCount: number;
      nodes: GithubRepository[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
    };
  };
}

interface GithubSponsorshipResponse {
  viewer: {
    login: string;
    sponsorshipsAsMaintainer: {
      totalCount: number;
      nodes: Array<{
        createdAt: string;
        isActive: boolean;
        tier: {
          id: string;
          name: string;
          isOneTime: boolean;
          monthlyPriceInDollars: number;
        };
        sponsorEntity: {
          __typename: string;
          login: string;
          name: string;
          bio: string;
          avatarUrl: string;
          twitterUsername: string | null;
        };
      }>;
    };
    sponsoring: {
      nodes: [];
    };
    sponsorsListing: {
      url: string;
      fullDescription: string;
      activeGoal: {
        kind: string;
        description: string;
        percentComplete: number;
        targetValue: number;
        title: string;
      };
      tiers: {
        nodes: Array<{
          id: string;
          name: string;
          isOneTime: boolean;
          description: string;
          monthlyPriceInDollars: number;
          isCustomAmount: boolean;
        }>;
      };
    };
  };
}
