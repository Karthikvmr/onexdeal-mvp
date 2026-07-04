const THEME_KEY = "theme";

export type ThemeMode = "light" | "dark";

export const themeStorage = {
  get(): ThemeMode {
    const value = localStorage.getItem(THEME_KEY);

    if (value === "dark") return "dark";

    return "light";
  },

  set(theme: ThemeMode) {
    localStorage.setItem(THEME_KEY, theme);
  },
};