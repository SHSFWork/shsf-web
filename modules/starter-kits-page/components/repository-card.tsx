import { GitFork, PackageOpen, Star } from "lucide-react";
import DateTime from "@shsfwork/components/custom/date-time";
import Link from "@shsfwork/components/custom/link";
import { Badge } from "@shsfwork/components/shadcn/badge";
import Balancer from "@shsfwork/components/semantic-elements/balancer";
import { Card, CardContent } from "@shsfwork/components/custom/3d-card";
import isLightColor from "@shsfwork/lib/color";

export default function RepositoryCard(data: GithubRepository) {
  const title = data.name.replaceAll("-", " ");

  return (
    <Card
      variant="corners"
      className="hover:border-transparent transition-all duration-500 max-w-xl"
    >
      <CardContent>
        <Link
          title={`Go to ${title} GitHub page`}
          href={data.url}
          className="p-6 inline-block"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg capitalize">
              <Balancer
                id={`Repository name for ${title}`}
                className="line-clamp-3"
              >
                {title}
              </Balancer>
            </h3>

            {data.isArchived && <Badge variant="secondary">Archived</Badge>}
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            <Balancer
              id={`Repository description for ${title}`}
              className="line-clamp-4"
            >
              {data.description || "Bu repo için açıklama bulunmuyor."}
            </Balancer>
          </p>

          {data.primaryLanguage && (
            <Badge
              style={{
                backgroundColor: data.primaryLanguage.color,
                color: isLightColor(data.primaryLanguage.color)
                  ? "#000"
                  : "#fff",
              }}
              className="text-xs mb-3"
            >
              {data.primaryLanguage.name}
            </Badge>
          )}

          {data.topics.nodes.length > 0 && (
            <div className="flex items-center flex-wrap gap-2 mb-6">
              {data.topics.nodes.slice(0, 3).map((node, index) => (
                <Badge key={index}>{node.topic.name}</Badge>
              ))}
              {data.topics.nodes.length > 3 && (
                <span className="text-xs">+{data.topics.nodes.length - 3}</span>
              )}
            </div>
          )}

          <div className="flex justify-between gap-4 flex-wrap items-center pt-6 border-t">
            <div className="flex items-center gap-4 flex-1 flex-wrap">
              <div className="flex items-center gap-0.5">
                <Star className="size-4 fill-amber-500 text-amber-500 dark:fill-amber-300 dark:text-amber-300" />
                <span className="text-xs">{data.stargazerCount}</span>
              </div>

              <div className="flex gap-0.5 items-center">
                <GitFork className="size-4" />
                <span className="text-xs">{data.forkCount}</span>
              </div>

              <div className="flex gap-0.5 items-center text-indigo-500 dark:text-indigo-300">
                <PackageOpen className="size-4" />
                <span className="text-xs">open-source</span>
              </div>
            </div>

            <DateTime
              value={data.updatedAt}
              className="text-xs text-muted-foreground"
            />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
