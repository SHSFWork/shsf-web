import { allProducts } from "@shsfwork/.content-collections/generated";

import PageHeader from "@shsfwork/components/custom/page-header";

import ProductSwapCard from "./components/product-swap-card";
import { MarketingProductsSchema } from "./components/jsonLd";
import Section from "@shsfwork/components/semantic-elements/section";

export default function MarketingProductsPage() {
  return (
    <div>
      <PageHeader
        title="Our Products"
        description="Explore our innovative products designed to enhance your digital experience."
        className="mb-8"
      />
      <Section id="products">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center">
          {allProducts.map((p, i) => (
            <li key={i}>
              <article>
                <ProductSwapCard product={p} />
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <MarketingProductsSchema />
    </div>
  );
}
