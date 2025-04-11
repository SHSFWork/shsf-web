import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";
import AnimatedCircle from "./animated-circle";

export default function ClientsSection() {
  return (
    <Section id="clients">
      <PageHeader
        title="Happy Clients"
        description="We are proud to have worked with some amazing clients."
      />

      <div className="flex items-center justify-center gap-4 md:gap-16 md:mt-8 max-w-3xl mx-auto">
        <AnimatedCircle value={10} altText="Clients" />
        <AnimatedCircle value={25} altText="Projects" />
      </div>
    </Section>
  );
}
