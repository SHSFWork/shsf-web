import Balancer from "@shsfwork/components/semantic-elements/balancer";
import Section from "@shsfwork/components/semantic-elements/section";
import { ONLINE, SITE } from "@shsfwork/constants/common";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shsfwork/components/shadcn/tooltip";
import { Button } from "@shsfwork/components/custom/3d-button";

import { EmailCopyButton } from "./email-button";
import Link from "@shsfwork/components/custom/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <Section id="hero" className="space-y-4 md:space-y-8">
      {/* MOCK CONTENT */}
      <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-center md:text-lg animate-appear opacity-0">
        <Balancer id="hero-intro">Meet {SITE.domain}</Balancer>
      </p>

      <h1 className="text-5xl md:text-7xl text-center animate-appear opacity-0 delay-100 font-semibold">
        <Balancer id="hero-title">Stay Hungry, Stay Foolish</Balancer>
      </h1>

      <p className="text-xl md:text-3xl text-center font-light animate-appear opacity-0 delay-300">
        <Balancer id="hero-description">
          Digital products that think different, challenge the status quo, and
          put a dent in the universe.
        </Balancer>
      </p>

      <div className="flex items-center justify-center animate-appear opacity-0 delay-500 gap-4 flex-wrap">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ai" size="lg" className="px-16" asChild>
                <a
                  title={ONLINE.contact.title}
                  href={ONLINE.contact.href + "?subject=Hello!"}
                >
                  Get in touch
                </a>
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
        <Button variant="outline" size="lg" asChild className="group">
          <Link
            title={ONLINE.cal.title}
            className="flex items-center gap-1"
            href={ONLINE.cal.href}
          >
            <span>Schedule a call</span>
            <ChevronRight
              className="transition-transform group-hover:translate-x-1 duration-300"
              size={16}
            />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
