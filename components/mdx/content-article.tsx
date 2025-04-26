import { cn } from "@shsfwork/lib/cn";

export default function ContentArticle({ children }: ChildrenType) {
  return (
    <article
      className={cn(
        "py-4",
        "md:max-w-2xl container",
        "prose prose-base md:prose-lg dark:prose-invert",
        "hover:prose-a:decoration-primary-500 hover:prose-a:decoration-2",

        // Inline code styling
        "prose-code:rounded prose-code:border-0 prose-code:px-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-code:bg-stack-900 prose-code:p-1 prose-code:text-white",

        // Code block container styling
        "prose-pre:rounded-lg prose-pre:border-0 prose-pre:bg-stack-900 prose-pre:p-4",

        // Code within code blocks
        "prose-pre:prose-code:bg-transparent prose-pre:prose-code:border-0 prose-pre:prose-code:p-4"
      )}
    >
      {children}
    </article>
  );
}
