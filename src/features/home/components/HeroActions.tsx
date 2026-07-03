import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const HeroActions = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button size="lg">
        <Link to="/categories">
          Explore Marketplace
        </Link>
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        <Link to="/post-ad">
          Post an Ad
        </Link>
      </Button>
    </div>
  );
};

export default HeroActions;