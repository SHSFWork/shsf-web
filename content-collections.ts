import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import readingTime from "reading-time";
import { exec } from "child_process";
import { promisify } from "node:util";
import path from "node:path";
import staticImages, {
  staticCoverImage,
} from "@shsfwork/lib/content-collections/staticImages";
import resolveImageBlurDataURL from "@shsfwork/lib/content-collections/imageBlurDataURL";
import remarkGfm from "remark-gfm";
import mdxEmbedder from "@shsfwork/lib/content-collections/mdxEmbedder";
import rehypeSlug from "rehype-slug";

type ImageParams = {
  image: string;
  directory: string;
};

const execAsync = promisify(exec);

const PRODUCT_DIRECTORY = "www/products";

function calculateReadingTime(content: string): string {
  const contentWithoutSvg = content.replace(/<svg+.+?(?=<\/svg>)<\/svg>/gs, "");
  return readingTime(contentWithoutSvg).text;
}

async function lastModificationDate(filePath: string): Promise<string> {
  try {
    const { stdout } = await execAsync(
      `git log -1 --format=%ai -- ${path.join(PRODUCT_DIRECTORY, filePath)}`
    );
    return stdout
      ? new Date(stdout.trim()).toISOString()
      : new Date().toISOString();
  } catch (error) {
    console.warn(
      `Could not get last modification date for ${filePath}:`,
      error
    );
    return new Date().toISOString();
  }
}

async function generateBlurDataForExternalImage(
  url: string
): Promise<string | null> {
  try {
    return "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
  } catch (error) {
    console.warn(`Could not generate blur data for ${url}:`, error);
    return null;
  }
}

async function collectImageInformation({ image, directory }: ImageParams) {
  try {
    if (image.startsWith("http")) {
      const blurDataURL = await generateBlurDataForExternalImage(image);
      return { url: image, blurDataURL };
    }

    const url = await staticCoverImage(
      PRODUCT_DIRECTORY,
      "public/www/products",
      "/products",
      directory,
      image
    );

    const blurDataURL = await resolveImageBlurDataURL(
      PRODUCT_DIRECTORY,
      directory,
      image
    );
    return { url, blurDataURL };
  } catch (error) {
    console.warn(`Could not process image ${image} in ${directory}:`, error);
    return { url: image, blurDataURL: null };
  }
}

const products = defineCollection({
  name: "products",
  directory: PRODUCT_DIRECTORY,
  include: "*/index.mdx",
  schema: (z) => ({
    title: z.string(),
    excerpt: z.string(),
    createdAt: z.string(),
    icon: z.string(),
    og: z.string(),
    launchedAt: z.string(),
    platform: z.enum(["web", "mobile", "web, mobile"]),
    price: z.string(),
    techStack: z.array(z.string()),
    thumbnails: z.array(z.string()),
    link: z.object({
      href: z.string(),
      label: z.string(),
    }),
  }),
  transform: async (product, ctx) => {
    const mdx = await compileMDX(ctx, product, {
      rehypePlugins: [
        [
          staticImages,
          {
            publicDir: path.join("public", "www/products"),
            resourcePath: "/" + PRODUCT_DIRECTORY,
            sourceRoot: PRODUCT_DIRECTORY,
          },
        ],
        rehypeSlug,
      ],

      remarkPlugins: [remarkGfm, mdxEmbedder],
    });
    const lastModification = await ctx.cache(
      product._meta.filePath,
      lastModificationDate
    );
    const image = await ctx.cache(
      { image: product.og, directory: product._meta.directory },
      collectImageInformation
    );

    return {
      ...product,
      content: {
        mdx,
        raw: product.content,
      },
      readingTime: calculateReadingTime(product.content),
      lastModification,
      image,
      url: `/products/${product._meta.path}`,
    };
  },
});

export default defineConfig({
  collections: [products],
});
