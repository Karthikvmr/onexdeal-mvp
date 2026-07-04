import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="space-y-4 rounded-2xl border bg-background p-4">
      <Skeleton className="h-52 w-full rounded-xl" />

      <Skeleton className="h-6 w-3/4" />

      <Skeleton className="h-5 w-1/3" />

      <Skeleton className="h-5 w-1/2" />
    </div>
  );
};

export default LoadingCard;