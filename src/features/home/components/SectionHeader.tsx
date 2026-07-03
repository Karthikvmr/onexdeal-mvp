import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  actionLabel?: string;
  actionHref?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  actionLabel,
  actionHref,
}: SectionHeaderProps) => {
  return (
    <div className="mb-10 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-slate-500">
          {subtitle}
        </p>
      </div>

      {actionLabel && actionHref && (
        <Link
          to={actionHref}
          className="font-semibold text-blue-600 hover:underline"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;