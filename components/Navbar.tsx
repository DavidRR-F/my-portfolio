"use client";
import React, { useContext, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ScreenSizeContext } from "./Providers";
import NavItems from "./NavItems";

const Navbar = () => {
  const Mobile = useContext(ScreenSizeContext);
  const [activeMenu, setActiveMenu] = useState(false);
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between w-full h-20 p-4">
        <img src="/logo.svg" alt="Logo Icon" className="w-12 h-12" />
        {Mobile ? (
          <button onClick={handleActiveMenu}>Menu Icon</button>
        ) : (
          <NavItems />
        )}
      </div>
    </div>
  );
};

export default Navbar;
