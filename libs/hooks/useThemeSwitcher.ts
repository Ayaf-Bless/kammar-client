import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { mounted, toggleTheme };
};

export default useThemeSwitcher;
