import ListingRow from "./ListingRow";

import { LISTINGS } from "@/constants/listings";

const ListingTable = () => {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-6">
        <h2 className="text-xl font-semibold">
          My Listings
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Views</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {LISTINGS.map((listing) => (
              <ListingRow
                key={listing.id}
                listing={listing}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingTable;