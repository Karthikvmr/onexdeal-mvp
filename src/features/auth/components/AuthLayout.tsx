import { type ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: AuthLayoutProps) => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center bg-slate-50 py-16">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-5xl font-bold">
            OneXDeal
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Buy, Sell and Discover amazing deals with thousands of trusted buyers and sellers.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p>Listings</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p>Users</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p>Cities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center p-8 lg:p-14">
          <div className="w-full">
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-3 text-slate-500">
              {subtitle}
            </p>

            <div className="mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;