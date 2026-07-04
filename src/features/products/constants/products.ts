import type { Product } from "../types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    price: 124999,
    location: "Bangalore",
    postedAt: "2 hours ago",
    category: "Mobiles",
    condition: "Like New",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
  },
  {
    id: 2,
    title: "Royal Enfield Classic 350",
    price: 165000,
    location: "Chennai",
    postedAt: "5 hours ago",
    category: "Bikes",
    condition: "Good",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  },
  {
    id: 3,
    title: 'MacBook Pro M3 14"',
    price: 149999,
    location: "Hyderabad",
    postedAt: "1 day ago",
    category: "Electronics",
    condition: "New",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
  },
  {
    id: 4,
    title: "Sofa Set",
    price: 28000,
    location: "Coimbatore",
    postedAt: "3 days ago",
    category: "Furniture",
    condition: "Good",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
];