import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <>
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
        🚀 New Marketplace Experience
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Buy. Sell.
        <span className="text-blue-600"> Discover.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        OneXDeal helps you discover amazing deals, sell products quickly,
        and connect with trusted buyers in your city.
      </p>

      <HeroActions />

      <HeroStats />
    </>
  );
};

export default HeroContent;