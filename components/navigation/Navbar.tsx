"use client";
import React, { useContext, useState } from "react";
import { useStateContext } from "../Providers";
import NavItems from "./NavItems";
import MenuIcon from "./MenuIcon";
import Logo from "../Logo";

const Navbar = () => {
  const { setActiveMenu, isMobile } = useStateContext();
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <header className="absolute w-full z-10">
      <div className="flex items-center justify-between w-full h-20 p-4">
        <Logo />
        {isMobile ? (
          <button onClick={handleActiveMenu}>
            <MenuIcon />
          </button>
        ) : (
          <NavItems />
        )}
      </div>
    </header>
  );
};

export default Navbar;
