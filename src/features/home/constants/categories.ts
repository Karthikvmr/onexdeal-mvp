import type { Category } from "../types/category";

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

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Mobiles",
    slug: "mobiles",
    icon: Smartphone,
    adsCount: 2340,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Cars",
    slug: "cars",
    icon: Car,
    adsCount: 890,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    title: "Electronics",
    slug: "electronics",
    icon: Laptop,
    adsCount: 1245,
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: 4,
    title: "Property",
    slug: "property",
    icon: House,
    adsCount: 430,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    title: "Fashion",
    slug: "fashion",
    icon: Shirt,
    adsCount: 1560,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 6,
    title: "Bikes",
    slug: "bikes",
    icon: Bike,
    adsCount: 670,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 7,
    title: "Furniture",
    slug: "furniture",
    icon: Sofa,
    adsCount: 315,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 8,
    title: "Jobs",
    slug: "jobs",
    icon: BriefcaseBusiness,
    adsCount: 245,
    color: "bg-yellow-100 text-yellow-700",
  },
];