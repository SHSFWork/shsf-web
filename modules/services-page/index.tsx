import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";

import ServicesGrid from "./components/services-grid";
import MobileDevFeatured from "./components/mobile-dev-featured";
import WebAppsFeatured from "./components/web-apps-featured";
import OpenSourceToolsFeatured from "./components/open-source-tools-featured";
import ProcessSection from "./components/process-section";
import TechStack from "./components/tech-stack";
import CTASection from "./components/cta-section";

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Services"
        description="Crafting high-performance web and mobile experiences with modern tools."
        className="mb-8"
      />

      <ServicesGrid />

      <Section id="featured-sections" className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured
        </h2>
        <WebAppsFeatured />
        <MobileDevFeatured />
        <OpenSourceToolsFeatured />
      </Section>

      <Section id="process" className="space-y-8 md:space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Process
        </h2>
        <ProcessSection />
        <TechStack />
        <CTASection />
      </Section>
    </div>
  );
}
