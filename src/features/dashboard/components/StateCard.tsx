import { type LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
}: Props) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <Icon className="text-blue-600" />

        <span className="text-3xl font-bold">
          {value}
        </span>
      </div>

      <p className="mt-5 text-slate-500">
        {title}
      </p>
    </div>
  );
};

export default StatCard;