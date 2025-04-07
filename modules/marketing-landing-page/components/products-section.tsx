"use client";

import Section from "@shsfwork/components/semantic-elements/section";
import SectionHeader from "@shsfwork/modules/marketing-landing-page/components/section-header";
import DisplayCards from "@shsfwork/components/custom/display-card";

import { PRODUCTS } from "../constants";
import { Button } from "@shsfwork/components/custom/3d-button";
import { ChevronRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <Section id="products">
      <SectionHeader
        title="Our Products"
        description="Clean design. Clear purpose."
      />

      <div>
        <DisplayCards cards={PRODUCTS} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button variant="ai" size="lg" className="group">
          Explore More
          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-1 duration-300"
          />
        </Button>
      </div>
    </Section>
  );
}
