import { Pizza, Github } from "lucide-react";
import Section from "@shsfwork/components/semantic-elements/section";
import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import Link from "@shsfwork/components/custom/link";
import { DEV_ONLINE } from "@shsfwork/constants/common";

export default function CTA() {
  return (
    <Section id="sponsor-cta" className="rounded-lg bg-accent py-8 md:py-12">
      <div className="max-w-xl text-center mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Ready to Support?</h2>
        <p className="mb-6">
          Your sponsorship makes a real difference and helps me continue
          creating valuable resources for the developer community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            className={buttonVariants({})}
            title={DEV_ONLINE.sponsor.github.title}
            href={DEV_ONLINE.sponsor.github.href}
          >
            <Github />
            Sponsor on GitHub
          </Link>

          <Link
            title={DEV_ONLINE.sponsor.buymeacoffee.title}
            href={DEV_ONLINE.sponsor.buymeacoffee.href}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <Pizza />
            Buy Me a Pizza
          </Link>
        </div>
      </div>
    </Section>
  );
}
