import { Heart, MapPin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import type { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <Badge>{product.condition}</Badge>

        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <Heart className="h-4 w-4" />
          </Button>

          <Button size="icon" variant="outline">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <h1 className="mt-5 text-3xl font-bold">
        {product.title}
      </h1>

      <p className="mt-4 text-4xl font-bold text-blue-600">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      <div className="mt-6 flex items-center gap-2 text-slate-500">
        <MapPin className="h-4 w-4" />
        {product.location}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {product.postedAt}
      </p>

      <hr className="my-6" />

      <h2 className="font-semibold">Description</h2>

      <p className="mt-3 leading-7 text-slate-600">
        This is a premium quality product posted on OneXDeal.
        Product description will be loaded from the backend API.
      </p>
    </div>
  );
};

export default ProductInfo;