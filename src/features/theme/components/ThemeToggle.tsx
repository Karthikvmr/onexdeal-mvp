import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hooks";

import { toggleTheme } from "../store/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(
    (state) => state.theme.mode
  );

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;