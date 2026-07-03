import { HERO_STATS } from "../constants/hero";

const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6">
      {HERO_STATS.map((item) => (
        <div key={item.id}>
          <h3 className="text-2xl font-bold text-slate-900">
            {item.value}
          </h3>

          <p className="text-sm text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;