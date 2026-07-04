import { Link } from "react-router-dom";

import {
  Plus,
  Heart,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button >
          <Link to="/post-ad">
            <Plus className="mr-2 h-4 w-4" />
            Post New Ad
          </Link>
        </Button>

        <Button
          variant="outline"
        >
          <Link to="/wishlist">
            <Heart className="mr-2 h-4 w-4" />
            Wishlist
          </Link>
        </Button>

        <Button
          variant="outline"
        >
          <Link to="/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;