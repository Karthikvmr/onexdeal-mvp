import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
        O
      </div>

      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-slate-900">
          OneXDeal
        </h1>

        <p className="-mt-1 text-xs text-slate-500">
          Buy. Sell. Discover.
        </p>
      </div>
    </Link>
  );
};

export default Logo;