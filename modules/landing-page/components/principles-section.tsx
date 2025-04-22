import { LucideIcon } from "lucide-react";

import Balancer from "@shsfwork/components/semantic-elements/balancer";
import Section from "@shsfwork/components/semantic-elements/section";

import PageHeader from "../../../components/custom/page-header";

import { PRINCIPLES } from "../constants";

export default function PrinciplesSection() {
  return (
    <Section id="principles">
      <PageHeader
        title="Working Philosophy"
        description="Stay hungry, stay foolish. We combine technical excellence with strategic thinking to create digital solutions that drive real business outcomes."
      />

      <div className="flex items-center justify-center relative z-10 flex-wrap gap-1 md:gap-4">
        {PRINCIPLES.map((principle) => (
          <Principle key={principle.title} {...principle} />
        ))}
      </div>
    </Section>
  );
}

type PrincipleProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function Principle(props: PrincipleProps) {
  const { title, description, icon: Icon } = props;

  return (
    <div className="flex flex-col py-8 md:py-10 relative group/principle w-full max-w-80 rounded-2xl overflow-hidden hover:bg-accent transition-all duration-300">
      <div className="mb-4 relative z-10 px-10 text-primary">
        <Icon />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/principle:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/principle:bg-primary transition-all duration-300 origin-center" />
        <h3 className="group-hover/principle:translate-x-2 transition duration-200 inline-block">
          <Balancer id="principle-title">{title}</Balancer>
        </h3>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        <Balancer id="principle-description">{description}</Balancer>
      </p>
    </div>
  );
}
