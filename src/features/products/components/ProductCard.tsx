import { Heart, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type { Product } from "../types/product";

import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>

        <Badge className="absolute left-4 top-4">
          {product.condition}
        </Badge>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h3>

        <p className="text-2xl font-bold text-blue-600">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={16} />
          {product.location}
        </div>

        <p className="text-sm text-slate-400">
          {product.postedAt}
        </p>
      </div>
    </article>
    </Link>
  );
};
export default ProductCard;