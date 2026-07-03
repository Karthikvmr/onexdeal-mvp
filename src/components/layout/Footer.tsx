const Footer = () => {
  return (
    <footer className="border-t bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} OneXDeal.
          Buy. Sell. Discover.
        </p>
      </div>
    </footer>
  );
};

export default Footer;