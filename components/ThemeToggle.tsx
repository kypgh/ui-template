import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  // Initialize with a default value, we'll update this when the component mounts
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, check if dark mode is already enabled
  useEffect(() => {
    // Check if document exists (for SSR)
    if (typeof document !== "undefined") {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      // Optionally save preference to localStorage
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      // Optionally save preference to localStorage
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">{isDarkMode ? "Light mode" : "Dark mode"}</span>
    </Button>
  );
}
