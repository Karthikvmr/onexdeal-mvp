import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  message = "Something went wrong.",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border text-center">
      <AlertTriangle className="mb-4 h-14 w-14 text-destructive" />

      <h2 className="text-2xl font-semibold">
        Oops!
      </h2>

      <p className="mt-2 text-muted-foreground">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;