import {
  LayoutDashboard,
  Package,
  Heart,
  User,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Package,
    label: "My Listings",
    path: "/dashboard/listings",
  },
  {
    icon: Heart,
    label: "Wishlist",
    path: "/wishlist",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

const DashboardSidebar = () => {
  return (
    <aside className="rounded-2xl border bg-white p-4 shadow-sm">
      <h2 className="mb-6 px-3 text-xl font-bold">
        Dashboard
      </h2>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-100"
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;