import DateTime from "@shsfwork/components/custom/date-time";
import Link from "@shsfwork/components/custom/link";
import { cn } from "@shsfwork/lib/cn";

type ColophonItemProps = {
  type?: "default" | "link" | "date";
  label: string;
  value: string;
  href?: string;
} & React.ComponentProps<"div">;

export default function ColophonItem(props: ColophonItemProps) {
  const { type = "default", label, href, value, className, ...rest } = props;

  return (
    <div
      className={cn("text-lg flex items-baseline gap-1", className)}
      {...rest}
    >
      <h3 className="font-semibold capitalize">{label}:</h3>

      {type === "default" && (
        <span className="text-muted-foreground capitalize">{value}</span>
      )}

      {type === "link" && href && (
        <Link
          href={href}
          title={`Go to ${label} page`}
          className="text-[#019ef6] hover:text-[#0180c4] transition-colors duration-300"
        >
          {value}
        </Link>
      )}

      {type === "date" && (
        <DateTime value={value} className="text-muted-foreground" />
      )}
    </div>
  );
}
