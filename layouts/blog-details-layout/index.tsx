import AsideRight from "./components/aside-right";

export default function BlogDetailsLayout({ children }: ChildrenType) {
  return (
    <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-[1.5fr_0.5fr]">
      <section className="w-full lg:flex lg:gap-4">
        <div className="w-full">{children}</div>

        <div className="hidden lg:block w-0.5 bg-border shrink-0" />
      </section>

      <aside className="hidden lg:block sticky top-4 self-start space-y-4">
        <AsideRight />
      </aside>
    </div>
  );
}
