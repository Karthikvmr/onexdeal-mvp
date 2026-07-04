import { Link } from "react-router-dom";

import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/features/theme/components/ThemeToggle";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Mobile Menu */}
          <MobileMenu />

          {/* Logo */}
          <Logo />

          {/* Search */}
          <SearchBar />

          {/* Desktop Nav */}
          <NavLinks />
          
          <ThemeToggle />
          
          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/login">
              <Button variant="ghost">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="ghost">
                Register
              </Button>
            </Link>

            <Link to="/post-ad">
              <Button>
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;