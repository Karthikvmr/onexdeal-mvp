import ProductCard from "./ProductCard";
import { PRODUCTS } from "../constants/products";

const SimilarProducts = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">
        Similar Products
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PRODUCTS.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;