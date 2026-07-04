import Container from "@/components/common/Container";

import { PRODUCTS } from "../constants/products";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import SellerCard from "../components/SellerCard";
import SimilarProducts from "../components/SimilarProducts";

const ProductDetailsPage = () => {
  const product = PRODUCTS[0];

  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <ProductGallery
              image={product.image}
              title={product.title}
            />

            <ProductInfo product={product} />
          </div>

          <SellerCard />
        </div>

        <SimilarProducts />
      </Container>
    </section>
  );
};

export default ProductDetailsPage;