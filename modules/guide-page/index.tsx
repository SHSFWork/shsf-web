import { allGuides } from "@shsfwork/.content-collections/generated";
import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";

import { CCGuideSchema } from "./components/schema";
import GuideCard from "./components/guide-card";

export default function GuidePage() {
  return (
    <div>
      <CCGuideSchema />

      <PageHeader
        title="Guide"
        description="Stay updated with the latest news, tutorials, and insights from the world of web development."
        className="mb-8"
      />
      <Section id="guide">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {allGuides.map((b, i) => (
            <li key={i}>
              <article>
                <GuideCard guide={b} />
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
