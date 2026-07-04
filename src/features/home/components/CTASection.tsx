import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-14 text-white lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                🚀 Join OneXDeal Today
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                Sell faster.
                <br />
                Buy smarter.
              </h2>

              <p className="mt-5 max-w-lg text-blue-100">
                Discover thousands of verified listings or post your own ad in
                minutes. OneXDeal helps buyers and sellers connect with ease.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                >
                  <Link to="/post-ad">
                    <Plus className="mr-2 h-5 w-5" />
                    Post Your Ad
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700"
                >
                  <Link to="/categories">
                    Browse Listings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid w-full max-w-sm grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold">50K+</h3>
                  <p className="mt-2 text-blue-100">Active Listings</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="mt-2 text-blue-100">Happy Users</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold">100+</h3>
                  <p className="mt-2 text-blue-100">Cities Covered</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold">24×7</h3>
                  <p className="mt-2 text-blue-100">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;