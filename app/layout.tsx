import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn } from "@shsfwork/lib/cn";
import NextThemesProvider from "@shsfwork/providers/next-themes-provider";

import "@shsfwork/assets/styles/globals.css";
import { SITE } from "@shsfwork/constants/common";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function Root({ children }: ChildrenType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
