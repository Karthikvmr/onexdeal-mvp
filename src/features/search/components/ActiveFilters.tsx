import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const filters = ["Mobiles", "Like New", "Under ₹50K"];

const ActiveFilters = () => {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant="secondary"
          className="gap-2 px-3 py-1"
        >
          {filter}

          <X
            size={14}
            className="cursor-pointer"
          />
        </Badge>
      ))}
    </div>
  );
};

export default ActiveFilters;