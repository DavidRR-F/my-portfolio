"use client";
import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

type ProviderProps = {
  children: React.ReactNode;
};

export const ScreenSizeContext = createContext<boolean | null>(null);

const Providers = ({ children }: ProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    setIsMobile(window.innerWidth < 600);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted)
    return (
      <ScreenSizeContext.Provider value={isMobile}>
        {children}
      </ScreenSizeContext.Provider>
    );
  return (
    <ThemeProvider attribute="class">
      <ScreenSizeContext.Provider value={isMobile}>
        {children}
      </ScreenSizeContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
