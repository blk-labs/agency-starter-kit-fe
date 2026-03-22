import React, { createContext, useEffect, useState } from "react";


export type Theme = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Root provider component that manages theme state (light/dark/system) and persists to localStorage.
 * This component sets up the ThemeContext and provides theme management functionality to all
 * child components. It initializes the theme from localStorage and automatically applies theme
 * changes to the DOM. It also listens to system theme preference changes when theme is set to 'system'.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - React components to wrap with the ThemeProvider
 * @returns {React.ReactElement} ThemeContext provider with value containing theme, resolvedTheme, and setTheme
 *
 * @note The selected theme is persisted to localStorage under the key 'theme' and will be
 * restored on subsequent app loads.
 *
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Here we Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, []);

  // Here we Apply theme
  useEffect(() => {
    const root = document.documentElement;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const finalTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    setResolvedTheme(finalTheme);

    root.classList.remove("light", "dark");
    root.classList.add(finalTheme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Here we Listen to system changes(System preference detection)
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = () => {
      const root = document.documentElement;
      const newTheme = media.matches ? "dark" : "light";
      setResolvedTheme(newTheme);
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};