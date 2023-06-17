"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider } from "next-themes";

type ProviderProps = {
  children: React.ReactNode;
};

type InitState = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean | null;
};

const StateContext = createContext<InitState>({
  activeMenu: false,
  setActiveMenu: () => {},
  isMobile: null,
});

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
      if (window.innerWidth > 600) {
        setActiveMenu(false);
      }
    };

    setIsMobile(window.innerWidth < 600);

    if (window.innerWidth > 600) {
      setActiveMenu(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted)
    return (
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isMobile }}>
        {children}
      </StateContext.Provider>
    );
  return (
    <ThemeProvider attribute="class">
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isMobile }}>
        {children}
      </StateContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
export const useStateContext = () => useContext(StateContext);