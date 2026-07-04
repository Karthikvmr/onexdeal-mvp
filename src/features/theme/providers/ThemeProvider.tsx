import { type ReactNode, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { setTheme } from "../store/themeSlice";
import { themeStorage } from "../utils/themeStorage";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(
    (state) => state.theme.mode
  );

  useEffect(() => {
    dispatch(setTheme(themeStorage.get()));
  }, [dispatch]);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(mode);

    themeStorage.set(mode);
  }, [mode]);

  return <>{children}</>;
};

export default ThemeProvider;