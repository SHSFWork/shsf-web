import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
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
import { absoluteUrl } from "@shsfwork/lib/absoluteUrl";

type ImageParams = {
  image: string;
  directory: string;
};

const execAsync = promisify(exec);

const PRODUCT_DIRECTORY = "www/products";
const GUIDE_DIRECTORY = "www/guide";

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
      og: absoluteUrl(
        `/og?title=${encodeURI(product.title)}&description=${encodeURI(
          product.excerpt
        )}`
      ),

      slugAsParams: product._meta.path.split("/").slice(1).join("/"),
      url: `/products/${product._meta.path}`,
    };
  },
});

const guide = defineCollection({
  name: "guide",
  directory: GUIDE_DIRECTORY,
  include: "*/index.mdx",
  schema: (z) => ({
    title: z.string(),
    excerpt: z.string(),
    createdAt: z.string(),
    author: z.object({
      name: z.string(),
      src: z.string(),
      title: z.string(),
      href: z.string(),
    }),
    og: z.string(),
    category: z.enum(["product", "boilerplate", "starter-kit"]),
    tags: z.array(z.string()),
  }),
  transform: async (guide, ctx) => {
    const mdx = await compileMDX(ctx, guide, {
      rehypePlugins: [
        rehypeSlug,
        [
          staticImages,
          {
            publicDir: path.join("public", "www/guide"),
            resourcePath: "/" + GUIDE_DIRECTORY,
            sourceRoot: GUIDE_DIRECTORY,
          },
        ],

        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "pre") {
              const [codeEl] = node.children || [];
              if (codeEl?.tagName !== "code") return;
              node.__rawstring__ = codeEl.children?.[0]?.value;
            }
          });
        },

        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            keepBackground: false,
            onVisitLine(node: { children: unknown[] }) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
          },
        ],

        () => (tree) => {
          visit(tree, (node) => {
            if (
              node?.type === "element" &&
              node.properties &&
              "data-rehype-pretty-code-figure" in node.properties
            ) {
              const preElement = node.children.at(-1);
              if (!preElement || preElement.tagName !== "pre") return;
              preElement.properties = preElement.properties || {};
              preElement.properties["__rawstring__"] = node.__rawstring__;
            }
          });
        },
      ],

      remarkPlugins: [remarkGfm, mdxEmbedder],
    });
    const lastModification = await ctx.cache(
      guide._meta.filePath,
      lastModificationDate
    );
    const image = await ctx.cache(
      { image: guide.og, directory: guide._meta.directory },
      collectImageInformation
    );

    return {
      ...guide,
      content: {
        mdx,
        raw: guide.content,
      },
      readingTime: calculateReadingTime(guide.content),
      lastModification,
      image,
      og: absoluteUrl(
        `/og?title=${encodeURI(guide.title)}&description=${encodeURI(
          guide.excerpt
        )}`
      ),

      slugAsParams: guide._meta.path.split("/").slice(1).join("/"),
      url: `/guide/${guide._meta.path}`,
    };
  },
});

export default defineConfig({
  collections: [products, guide],
});
