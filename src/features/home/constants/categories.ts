import {
  Smartphone,
  Car,
  Laptop,
  House,
  Shirt,
  Bike,
  Sofa,
  BriefcaseBusiness,
} from "lucide-react";

import type { Category } from "../types/category";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Mobiles",
    icon: Smartphone,
    adsCount: 2340,
  },
  {
    id: 2,
    title: "Cars",
    icon: Car,
    adsCount: 890,
  },
  {
    id: 3,
    title: "Electronics",
    icon: Laptop,
    adsCount: 1245,
  },
  {
    id: 4,
    title: "Property",
    icon: House,
    adsCount: 430,
  },
  {
    id: 5,
    title: "Fashion",
    icon: Shirt,
    adsCount: 1560,
  },
  {
    id: 6,
    title: "Bikes",
    icon: Bike,
    adsCount: 670,
  },
  {
    id: 7,
    title: "Furniture",
    icon: Sofa,
    adsCount: 315,
  },
  {
    id: 8,
    title: "Jobs",
    icon: BriefcaseBusiness,
    adsCount: 245,
  },
];