import Logo from "@shsfwork/components/custom/logo";

import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shsfwork/components/shadcn/accordion";
import { Button } from "@shsfwork/components/shadcn/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shsfwork/components/shadcn/sheet";

import { HEADER_NAV } from "../constants";
import { HeaderMenuItemProps } from "../types";

import Link from "@shsfwork/components/custom/link";
import ThemeSwitcher from "@shsfwork/components/custom/theme-switcher";

export default function MobileNav() {
  return (
    <div className="flex h-16 items-center justify-between md:hidden">
      <Logo />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Toggle menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
              <Logo isText={false} />
            </SheetTitle>
          </SheetHeader>

          <div className="px-4">
            <nav>
              <Accordion type="single" collapsible className="w-full">
                {HEADER_NAV.map(RenderMobileMenuItem)}
              </Accordion>
            </nav>

            <ThemeSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function RenderMobileMenuItem(item: HeaderMenuItemProps) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-3 text-base font-medium hover:no-underline focus:outline-none">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="space-y-2 pt-1 pb-3">
          {item.items.map((subItem) => (
            <MobileSubMenuLink item={subItem} key={subItem.title} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <SheetClose asChild key={item.title}>
      <Link
        href={item.url}
        className="flex py-3 text-base font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary"
        title={item.title}
      >
        {item.title}
      </Link>
    </SheetClose>
  );
}

function MobileSubMenuLink({ item }: { item: HeaderMenuItemProps }) {
  return (
    <SheetClose asChild>
      <Link className="block" href={item.url} title={item.title}>
        <div>
          <div className="text-sm font-medium">{item.title}</div>
          {item.description && (
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground line-clamp-1">
              {item.description}
            </p>
          )}
        </div>
      </Link>
    </SheetClose>
  );
}
