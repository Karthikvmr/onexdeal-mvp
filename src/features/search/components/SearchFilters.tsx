import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  "Mobiles",
  "Cars",
  "Electronics",
  "Furniture",
];

const conditions = [
  "New",
  "Like New",
  "Good",
  "Fair",
];

const SearchFilters = () => {
  return (
    <aside className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Filters
        </h2>

        <Button
          variant="ghost"
          size="sm"
        >
          Clear
        </Button>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 font-medium">
            Category
          </h3>

          <div className="space-y-3">
            {categories.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3"
              >
                <Checkbox />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-medium">
            Condition
          </h3>

          <div className="space-y-3">
            {conditions.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3"
              >
                <Checkbox />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-medium">
            Location
          </h3>

          <Input placeholder="Enter city" />
        </div>

        <div>
          <h3 className="mb-4 font-medium">
            Max Price
          </h3>

          <Input
            type="number"
            placeholder="50000"
          />
        </div>

        <Button className="w-full">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
};

export default SearchFilters;