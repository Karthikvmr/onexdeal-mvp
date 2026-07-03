import { NavLink } from "react-router-dom";
import { NAVIGATION } from "@/constants/navigation";

const NavLinks = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;