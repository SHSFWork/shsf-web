import { Box, Database, PenTool, Smartphone, Star } from "lucide-react";

import FeaturedCard from "./featured-card";
import { OPEN_SOURCE_TOOLS_FEATURED_DATA } from "../constants";
import { Card } from "@shsfwork/components/custom/3d-card";
import { Badge } from "@shsfwork/components/shadcn/badge";

export const OPEN_SOURCE_TOOLS_FEATURED_HERO_DATA = [
  {
    id: "next-starter",
    title: "next-starter",
    description:
      "Next.js + TypeScript starter with auth, API routes, and testing",
    icon: Box,
    language: "TypeScript",
    stars: "1.2k",
    color: "blue",
  },
  {
    id: "ui-kit",
    title: "ui-kit",
    description: "React component library with Tailwind and modern animations",
    icon: PenTool,
    language: "React",
    stars: "876",
    color: "red",
  },
  {
    id: "api-toolkit",
    title: "api-toolkit",
    description: "End-to-end typed API client generation for React and Node",
    icon: Database,
    language: "Node.js",
    stars: "652",
    color: "green",
  },
  {
    id: "rn-boilerplate",
    title: "rn-boilerplate",
    description: "Production-ready React Native starter with state management",
    icon: Smartphone,
    language: "React Native",
    stars: "924",
    color: "pink",
  },
];

export default function OpenSourceToolsFeatured() {
  return (
    <FeaturedCard
      title="Open Source Tools"
      items={OPEN_SOURCE_TOOLS_FEATURED_DATA}
      hero={
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-md">
          {OPEN_SOURCE_TOOLS_FEATURED_HERO_DATA.map((tool) => (
            <Card key={tool.id} className="p-4">
              <div className="flex items-center gap-2">
                <tool.icon className="size-5" />
                <span className="font-semibold">{tool.title}</span>
              </div>
              <div className="my-3 text-xs">{tool.description}</div>
              <div className="flex items-center gap-2">
                <Badge>{tool.language}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="size-3 fill-amber-500 text-amber-500 dark:fill-amber-300 dark:text-amber-300" />{" "}
                  <span className="text-xs">{tool.stars}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      }
    />
  );
}
