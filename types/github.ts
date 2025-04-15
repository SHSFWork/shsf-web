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
