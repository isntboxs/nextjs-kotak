"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      className="w-10 px-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-100" />
      ) : (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:rotate-90 dark:scale-0" />
      )}
    </Button>
  );
};

export default ToggleThemeButton;
