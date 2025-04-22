"use client";

import { useTheme } from "next-themes";

import Section from "@shsfwork/components/semantic-elements/section";
import { MagicCard } from "@shsfwork/components/custom/magic-card";

import getFormatDescription from "@shsfwork/lib/getFormatDescription";

import PageHeader from "../../../components/custom/page-header";

import { WALL_OF_LOVE } from "../constants";
import Balancer from "@shsfwork/components/semantic-elements/balancer";

export default function WallOfLoveSection() {
  const { theme } = useTheme();

  return (
    <Section id="wall-of-love" className="max-w-4xl mx-auto">
      <PageHeader title="Wall of Love" className="!mb-8" />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {WALL_OF_LOVE.map((post, index) => (
          <div key={index}>
            <MagicCard
              className="whitespace-nowrap p-6 overflow-hidden max-w-xs"
              gradientColor={theme === "dark" ? "#262626" : "#ffffff"}
              gradientFrom={post.platform === "bluesky" ? "#525654" : "#cfd3d1"}
              gradientTo={post.platform === "bluesky" ? "#86776d" : "#e9d8cc"}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="font-bold">{post.author}</h4>
              </div>
              <div className="space-y-3">
                <p className="text-sm">
                  <Balancer id="wall-of-love-post">
                    {getFormatDescription(post.comment)}
                  </Balancer>
                </p>

                <div className="flex items-center justify-between gap-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">
                    {post.product}
                  </span>
                  <time className="text-xs text-muted-foreground">
                    {post.createdAt}
                  </time>
                </div>
              </div>
            </MagicCard>
          </div>
        ))}
      </div>
    </Section>
  );
}
