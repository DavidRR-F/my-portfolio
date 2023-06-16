"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
