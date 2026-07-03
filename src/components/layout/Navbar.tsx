import { Link } from "react-router-dom";

import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <SearchBar />

          <NavLinks />

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              Register
            </Link>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
              Post Ad
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;