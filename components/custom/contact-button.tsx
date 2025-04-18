import { ONLINE } from "@shsfwork/constants/common";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shsfwork/components/shadcn/tooltip";
import { Button } from "@shsfwork/components/custom/3d-button";
import { EmailCopyButton } from "../../modules/landing-page/components/email-button";
import Link from "@shsfwork/components/custom/link";

type ContactButtonProps = {
  label?: string;
};

export default function ContactButton({
  label = "Reach Out",
}: ContactButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ai" size="lg" className="px-16" asChild>
            <Link
              title={ONLINE.contact.title}
              href={ONLINE.contact.href + "?subject=Hello!"}
            >
              {label}
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          sideOffset={4}
          className="bg-indigo-500 text-white shadow-md dark:bg-indigo-700"
        >
          <EmailCopyButton />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
