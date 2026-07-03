import { type LucideIcon } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  adsCount: number;
  color: string;
}