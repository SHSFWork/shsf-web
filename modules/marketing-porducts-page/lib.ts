import { SITE } from "@shsfwork/constants/common";

export function createFullyQualifiedDomainName() {
  if (process.env.NEXT_PUBLIC_FQDN) {
    return process.env.NEXT_PUBLIC_FQDN;
  }
  if (process.env.VERCEL_URL) {
    return process.env.VERCEL_URL;
  }
  return SITE.domain;
}

const scheme = process.env.NEXT_PUBLIC_SCHEME
  ? process.env.NEXT_PUBLIC_SCHEME
  : "https";
const fqdn = createFullyQualifiedDomainName();
export const baseUrl = `${scheme}://${fqdn}`;

export const createCompleteUrl = (path: string) => {
  console.log("baseUrl", path);
  if (path.startsWith("/")) {
    return `${baseUrl}${path}`;
  }
  return `${baseUrl}/${path}`;
};
