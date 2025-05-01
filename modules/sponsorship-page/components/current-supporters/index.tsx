"use client";
import * as React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@shsfwork/components/shadcn/tabs";
import { Pizza, Github } from "lucide-react";
import Section from "@shsfwork/components/semantic-elements/section";
import PizzaSupporters from "./components/pizza-supporters";
import GithubSponsors from "./components/github-sponsors";

interface SupportersDisplayProps {
  githubSponsors: GithubSponsorshipResponse;
  coffeeSupporters: SupporterResponse;
  coffeeSubscriptions: SubscriptionResponse;
}

export default function SupportersDisplay({
  githubSponsors,
  coffeeSupporters,
  coffeeSubscriptions,
}: SupportersDisplayProps) {
  return (
    <Section id="current-supporters" className="py-8 md:py-12">
      <Tabs defaultValue="github" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-lg mx-auto mb-8 border h-10">
          <TabsTrigger value="github" className="flex items-center gap-1">
            <Github className="w-4 h-4" /> GitHub
          </TabsTrigger>
          <TabsTrigger value="pizza" className="flex items-center gap-1">
            <Pizza className="w-4 h-4" /> Pizza
          </TabsTrigger>
        </TabsList>

        <TabsContent value="github" className="w-full">
          <GithubSponsors githubSponsors={githubSponsors} />
        </TabsContent>

        <TabsContent value="pizza" className="w-full">
          <PizzaSupporters
            coffeeSupporters={coffeeSupporters}
            coffeeSubscriptions={coffeeSubscriptions}
          />
        </TabsContent>
      </Tabs>
    </Section>
  );
}
