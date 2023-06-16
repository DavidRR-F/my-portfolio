"use client";
import React, { useContext, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ScreenSizeContext } from "./Providers";

const Navbar = () => {
  const mobile = useContext(ScreenSizeContext);
  const [activeMenu, setActiveMenu] = useState(false);
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <div className="absolute w-full">
      {mobile ? (
        <div>stuff</div>
      ) : (
        <div className="flex items-center justify-between w-full h-20 p-4">
          Navbar
          <ThemeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;
