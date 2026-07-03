import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/components/common/Container";

const QuickSearch = () => {
  return (
    <section className="-mt-10 relative z-10">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">
            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                className="pl-10 h-12"
                placeholder="Search for mobiles, cars, bikes..."
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <Input
                className="pl-10 h-12"
                placeholder="Location"
                defaultValue="Bangalore"
              />
            </div>

            {/* Button */}
            <Button className="h-12 px-8">
              Search
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuickSearch;