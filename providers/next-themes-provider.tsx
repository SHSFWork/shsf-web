"use client";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export default function NextThemesProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
