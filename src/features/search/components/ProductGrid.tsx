import ProductCard from "@/features/products/components/ProductCard";
import { PRODUCTS } from "@/features/products/constants/products";

const ProductGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;