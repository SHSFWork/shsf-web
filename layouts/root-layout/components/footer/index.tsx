import Logo from "@shsfwork/components/custom/logo";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

import Container from "@shsfwork/components/semantic-elements/container";
import Balancer from "@shsfwork/components/semantic-elements/balancer";

import FooterNav from "./components/nav";
import NewsletterBgEffect from "./components/newsletter-bg-effect";

import { FOOTER__NAV } from "./constants";
import OpenSourceBadge from "@shsfwork/components/custom/open-source-badge";
import DiscordButton from "@shsfwork/components/custom/discord-button";
import { NewsletterSection } from "@shsfwork/components/custom/newsletter";

export default function Footer() {
  return (
    <footer>
      <Container
        id="footer-container"
        className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr]"
      >
        <div className="space-y-6">
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
              <ThemeSwitcher />
              <DiscordButton />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h5>Sitemap</h5>
          <FooterNav items={FOOTER__NAV.website} id="footer-nav" />
        </div>
        <div className="space-y-2">
          <h5>Featured Products</h5>
          <FooterNav items={FOOTER__NAV.product} id="footer-nav-product" />
        </div>
        <div className="space-y-2">
          <h5>Online</h5>
          <FooterNav items={FOOTER__NAV.online} id="footer-nav-legal" />
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

        <p className="text-sm text-muted-foreground">
          &copy; 2025-present. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
