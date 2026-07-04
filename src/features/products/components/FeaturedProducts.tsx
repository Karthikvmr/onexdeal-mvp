import Container from "@/components/common/Container";
import SectionHeader from "@/features/home/components/SectionHeader";

import ProductCard from "./ProductCard";

import { useProducts } from "@/hooks/useProducts";
import LoadingCard from "@/components/shared/LoadingCard";
import ErrorState from "@/components/shared/ErrorState";

const FeaturedProducts = () => {
    const {
  data: products = [],
  isLoading,
  isError,
  refetch,
} = useProducts();

if (isLoading) {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </Container>
  );
}

if (isError) {
  return (
    <Container>
      <ErrorState
        message="Unable to load featured products."
        onRetry={refetch}
      />
    </Container>
  );
}
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
          {products.map((product) => (
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