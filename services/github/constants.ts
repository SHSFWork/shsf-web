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
