import Container from "@/components/common/Container";

import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";

import { CATEGORIES } from "../constants/categories";

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Browse Categories"
          description="Discover products across our most popular categories."
          actionLabel="View All"
          actionHref="/categories"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;