import { type Product } from "content-collections";

import Image from "next/image";

import Markdown from "@shsfwork/components/mdx/markdown";
import Balancer from "@shsfwork/components/semantic-elements/balancer";
import NavigationButton from "./components/navigation-button";
import { ProductDetailsSchema } from "@shsfwork/modules/porducts-page/components/jsonLd";

import { createPrevAndNext } from "./lib";
import DateTime from "../../components/custom/date-time";
import ScrollToTop from "./components/scroll-to-top";
import ColophonItem from "./components/colophon";

type ProductDetailsPageProps = {
  product: Product;
};

export default function ProductDetailsPage({
  product,
}: ProductDetailsPageProps) {
  const { next, prev } = createPrevAndNext(product);

  return (
    <>
      <figure className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-4">
        <div className="w-full aspect-square md:aspect-auto relative rounded-xl overflow-hidden border shadow">
          <Image
            src={product.image.url}
            alt={product.title}
            blurDataURL={
              product.image.blurDataURL || "data:image/svg+xml;base64,AAAA"
            }
            placeholder={product.image.blurDataURL ? "blur" : undefined}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            draggable={false}
            quality={90}
          />
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <p className="text-xl text-muted-foreground">
              <Balancer id="product-excerpt">{product.excerpt}</Balancer>
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <ColophonItem
              type="date"
              label="Launch Date"
              value={product.launchedAt}
            />
            <ColophonItem label="Price" value={product.price} />
            <ColophonItem label="Platform" value={product.platform} />
            <ColophonItem
              type="link"
              label="Link"
              value={product.link.label}
              href={product.link.href}
            />
          </div>
        </div>
      </figure>

      <div className="flex justify-between py-4 text-muted-foreground border-b">
        <p>{product.readingTime}</p>
        <DateTime title="Producted at" value={product.createdAt} />
      </div>

      <Markdown code={product.content.mdx} />

      <nav className="flex justify-between items-center border-t pt-4">
        <NavigationButton type="prev" product={prev} />
        <ScrollToTop />
        <NavigationButton type="next" product={next} />
      </nav>

      <ProductDetailsSchema product={product} />
    </>
  );
}
