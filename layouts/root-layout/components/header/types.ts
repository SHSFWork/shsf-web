import { LucideIcon } from "lucide-react";

export type HeaderMenuItemProps = {
  title: string;
  url: string;
  excerpt?: string;
  icon?: string | LucideIcon;
  items?: HeaderMenuItemProps[];
};
