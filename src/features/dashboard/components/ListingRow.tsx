import {
  Edit,
  Eye,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Listing } from "@/types/listings";

interface Props {
  listing: Listing;
}

const statusVariant = {
  Active: "default",
  Pending: "secondary",
  Sold: "outline",
} as const;

const ListingRow = ({ listing }: Props) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-4 font-medium">
        {listing.title}
      </td>

      <td className="px-4 py-4">
        {listing.category}
      </td>

      <td className="px-4 py-4">
        ₹{listing.price.toLocaleString("en-IN")}
      </td>

      <td className="px-4 py-4">
        <Badge variant={statusVariant[listing.status]}>
          {listing.status}
        </Badge>
      </td>

      <td className="px-4 py-4">
        {listing.views}
      </td>

      <td className="px-4 py-4">
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
          >
            <Edit className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ListingRow;