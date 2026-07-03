import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

const SectionHeader = ({
  title,
  description,
  actionLabel,
  actionHref,
}: SectionHeaderProps) => {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-2 max-w-2xl text-slate-600">
          {description}
        </p>
      </div>

      {actionLabel && actionHref && (
        <Link
          to={actionHref}
          className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          {actionLabel}

          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;