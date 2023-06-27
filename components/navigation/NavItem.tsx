"use client";
import React from "react";
import { Link } from "react-scroll";
import { useStateContext } from "../Providers";

interface NavItemProps {
  order: number;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ order, name }) => {
  const { activeSection, setActiveMenu } = useStateContext();
  return (
    <li className="flex justify-center items-center">
      <Link
        className="text-gray-300 hover:text-primary-200 transition-colors duration-300 cursor-pointer mobile:text-3xl"
        activeClass="active"
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => setActiveMenu(false)}
      >
        {name}
      </Link>
      <span
        className={`pt-1 left-12 top-0 text-xs font-mono ${
          activeSection === name.toLowerCase()
            ? "text-primary-200"
            : "text-gray-200"
        }
        transition-colors
        duration-500
        `}
      >
        .0{order}
      </span>
    </li>
  );
};

export default NavItem;
