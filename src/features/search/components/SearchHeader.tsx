import { Search } from "lucide-react";

const SearchHeader = () => {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold">
          Search Results
        </h1>

        <p className="mt-2 text-slate-500">
          Showing 24 products
        </p>
      </div>

      <div className="relative w-full md:w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          className="h-11 w-full rounded-xl border pl-10"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchHeader;