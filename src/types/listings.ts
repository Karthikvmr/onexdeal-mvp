export interface Listing {
  id: number;
  title: string;
  category: string;
  price: number;
  status: "Active" | "Pending" | "Sold";
  views: number;
}