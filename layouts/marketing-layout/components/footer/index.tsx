import { SITE } from "@shsfwork/constants/common";

import { Button } from "@shsfwork/components/shadcn/button";

import Link from "@shsfwork/components/custom/link";
import Logo from "@shsfwork/components/custom/logo";

import Container from "@shsfwork/components/semantic-elements/container";
import Section from "@shsfwork/components/semantic-elements/section";
import Balancer from "@shsfwork/components/semantic-elements/balancer";

import FooterNav from "./components/nav";
import { FOOTER_MARKETING_NAV, FOOTER_SOCIALS } from "./constants";

export default function Footer() {
  return (
    <footer>
      <Section id="marketing-footer">
        <Container
          id="marketing-footer-container"
          className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]"
        >
          <div className="flex flex-col gap-6">
            <Logo />
            <p>
              <Balancer id="marketing-footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Balancer>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <FooterNav items={FOOTER_MARKETING_NAV.website} id="footer-nav" />
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <FooterNav
              items={FOOTER_MARKETING_NAV.legal}
              id="footer-nav-legal"
            />
          </div>
        </Container>

        <Container
          id="marketing-footer-socials"
          className="flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2"
        >
          <FooterNav id="footer-nav-socials" className="flex-row">
            {FOOTER_SOCIALS.map((social, i) => (
              <li key={i}>
                <Button asChild variant="outline" size="icon">
                  <Link href={social.href} title={social.href}>
                    {<social.icon />}
                    <span className="sr-only">
                      {`Follow us on ${social.href}`}
                    </span>
                  </Link>
                </Button>
              </li>
            ))}
          </FooterNav>

          <p className="text-muted-foreground">
            ©{" "}
            <Link title={SITE.title} href={SITE.href}>
              {SITE.title}
            </Link>
            . All rights reserved. 2025-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
