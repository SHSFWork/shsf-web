import { buttonVariants } from "@shsfwork/components/shadcn/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@shsfwork/components/shadcn/navigation-menu";

import { cn } from "@shsfwork/lib/cn";
import Link from "@shsfwork/components/custom/link";

import { HeaderMenuItemProps } from "../types";
import { HEADER_NAV } from "../constants";

export default function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {HEADER_NAV.map(RenderDesktopMenuItem)}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function RenderDesktopMenuItem(item: HeaderMenuItemProps) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="text-sm">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <div className="grid gap-2 p-2 md:grid-cols-2 md:w-[550px]">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <DesktopSubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function DesktopSubMenuLink({ item }: { item: HeaderMenuItemProps }) {
  const Icon = item.icon;

  return (
    <Link
      className="flex items-start gap-1 rounded-md p-2 text-left transition-colors hover:bg-muted focus:bg-muted focus:outline-none w-full"
      href={item.url}
      title={item.title}
    >
      {Icon && (
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "!bg-background"
          )}
        >
          <Icon />
        </div>
      )}
      <div>
        <div className="text-sm font-medium">{item.title}</div>
        {item.description && (
          <p className="line-clamp-2 mt-1 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
}
