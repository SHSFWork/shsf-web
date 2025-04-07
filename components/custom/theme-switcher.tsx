"use client";
import { Button } from "@shsfwork/components/shadcn/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label="Theme switcher"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span className="sr-only">Theme switcher</span>
    </Button>
  );
}
