import Container from "@/components/common/Container";

import ActiveFilters from "../components/ActiveFilters";
import ProductGrid from "../components/ProductGrid";
import SearchFilters from "../components/SearchFilters";
import SearchHeader from "../components/SearchHeader";
import SortDropdown from "../components/SortDropdown";

const SearchPage = () => {
  return (
    <section className="py-10">
      <Container>
        <SearchHeader />

        <div className="mt-6 flex items-center justify-between">
          <ActiveFilters />
          <SortDropdown />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          <SearchFilters />
          <ProductGrid />
        </div>
      </Container>
    </section>
  );
};

export default SearchPage;