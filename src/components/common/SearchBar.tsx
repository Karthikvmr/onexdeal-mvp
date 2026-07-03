import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative hidden flex-1 max-w-md lg:block">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search products..."
        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 outline-none transition-all focus:border-blue-600"
      />
    </div>
  );
};

export default SearchBar;