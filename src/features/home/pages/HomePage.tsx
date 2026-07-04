import Hero from "../components/hero";
import QuickSearch from "../components/QuickSearch";
import CategoriesSection from "../components/CategoriesSection";

import FeaturedProducts from "@/features/products/components/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <QuickSearch />
      <CategoriesSection />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;