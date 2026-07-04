import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortDropdown = () => {
  return (
    <Select defaultValue="latest">
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="latest">Latest</SelectItem>
        <SelectItem value="price-low">
          Price: Low to High
        </SelectItem>
        <SelectItem value="price-high">
          Price: High to Low
        </SelectItem>
        <SelectItem value="popular">
          Most Popular
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;