import React from "react";
import { Link } from "react-scroll";

interface NavItemProps {
  order: number;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ order, name }) => {
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
      <span className="pt-1 left-12 top-0 text-xs font-mono text-gray-200 select-none">
        .0{order}
      </span>
    </li>
  );
};

export default NavItem;
