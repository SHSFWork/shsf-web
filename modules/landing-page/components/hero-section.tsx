import Balancer from "@shsfwork/components/semantic-elements/balancer";
import Section from "@shsfwork/components/semantic-elements/section";
import { SITE } from "@shsfwork/constants/common";

import ContactButton from "../../../components/custom/contact-button";
import MeetingButton from "@shsfwork/components/custom/meeting-button";

export default function HeroSection() {
  return (
    <Section id="hero" className="space-y-4 md:space-y-8">
      {/* MOCK CONTENT */}
      <p className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-center md:text-lg animate-appear opacity-0">
        <Balancer id="hero-intro">Meet {SITE.domain}</Balancer>
      </p>

      <h1 className="text-5xl md:text-7xl text-center animate-appear opacity-0 delay-100 font-semibold">
        <Balancer id="hero-title">
          Product Engineering & Digital Products
        </Balancer>
      </h1>

      <p className="text-xl md:text-3xl text-center font-light animate-appear opacity-0 delay-300">
        <Balancer id="hero-description">
          Crafting fast, responsive, and user-centric web experiences for
          startups and businesses that convert visitors into customers.
        </Balancer>
      </p>

      <div className="flex items-center justify-center animate-appear opacity-0 delay-500 gap-4 flex-wrap">
        <ContactButton />
        <MeetingButton />
      </div>
    </Section>
  );
}
