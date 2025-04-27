import { cn } from "@shsfwork/lib/cn";

export default function Grid(props: React.ComponentProps<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
