import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's an overview of your account.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />

        <Avatar>
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;