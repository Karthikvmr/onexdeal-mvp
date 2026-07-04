import { useAppSelector } from "@/app/store/hooks";

export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};