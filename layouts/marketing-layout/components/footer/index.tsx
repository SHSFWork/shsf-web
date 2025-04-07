import { SITE, ONLINE } from "@shsfwork/constants/common";

import Image from "next/image";

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
import { NewsletterSection } from "./components/newsletter";
import NewsletterBgEffect from "./components/newsletter-bg-effect";

import { FOOTER_MARKETING_NAV } from "./constants";

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
                Digital products that think different, challenge the status quo,
                and put a dent in the universe.
              </Balancer>
            </p>
            <div className="animate-appear opacity-0 delay-500">
              <Link
                title={ONLINE.bluesky.title}
                href={ONLINE.bluesky.href}
                className="flex items-center gap-2 text-sm group/link"
              >
                <span>Follow us on</span>
                <figure className="aspect-square size-5 grayscale group-hover/link:grayscale-0 transition-all duration-200">
                  <Image
                    className="bg-cover bg-center bg-no-repeat object-cover"
                    src="/badges/bluesky-logo-gradient.png"
                    alt="Bluesky Logo"
                    loading="lazy"
                    width={32}
                    height={32}
                    draggable={false}
                  />
                </figure>
              </Link>
            </div>
            <div className="delay-500 opacity-0 animate-appear inline-block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h5>Website</h5>
          <FooterNav items={FOOTER_MARKETING_NAV.website} id="footer-nav" />
        </div>
        <div className="space-y-2">
          <h5>Our Products</h5>
          <FooterNav
            items={FOOTER_MARKETING_NAV.product}
            id="footer-nav-product"
          />
        </div>
        <div className="space-y-2">
          <h5>Legal</h5>
          <FooterNav items={FOOTER_MARKETING_NAV.legal} id="footer-nav-legal" />
        </div>
      </Container>

      <Container
        id="marketing-footer-newsletter"
        className="relative overflow-hidden bg-sidebar lg:rounded-xl"
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
            <AvatarImage src="/me.png" alt="@ozantekin" />
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
