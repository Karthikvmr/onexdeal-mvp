export interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  postedAt: string;
  image: string;
  category: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  isFeatured: boolean;
}