const SearchFilters = () => {
  return (
    <aside className="rounded-2xl border bg-white p-6">
      <h2 className="text-lg font-semibold">
        Filters
      </h2>

      <div className="mt-6 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select className="w-full rounded-lg border p-2">
            <option>All</option>
            <option>Mobiles</option>
            <option>Cars</option>
            <option>Electronics</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Condition
          </label>

          <select className="w-full rounded-lg border p-2">
            <option>All</option>
            <option>New</option>
            <option>Like New</option>
            <option>Good</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Price
          </label>

          <input
            type="range"
            className="w-full"
          />
        </div>
      </div>
    </aside>
  );
};
export default SearchFilters;