const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          OneXDeal
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="/">Home</a>
          <a href="/">Categories</a>
          <a href="/">Wishlist</a>
          <a href="/">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;