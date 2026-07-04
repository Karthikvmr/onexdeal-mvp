import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({
  title,
  description,
  buttonLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed text-center">
      <SearchX className="mb-4 h-14 w-14 text-muted-foreground" />

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        {description}
      </p>

      {buttonLabel && (
        <Button
          className="mt-6"
          onClick={onAction}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;