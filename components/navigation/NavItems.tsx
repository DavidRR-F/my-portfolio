import React, { useContext } from "react";
import ThemeToggle from "../ThemeToggle";

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-3 mobile:flex-row">
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default NavItems;
