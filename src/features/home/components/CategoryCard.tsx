import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Category } from "../types/category";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = category.icon;

  return (
    <Link
      to="/categories"
      aria-label={`Browse ${category.title}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
    >
      <div
        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${category.color}`}
      >
        <Icon
          size={28}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {category.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {category.adsCount.toLocaleString()} Ads
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-blue-600">
          Browse Category
        </span>

        <ArrowRight
          size={18}
          className="text-blue-600 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default CategoryCard;