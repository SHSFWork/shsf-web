import { Button } from "@shsfwork/components/shadcn/button";
import { CakeSlice, Candy, Donut } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shsfwork/components/shadcn/tooltip";
import Link from "@shsfwork/components/custom/link";
import DateTime from "@shsfwork/components/custom/date-time";
import { Guide } from "@shsfwork/.content-collections/generated";

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      title={guide.title}
      className="max-w-80 mx-auto inline-flex"
      href={guide.url}
    >
      <div className="relative overflow-hidden h-full bg-card rounded-2xl transition-all duration-200 group hover:shadow border">
        <div className="w-full bg-muted overflow-hidden relative aspect-video">
          <Image
            src={guide.image.url}
            alt={guide.title}
            blurDataURL={
              guide.image.blurDataURL || "data:image/svg+xml;base64,AAAA"
            }
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-95 group-hover:rounded-2xl rounded-b-none transform object-cover transition-all duration-200 z-10 group-hover:shadow"
          />
          <div className="-z-0 absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-bone-500)_1px,transparent_1px)] dark:bg-[radial-gradient(var(--color-outer-space-500)_1px,transparent_1px)] [background-size:6px_6px] " />
        </div>
        <div className="p-4 space-y-4">
          <h2 className="font-bold text-lg line-clamp-2">{guide.title}</h2>
          <p className="font-normal text-sm text-sidebar-foreground line-clamp-4">
            {guide.excerpt}
          </p>
          <div className="flex flex-row justify-between items-center gap-2">
            <DateTime
              value={guide.createdAt}
              title="Published on"
              className="text-sm"
            />
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    {guide.category === "product" && <Donut />}
                    {guide.category === "boilerplate" && <Candy />}
                    {guide.category === "starter-kit" && <CakeSlice />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{guide.category}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Link>
  );
}
