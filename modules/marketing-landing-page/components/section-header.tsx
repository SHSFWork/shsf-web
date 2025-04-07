import Balancer from "@shsfwork/components/semantic-elements/balancer";
import { cn } from "@shsfwork/lib/cn";

type SectionHeaderProps = {
  title: string;
  description?: string;
} & React.ComponentProps<"div">;

export default function SectionHeader(props: SectionHeaderProps) {
  const { title, description, className, ...rest } = props;
  return (
    <div
      className={cn(
        "space-y-1 md:space-y-2 max-w-xl mx-auto mb-1 md:mb-2",
        className
      )}
      {...rest}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        <Balancer id="section-header-title">{title}</Balancer>
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-center font-light">
          <Balancer id="section-header-description">{description}</Balancer>
        </p>
      )}
    </div>
  );
}
