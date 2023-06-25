"use client";
import React, { useContext, useState } from "react";
import { useStateContext } from "../Providers";
import NavItems from "./NavItems";
import MenuIcon from "./MenuIcon";
import Logo from "../Logo";
import Animate from "../animation/Animate";

const Navbar = () => {
  const { setActiveMenu, isMobile, notTop } = useStateContext();
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <>
      <header className="absolute w-full z-20">
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

      <header className="fixed w-full z-10">
        <Animate direction="down" view={notTop}>
          <div className="flex items-center justify-between w-full h-20 p-4 bg-background-200 opacity-90">
            <Logo />
            {isMobile ? (
              <button onClick={handleActiveMenu}>
                <MenuIcon />
              </button>
            ) : (
              <NavItems secondary={true} />
            )}
          </div>
        </Animate>
      </header>
    </>
  );
};

export default Navbar;
