import { DEV_ONLINE } from "@shsfwork/constants/common";

export const CACHE_DURATION = 60 * 60 * 1.5;
export const USE_MOCK = process.env.USE_MOCK_DATA_FOR_DEVELOPMENT === "true";

export const DEFAULT_ORGANIZATION_REPOSITORIES: GithubOrganizationRepositories =
  {
    organization: {
      repositories: {
        totalCount: 6,
        nodes: [
          {
            id: "R_kgDOOY0gMA",
            name: "supabase-auth-nextjs-google-boilerplate",
            description:
              "A production-ready authentication system built with Next.js and Supabase featuring Google OAuth integration.",
            url: "https://github.com/shsfwork/supabase-auth-nextjs-google-boilerplate",
            homepageUrl:
              "https://ozantekindev.medium.com/next-js-with-supabase-google-login-step-by-step-guide-088ef06e0501",
            stargazerCount: 1,
            forkCount: 0,
            isArchived: false,
            primaryLanguage: {
              name: "TypeScript",
              color: "#3178c6",
            },
            updatedAt: "2025-04-14T21:01:55Z",
            licenseInfo: {
              name: "MIT License",
            },
            topics: {
              nodes: [
                { topic: { name: "google-authentication" } },
                { topic: { name: "nextjs" } },
                { topic: { name: "shadcn-ui" } },
                { topic: { name: "supabase" } },
                { topic: { name: "supabase-auth" } },
                { topic: { name: "tailwindcss" } },
                { topic: { name: "typescript" } },
                { topic: { name: "boilerplate" } },
              ],
            },
          },
        ],
        pageInfo: {
          hasNextPage: false,
          endCursor: null,
        },
      },
    },
  };

export const GITHUB_ORG_REPO_QUERY = `
  query ($organizationName: String!, $cursor: String, $limit: Int!) {
    organization(login: $organizationName) {
      repositories(
        first: $limit,
        after: $cursor,
        privacy: PUBLIC,
        orderBy: {field: UPDATED_AT, direction: DESC}
      ) {
        totalCount
        nodes {
          id
          name
          description
          url
          homepageUrl
          stargazerCount
          forkCount
          isArchived
          primaryLanguage {
            name
            color
          }
          updatedAt
          licenseInfo {
            name
          }
          topics: repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const DEFAULT_GITHUB_SPONSORSHIP_RESPONSE: GithubSponsorshipResponse = {
  viewer: {
    login: "ozantekin",
    sponsorshipsAsMaintainer: {
      totalCount: 1,
      nodes: [
        {
          createdAt: "2023-02-24T13:30:38Z",
          isActive: false,
          tier: {
            id: "ST_kwDOAx3c-c4AA-dV",
            name: "$1 a month",
            isOneTime: false,
            monthlyPriceInDollars: 1,
          },
          sponsorEntity: {
            __typename: "User",
            login: "fcokur",
            name: "Fehmi Can OKUR",
            bio: "",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/36133366?u=b127c537cc2cd572182d3d85079d96f81e3f5439&v=4",
            twitterUsername: null,
          },
        },
      ],
    },
    sponsoring: {
      nodes: [],
    },
    sponsorsListing: {
      url: DEV_ONLINE.sponsor.buymeacoffee.href,
      fullDescription:
        "Hi, I'm Ozan 👋🏻, a frontend developer and indie maker building simple, useful products that people enjoy using. I'm currently working on improving [screenie.me](https://www.screenie.me/?ref=ozantek.in) with new features and updates.\n\nAdditionally, I contribute to open-source projects and believe strongly in community collaboration.",
      activeGoal: {
        kind: "TOTAL_SPONSORS_COUNT",
        description: "My starting goal is 3 sponsors. ",
        percentComplete: 0,
        targetValue: 3,
        title: "3 monthly sponsors",
      },
      tiers: {
        nodes: [
          {
            id: "ST_kwDOAx3c-c4AA-dW",
            name: "$5 a month",
            isOneTime: false,
            description: "Supporter",
            monthlyPriceInDollars: 5,
            isCustomAmount: false,
          },
          {
            id: "ST_kwDOAx3c-c4ABmYl",
            name: "$15 a month",
            isOneTime: false,
            description: "Contributor",
            monthlyPriceInDollars: 15,
            isCustomAmount: false,
          },
          {
            id: "ST_kwDOAx3c-c4ABmYm",
            name: "$150 one time",
            isOneTime: true,
            description: "Sponsor",
            monthlyPriceInDollars: 150,
            isCustomAmount: false,
          },
          {
            id: "ST_kwDOAx3c-c4ABmYn",
            name: "$300 one time",
            isOneTime: true,
            description: "Investor",
            monthlyPriceInDollars: 300,
            isCustomAmount: false,
          },
        ],
      },
    },
  },
};

export const GITHUB_SPONSORSHIP_QUERY = `
query (
  $sponsorshipsAsMaintainerFirst: Int! = 100,
  $sponsoringFirst: Int! = 100,
  $tiersFirst: Int! = 100
) {
  viewer {
    login
    ... on Sponsorable {
      sponsorshipsAsMaintainer(activeOnly: false, first: $sponsorshipsAsMaintainerFirst) {
        totalCount
        nodes {
          createdAt
          isActive
          tier {
            id
            name
            isOneTime
            monthlyPriceInDollars
          }
          sponsorEntity {
            __typename
            ... on User {
              login
              name
              bio
              avatarUrl
              twitterUsername
            }
            ... on Organization {
              login
              name
              description
              avatarUrl
              twitterUsername
            }
          }
        }
      }
    }
    sponsoring(first: $sponsoringFirst) {
      nodes {
        ... on User {
          login
          name
          bio
          avatarUrl
          twitterUsername
          sponsorshipForViewerAsSponsor {
            isOneTimePayment
            isActive
            createdAt
            tier {
              id
              isCustomAmount
              monthlyPriceInDollars
              isOneTime
              name
              description
            }
          }
        }
      }
    }
    sponsorsListing {
      url
      fullDescription
      activeGoal {
        kind
        description
        percentComplete
        targetValue
        title
      }
      tiers(first: $tiersFirst) {
        nodes {
          id
          name
          isOneTime
          description
          monthlyPriceInDollars
          isCustomAmount
        }
      }
    }
  }
}`;
