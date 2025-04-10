"use client";

import Section from "@shsfwork/components/semantic-elements/section";
import PageHeader from "@shsfwork/components/custom/page-header";
import DisplayCards from "@shsfwork/components/custom/display-card";

import { PRODUCTS } from "../constants";
import { Button } from "@shsfwork/components/custom/3d-button";
import { ChevronRight } from "lucide-react";
import Link from "@shsfwork/components/custom/link";

export default function ProductsSection() {
  return (
    <Section id="products">
      <PageHeader
        title="Our Products"
        description="Clean design. Clear purpose."
      />

      <div>
        <DisplayCards cards={PRODUCTS} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button variant="ai" size="lg" className="group" asChild>
          <Link
            title="Explore more"
            href="/products"
            className="flex items-center gap-1"
          >
            Explore More
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1 duration-300"
            />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
