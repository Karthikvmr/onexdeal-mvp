import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { NAVIGATION } from "@/constants/navigation";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger >
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72"
      >
        <div className="mt-8 space-y-2">
          <h2 className="text-2xl font-bold">
            OneXDeal
          </h2>

          <p className="text-sm text-slate-500">
            Buy. Sell. Discover.
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {NAVIGATION.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />

                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-10 space-y-3">
          <Link to="/login">
            <Button
              variant="outline"
              className="w-full"
            >
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button
              variant="outline"
              className="w-full"
            >
              Register
            </Button>
          </Link>

          <Link to="/post-ad">
            <Button className="w-full">
              Post Ad
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;