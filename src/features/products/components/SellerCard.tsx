import { Phone, MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const SellerCard = () => {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>

        <div>
          <h3 className="font-semibold">
            Karthik R
          </h3>

          <p className="text-sm text-slate-500">
            Member since 2025
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button className="w-full">
          <Phone className="mr-2 h-4 w-4" />
          Call Seller
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat Now
        </Button>
      </div>
    </div>
  );
};

export default SellerCard;