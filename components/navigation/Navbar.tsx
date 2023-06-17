"use client";
import React, { useContext, useState } from "react";
import { useStateContext } from "../Providers";
import NavItems from "./NavItems";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const { setActiveMenu, isMobile } = useStateContext();
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between w-full h-20 p-4">
        <img src="/logo.svg" alt="Logo Icon" className="w-12 h-12" />
        {isMobile ? (
          <button onClick={handleActiveMenu}>
            <MenuIcon />
          </button>
        ) : (
          <NavItems />
        )}
      </div>
    </div>
  );
};

export default Navbar;
