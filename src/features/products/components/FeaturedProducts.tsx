import Container from "@/components/common/Container";
import SectionHeader from "@/features/home/components/SectionHeader";

import ProductCard from "./ProductCard";

import { PRODUCTS } from "../constants/products";

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <SectionHeader
          title="Featured Products"
          description="Handpicked listings from our marketplace."
          actionLabel="View All"
          actionHref="/products"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;