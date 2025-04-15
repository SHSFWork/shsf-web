import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SITE } from "@shsfwork/constants/common";
import { constructMetadata } from "@shsfwork/lib/constructMetadata";

import { cn } from "@shsfwork/lib/cn";
import NextThemesProvider from "@shsfwork/providers/next-themes-provider";
import RootLayout from "@shsfwork/layouts/root-layout";

import "@shsfwork/assets/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata({
  title: SITE.title,
  description: SITE.description,
});

export default function Root({ children }: ChildrenType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <NextThemesProvider>
          <RootLayout>{children}</RootLayout>
        </NextThemesProvider>
      </body>
    </html>
  );
}
