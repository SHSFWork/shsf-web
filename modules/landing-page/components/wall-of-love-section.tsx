"use client";

import Image from "next/image";

import { Globe } from "lucide-react";
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
              gradientFrom={post.platform === "bluesky" ? "#0B7AFF" : "#f97316"}
              gradientTo={post.platform === "bluesky" ? "#59B9FF" : "#facc15"}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="font-bold">{post.author}</h4>

                {post.platform === "bluesky" && (
                  <figure className="aspect-square size-8">
                    <Image
                      className="bg-cover bg-center bg-no-repeat object-cover"
                      src="/badges/bluesky-logo-gradient.png"
                      alt="Bluesky Logo"
                      width={32}
                      height={32}
                      draggable={false}
                    />
                  </figure>
                )}

                {post.platform === "web" && (
                  <span className="bg-orange-500 size-8 rounded-xl flex items-center justify-center text-white">
                    <Globe size={18} />
                  </span>
                )}
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
