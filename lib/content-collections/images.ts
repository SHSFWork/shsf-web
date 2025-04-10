import { createCompleteUrl } from "@shsfwork/modules/marketing-porducts-page/lib";

export const createImageUrl = (
  src: string,
  width: number,
  height: number,
  escape = false
) => {
  if (src.startsWith("https://images.unsplash.com/") && !src.includes("?")) {
    const amp = escape ? "&amp;" : "&";
    return `${src}?fit=crop${amp}w=${width}${amp}h=${height}`;
  } else if (!src.includes("://")) {
    return createCompleteUrl(src);
  }
  return src;
};
