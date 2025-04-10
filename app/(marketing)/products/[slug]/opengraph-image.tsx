import { cn } from "@shsfwork/lib/cn";
import { ImageResponse } from "@vercel/og";
import { allProducts, type Product } from "content-collections";
import { SITE } from "@shsfwork/constants/common";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: Props) {
  const slug = params.slug;
  // @ts-expect-error - allProducts is imported from content collections and not recognized by TypeScript
  const products: Product = allProducts.find((p) => slug === p._meta.path);
  if (!products) {
    return new Response(
      JSON.stringify({
        message: "Could not find products with slug: " + slug,
      }),
      {
        status: 404,
      }
    );
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return new ImageResponse(
    (
      <div
        tw="w-full h-full p-4 flex bg-indigo-500"
        style={{
          backgroundImage: "linear-gradient(to right, #312e81, #581c87)",
        }}
      >
        <div tw="rounded-xl w-full h-full p-4 flex bg-white shadow-lg">
          <img
            width="475"
            height="562"
            src={products.og}
            tw="rounded-xl shadow-lg"
            alt="Product Post Image"
            style={{ objectFit: "cover" }}
          />
          <div tw="flex flex-col px-6 w-[640px] h-full justify-center">
            <div tw="flex flex-col">
              <img
                width={48}
                height={48}
                alt={products.title}
                src={products.icon}
                tw="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <span
                tw={cn("font-bold text-zinc-950 my-4", {
                  "text-6xl": products.title.length < 40,
                  "text-5xl": products.title.length >= 40,
                })}
              >
                {products.title}
              </span>
              <span
                tw={cn("text-zinc-600", {
                  "text-4xl": products.title.length < 48,
                  "text-3xl": products.title.length >= 48,
                })}
              >
                {products.excerpt}
              </span>
            </div>
            <div tw="flex justify-between items-end w-full text-zinc-500 mt-4">
              <span className="text-xl ">{products.readingTime}</span>
              <span className="text-xl ">{formatDate(products.createdAt)}</span>
            </div>
            <p tw="absolute text-[#312e81] bottom-4 right-4 text-xl">
              {SITE.domain}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      debug: false,
    }
  );
}
