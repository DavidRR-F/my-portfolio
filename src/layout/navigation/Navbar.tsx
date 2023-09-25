import React, { useContext, useState } from "react";
import { useStateContext } from "services/Providers";
import NavItems from "components/navigation/NavItems";
import MenuIcon from "components/navigation/MenuIcon";
import Logo from "components/navigation/Logo";
import FadeIn from "animation/FadeIn";

const Navbar = () => {
  const { setActiveMenu, isMobile, notTop } = useStateContext();
  const handleActiveMenu = () => {
    setActiveMenu((prevState) => !prevState);
  };
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="flex items-center justify-between w-full h-20 p-4">
          <Logo />
          {isMobile ? (
            <button
              className="flex items-center justify-center w-min h-fit"
              onClick={handleActiveMenu}
            >
              <MenuIcon />
            </button>
          ) : (
            <NavItems />
          )}
        </div>
      </header>

      <header className="fixed w-full z-20">
        <FadeIn direction="down" view={notTop}>
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
        </FadeIn>
      </header>
    </>
  );
};

export default Navbar;
