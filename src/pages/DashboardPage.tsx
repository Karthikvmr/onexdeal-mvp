import {
  Heart,
  Package,
  IndianRupee,
  Eye,
} from "lucide-react";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import StatCard from "@/features/dashboard/components/StateCard";
import ListingTable from "@/features/dashboard/components/ListingTable";
import QuickActions from "@/features/dashboard/components/QuickActions";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div>
        <DashboardHeader />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Active Listings"
            value="12"
            icon={Package}
          />

          <StatCard
            title="Wishlist"
            value="24"
            icon={Heart}
          />

          <StatCard
            title="Profile Views"
            value="1,245"
            icon={Eye}
          />

          <StatCard
            title="Revenue"
            value="₹84K"
            icon={IndianRupee}
          />

          <ListingTable />
          <QuickActions />
          
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;