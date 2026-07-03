import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const HeroActions = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button asChild size="lg">
        <Link to="/categories">
          Explore Marketplace
        </Link>
      </Button>

      <Button
        asChild
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