import { Button } from "@shsfwork/components/custom/3d-button";
import Link from "@shsfwork/components/custom/link";
import { ONLINE } from "@shsfwork/constants/common";
import { ChevronRight } from "lucide-react";

interface MeetingButtonProps {
  label?: string;
}

export default function MeetingButton({
  label = "Plan a Meeting",
}: MeetingButtonProps) {
  return (
    <Button variant="outline" size="lg" asChild className="group">
      <Link
        title={ONLINE.cal.title}
        className="flex items-center gap-1"
        href={ONLINE.cal.href}
      >
        <span>{label}</span>
        <ChevronRight
          className="transition-transform group-hover:translate-x-1 duration-300"
          size={16}
        />
      </Link>
    </Button>
  );
}
