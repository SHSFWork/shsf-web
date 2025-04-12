import { SITE, ONLINE } from "@shsfwork/constants/common";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shsfwork/components/shadcn/avatar";

import Link from "@shsfwork/components/custom/link";
import Logo from "@shsfwork/components/custom/logo";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

import Container from "@shsfwork/components/semantic-elements/container";
import Balancer from "@shsfwork/components/semantic-elements/balancer";

import FooterNav from "./components/nav";
import { NewsletterSection } from "../../../../components/custom/newsletter";
import NewsletterBgEffect from "./components/newsletter-bg-effect";

import { FOOTER_MARKETING_NAV } from "./constants";
import OpenSourceBadge from "@shsfwork/components/custom/open-source-badge";

export default function Footer() {
  return (
    <footer>
      <Container
        id="marketing-footer-container"
        className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr]"
      >
        <div className="space-y-6">
          <Logo isText={false} className="animate-appear opacity-0" />
          <div className="space-y-4">
            <h1 className="text-xl animate-appear opacity-0 delay-100 font-semibold">
              <Balancer id="marketing-footer-title">
                Stay Hungry, Stay Foolish
              </Balancer>
            </h1>
            <p className="animate-appear opacity-0 delay-300">
              <Balancer id="marketing-footer-description">
                Crafting fast, responsive, and user-centric web experiences for
                startups and businesses that convert visitors into customers.
              </Balancer>
            </p>
            <div className="animate-appear opacity-0 delay-500">
              <OpenSourceBadge />
            </div>
            <div className="delay-500 opacity-0 animate-appear inline-block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h5>Sitemap</h5>
          <FooterNav items={FOOTER_MARKETING_NAV.website} id="footer-nav" />
        </div>
        <div className="space-y-2">
          <h5>Featured Products</h5>
          <FooterNav
            items={FOOTER_MARKETING_NAV.product}
            id="footer-nav-product"
          />
        </div>
        <div className="space-y-2">
          <h5>Online</h5>
          <FooterNav
            items={FOOTER_MARKETING_NAV.online}
            id="footer-nav-legal"
          />
        </div>
      </Container>

      <Container
        id="marketing-footer-newsletter"
        className="relative overflow-hidden bg-accent lg:rounded-xl"
      >
        <NewsletterSection />
        <NewsletterBgEffect />
      </Container>

      <Container
        id="marketing-footer-socials"
        className="flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2"
      >
        <Link
          title={ONLINE.github.title}
          href={ONLINE.github.href}
          className="flex items-center justify-start gap-2 text-sm text-muted-foreground hover:opacity-80 transition-all duration-200"
        >
          <span>Built with 🍕 by </span>
          <Avatar className="rounded-md size-6 border">
            <AvatarImage src="/logos/me.png" alt="@ozantekin" />
            <AvatarFallback className="rounded-md text-xs">OT</AvatarFallback>
          </Avatar>
        </Link>

        <p className="text-sm text-muted-foreground">
          &copy;{" "}
          <Link title={SITE.title} href={SITE.href}>
            {SITE.title}
          </Link>
          . All rights reserved. 2025-present.
        </p>
      </Container>
    </footer>
  );
}
