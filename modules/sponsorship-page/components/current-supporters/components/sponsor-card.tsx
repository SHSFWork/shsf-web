import { Card, CardContent } from "@shsfwork/components/custom/3d-card";
import { Badge } from "@shsfwork/components/shadcn/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@shsfwork/components/shadcn/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shsfwork/components/shadcn/avatar";
import Link from "@shsfwork/components/custom/link";
import { DEV_ONLINE } from "@shsfwork/constants/common";

export interface SponsorItemProps {
  sponsorEntity?: {
    login: string;
    name?: string;
    avatarUrl: string;
  };
  createdAt?: string;
  isActive?: boolean;
  tier?: {
    isOneTime: boolean;
    monthlyPriceInDollars: number;
  };
  supporter_name?: string;
  support_id?: number;
  support_note?: string | null;
  support_created_on?: string;
  support_coffees?: number;
}

interface SponsorCardProps {
  title: string;
  description?: string;
  sponsors: SponsorItemProps[];
  type?: "github" | "pizza";
}

export default function SponsorCard({
  title,
  description = "",
  sponsors,
  type = "github",
}: SponsorCardProps) {
  let content = null;

  if (!sponsors || sponsors.length === 0) {
    content = (
      <div className="text-sm text-muted-foreground text-center p-4">
        No sponsors at this tier yet
      </div>
    );
  } else if (type === "pizza") {
    content = (
      <div>
        {sponsors.map((sponsor) => (
          <PizzaItem key={`pizza-${sponsor.support_id}`} {...sponsor} />
        ))}
      </div>
    );
  } else if (type === "github") {
    content = (
      <div className="flex flex-wrap gap-2 py-2 px-4">
        {sponsors.map((sponsor, idx) => (
          <GithubItem
            key={`github-${idx}-${sponsor.sponsorEntity?.login}`}
            {...sponsor}
          />
        ))}
      </div>
    );
  }

  return (
    <Card variant="inner">
      <div className="bg-muted/50 p-4">
        <h3>{title}</h3>
        {description && <p className="text-sm">{description}</p>}
      </div>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

const GithubItem = (sponsor: SponsorItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          title={DEV_ONLINE.sponsor.github.title}
          href={DEV_ONLINE.sponsor.github.href}
          className="border rounded-full border-border hover:border-transparent transition-colors duration-200"
        >
          <Avatar className="size-10">
            <AvatarFallback>
              {(sponsor.sponsorEntity?.login?.[0] || "G").toUpperCase()}
            </AvatarFallback>
            <AvatarImage
              src={sponsor.sponsorEntity?.avatarUrl}
              alt={sponsor.sponsorEntity?.login}
            />
          </Avatar>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top" className="min-w-36 text-xs space-y-1">
        <div>
          <p className="font-medium">{sponsor.sponsorEntity?.name}</p>
          <span>@{sponsor.sponsorEntity?.login}</span>
        </div>

        <div className="flex items-center justify-between opacity-60">
          <span>{sponsor.isActive ? "Active" : "Inactive"}</span>
          <span>
            ${sponsor.tier?.monthlyPriceInDollars}/
            {sponsor.tier?.isOneTime ? "1x" : "mo"}
          </span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const PizzaItem = (sponsor: SponsorItemProps) => {
  return (
    <Link
      title="Buy me a coffee"
      href="https://buymeacoffee.com/ozantekin"
      key={`pizza-${sponsor.support_id}`}
      className="flex items-center gap-3 hover:bg-muted p-4 rounded-md transition-colors duration-200"
    >
      <Avatar className="size-10">
        <AvatarFallback className="bg-sand-dune-400 text-primary-foreground">
          {(sponsor.supporter_name?.[0] || "P").toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex gap-1 flex-1 flex-col min-w-0">
        <p className="font-medium text-sm">
          {sponsor.supporter_name || "Anonymous"}
        </p>
        {sponsor.support_note && (
          <p className="text-xs text-muted-foreground truncate">
            {sponsor.support_note}
          </p>
        )}
      </div>

      <Badge className="opacity-60">{sponsor.support_coffees} Slice</Badge>
    </Link>
  );
};
