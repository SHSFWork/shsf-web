import ContactButton from "@shsfwork/components/custom/contact-button";
import MeetingButton from "@shsfwork/components/custom/meeting-button";

export default function CTASection() {
  return (
    <div>
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-12 lg:p-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Let&apos;s create a product that users love and businesses value.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <ContactButton />
          <MeetingButton />
        </div>
      </div>
    </div>
  );
}
