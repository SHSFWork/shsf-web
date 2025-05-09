import Logo from "@shsfwork/components/custom/logo";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

import Container from "@shsfwork/components/semantic-elements/container";
import Balancer from "@shsfwork/components/semantic-elements/balancer";

import FooterNav from "./components/nav";
import NewsletterBgEffect from "./components/newsletter-bg-effect";

import { FOOTER_NAV_SECTIONS } from "./constants";
import OpenSourceBadge from "@shsfwork/components/custom/open-source-badge";
import DiscordButton from "@shsfwork/components/custom/discord-button";
import { NewsletterSection } from "@shsfwork/components/custom/newsletter";
import GithubButton from "@shsfwork/components/custom/github-button";

export default function Footer() {
  return (
    <footer>
      <Container id="footer-container">
        <div className="space-y-6 md:max-w-2/3">
          <Logo isText={false} className="animate-appear opacity-0" />
          <div className="space-y-4">
            <h1 className="text-xl animate-appear opacity-0 delay-100 font-semibold">
              <Balancer id="footer-title">Stay Hungry, Stay Foolish</Balancer>
            </h1>
            <p className="animate-appear opacity-0 delay-300">
              <Balancer id="footer-description">
                Crafting fast, responsive, and user-centric web experiences for
                startups and businesses that convert visitors into customers.
              </Balancer>
            </p>
            <div className="delay-500 opacity-0 animate-appear flex items-center gap-1.5">
              <DiscordButton />
              <GithubButton />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </Container>

      <Container id="footer-nav-container">
        <div className="flex gap-24 flex-wrap">
          {FOOTER_NAV_SECTIONS.map((section) => (
            <div className="space-y-2 flex-1" key={section.title}>
              <h5>{section.title}</h5>
              <FooterNav items={section.items} id={section.id} />
            </div>
          ))}
        </div>
      </Container>

      <Container
        id="footer-newsletter"
        className="relative overflow-hidden bg-accent lg:rounded-xl"
      >
        <NewsletterSection />
        <NewsletterBgEffect />
      </Container>

      <Container
        id="footer-socials"
        className="flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2"
      >
        <OpenSourceBadge />

        <p className="text-sm">&copy; 2025-present. All rights reserved.</p>
      </Container>
    </footer>
  );
}
