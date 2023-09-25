import { createContext, useState, useEffect, useContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type InitState = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  isMobile: boolean | null;
  notTop: boolean | null;
};

const StateContext = createContext<InitState>({
  activeMenu: false,
  setActiveMenu: () => {},
  activeSection: "",
  isMobile: null,
  notTop: null,
});

const Providers = ({ children }: ProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [notTop, setNotTop] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const handleScroll = () => {
      setNotTop(window.scrollY > 600);
      const sections = document.querySelectorAll("section");
      let maxVisibleArea = 0;
      let maxVisibleSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleArea =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          maxVisibleSectionId = section.id;
        }
      });

      setActiveSection(maxVisibleSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, activeSection, isMobile, notTop }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default Providers;
export const useStateContext = () => useContext(StateContext);
