import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    // Check for system preference if no saved preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Apply dark mode if saved preference is dark or if system prefers dark and there's no saved preference
    if (savedTheme === "dark" || (systemPrefersDark && !savedTheme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <>{children}</>;
}
