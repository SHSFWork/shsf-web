import { format, parseISO } from "date-fns";

type DateTimeProps = {
  value: string;
} & React.ComponentProps<"time">;

export default function DateTime(props: DateTimeProps) {
  const { value, ...rest } = props;

  return (
    <time dateTime={value} {...rest}>
      {format(parseISO(value), "MMMM d, yyyy")}
    </time>
  );
}
