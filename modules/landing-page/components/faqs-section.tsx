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

import ContactButton from "../../../components/custom/contact-button";
import { FAQ_ITEMS } from "../constants";

export default function FaqsSection() {
  return (
    <Section id="faqs">
      <PageHeader
        title="Common Questions"
        description=" Everything you need to know about our process and expertise."
      />

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
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[85%] border md:mb-5">
              <AvatarImage src="/logos/o.png" alt="@ozan" draggable="false" />
              <AvatarFallback>OT</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[85%] border md:mb-5">
              <AvatarImage src="/logos/y.png" alt="yigit" draggable="false" />
              <AvatarFallback>YT</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage
                src="/logos/n.png"
                alt="@nida"
                className="-rotate-45"
                draggable="false"
              />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            Start Your Project
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            Ready to elevate your digital presence? Let&#39;s discuss how our
            expertise can help you achieve your business goals.
          </p>
          <ContactButton label="Work With Us" />
        </div>
      </div>
    </Section>
  );
}
