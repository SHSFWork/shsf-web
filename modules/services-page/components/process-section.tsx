import { Card } from "@shsfwork/components/custom/3d-card";

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <Card variant="inner">
      <div className="p-6">
        <p className="text-3xl font-bold text-muted-foreground mb-4">
          {number}
        </p>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

export default function ProcessSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProcessCard
        number="01"
        title="Discovery"
        description="Define objectives and technical requirements for success."
      />
      <ProcessCard
        number="02"
        title="Design & Engineer"
        description="Build with modern tools and iterative feedback cycles."
      />
      <ProcessCard
        number="03"
        title="Deploy & Optimize"
        description="Launch, monitor performance, and continuously improve."
      />
    </div>
  );
}
