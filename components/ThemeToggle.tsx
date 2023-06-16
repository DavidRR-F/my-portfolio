"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      <div className={`bg ${theme}`}>
        <div className="toggle-container">
          <div className={`toggle ${theme}`}></div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
