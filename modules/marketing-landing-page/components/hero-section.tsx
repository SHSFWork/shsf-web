import Balancer from "@shsfwork/components/semantic-elements/balancer";
import Section from "@shsfwork/components/semantic-elements/section";
import { SITE } from "@shsfwork/constants/common";

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
    </Section>
  );
}
