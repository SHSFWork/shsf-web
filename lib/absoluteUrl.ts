export function baseUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL || "https://shsf.work";
}

export function absoluteUrl(path: string): string {
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl()}${formattedPath}`;
}
