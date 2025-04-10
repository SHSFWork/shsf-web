import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import BackButton from "@shsfwork/components/custom/back-button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section>
      <div className="container mx-auto flex min-h-lvh items-center px-6 py-12">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Oops! Page not found.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            It looks like the page you&apos;re looking for doesn&apos;t exist.
          </p>

          <div className="mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <BackButton />

            <Link href="/" className={buttonVariants({ variant: "ai" })}>
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
