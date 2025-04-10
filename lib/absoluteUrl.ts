export function absoluteUrl(path: string) {
  // Path zaten / ile başlıyorsa ikinci / eklemiyoruz
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  return `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${formattedPath}`;
}
