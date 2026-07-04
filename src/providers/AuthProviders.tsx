import { type ReactNode, useEffect } from "react";

import { useAppDispatch } from "@/app/store/hooks";

import { restoreSession } from "@/features/auth/store/authSlice";
import { tokenStorage } from "@/features/auth/utils/token";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = tokenStorage.get();

    if (token) {
      dispatch(restoreSession(token));
    }
  }, [dispatch]);

  return children;
};

export default AuthProvider;