import { LucideIcon } from "lucide-react";

export type HeaderMenuItemProps = {
  title: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
  items?: HeaderMenuItemProps[];
};
