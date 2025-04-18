import { allProducts } from "@shsfwork/.content-collections/generated";

import PageHeader from "@shsfwork/components/custom/page-header";

import ProductSwapCard from "./components/product-swap-card";
import { ProductsSchema } from "./components/jsonLd";
import Section from "@shsfwork/components/semantic-elements/section";

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        title="Products"
        description="A curated collection of websites, applications, and digital products built with modern frameworks and optimized for performance."
        className="mb-8"
      />
      <Section id="products">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {allProducts.map((p, i) => (
            <li key={i}>
              <article>
                <ProductSwapCard product={p} />
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <ProductsSchema />
    </div>
  );
}
