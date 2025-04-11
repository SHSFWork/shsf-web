import PageHeader from "@shsfwork/components/custom/page-header";
import Section from "@shsfwork/components/semantic-elements/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shsfwork/components/shadcn/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shsfwork/components/shadcn/avatar";

import ContactButton from "./contact-button";
import { FAQ_ITEMS } from "../constants";

export default function FaqsSection() {
  return (
    <Section id="faqs">
      <PageHeader title="FAQs" description="We are here to help you." />

      <div className="space-y-8">
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/logos/me.png" alt="@ozantekin" />
              <AvatarFallback>OT</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            Still have questions?
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            Can&#39;t find the answer you&#39;re looking for? Our support team
            is here to help with any technical questions or concerns.
          </p>
          <ContactButton label="Contact Support" />
        </div>
      </div>
    </Section>
  );
}
