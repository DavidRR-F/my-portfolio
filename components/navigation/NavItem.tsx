"use client";
import React from "react";
import { Link } from "react-scroll";
import { useStateContext } from "../Providers";

interface NavItemProps {
  order: number;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ order, name }) => {
  const { activeSection } = useStateContext();
  return (
    <li className="flex justify-center items-center">
      <Link
        className="text-gray-300 cursor-pointer"
        activeClass="active"
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {name}
      </Link>
      <span
        className={`pt-1 left-12 top-0 text-xs font-mono select-none ${
          activeSection === name.toLowerCase()
            ? "text-red-500"
            : "text-gray-200"
        }`}
      >
        .0{order}
      </span>
    </li>
  );
};

export default NavItem;
