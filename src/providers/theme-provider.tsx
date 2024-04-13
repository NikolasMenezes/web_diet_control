import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextInterface {
  theme: Theme;
  setFavoriteTheme: (theme: Theme) => void;
}

export const themeContext = createContext({} as ThemeContextInterface);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

  function getTheme(): Theme {
    const userThemePreference = localStorage.getItem("theme") as Theme;

    if (userThemePreference) {
      return userThemePreference;
    }

    return darkModePreference.matches ? "dark" : "light";
  }

  const [theme, setTheme] = useState<Theme>(getTheme());

  function setFavoriteTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }

  useEffect(() => {
    darkModePreference.addEventListener("change", getTheme);

    return darkModePreference.removeEventListener("change", getTheme);
  }, []);

  return (
    <themeContext.Provider value={{ theme, setFavoriteTheme }}>
      {children}
    </themeContext.Provider>
  );
}
