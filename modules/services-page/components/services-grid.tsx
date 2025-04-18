import { LucideIcon } from "lucide-react";

import Section from "@shsfwork/components/semantic-elements/section";
import { Card, CardContent } from "@shsfwork/components/custom/3d-card";
import { SERVICES } from "@shsfwork/modules/services-page/constants";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = icon;

  return (
    <Card variant="neubrutalism" className="rounded-lg">
      <CardContent className="p-6">
        <div className="bg-border p-3 rounded-lg w-fit mb-4">
          <Icon className="size-4" />
        </div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ServicesGrid() {
  return (
    <Section id="services-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}
