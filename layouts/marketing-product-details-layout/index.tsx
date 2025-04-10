import AsideRight from "./components/aside-right";

export default function MarketingProductDetailsLayout({
  children,
}: ChildrenType) {
  return (
    <div className="grid md:gap-4 md:grid-cols-[1.5fr_0.5fr]">
      <section className="md:flex gap-4">
        <div>{children}</div>

        <div className="hidden md:block w-0.5 bg-border h-full " />
      </section>

      <aside className="hidden md:sticky top-4 self-start space-y-4">
        <AsideRight />
      </aside>
    </div>
  );
}
