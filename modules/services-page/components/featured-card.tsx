import { Card } from "@shsfwork/components/custom/3d-card";

type FeaturedSectionProps = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
  hero: React.ReactNode;
};

export default function FeaturedSection({
  title,
  items,
  hero,
}: FeaturedSectionProps) {
  return (
    <Card variant="dots">
      <div className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-12">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{title}</h3>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index}>
                <h5 className="font-semibold flex items-center">
                  <div className="size-4 mr-2 bg-foreground rounded-full flex items-center justify-center">
                    <div className="size-1.5 bg-background rounded-full" />
                  </div>
                  {item.title}
                </h5>
                <p className="text-muted-foreground ml-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">{hero}</div>
      </div>
    </Card>
  );
}
