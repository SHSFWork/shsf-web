import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";
import AnimatedCircle from "./animated-circle";

export default function ClientsSection() {
  return (
    <Section id="clients">
      <PageHeader
        title="Proven Track Record"
        description="Trusted by innovative brands and forward-thinking businesses to deliver results that matter."
      />

      <div className="flex items-center justify-center gap-4 md:gap-16 md:mt-8 max-w-3xl mx-auto">
        <AnimatedCircle value={10} altText="Businesses Transformed" />
        <AnimatedCircle value={25} altText="Solutions Delivered" />
      </div>
    </Section>
  );
}
