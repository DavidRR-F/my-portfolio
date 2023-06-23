import React from "react";

interface NavItemProps {
  order: number;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ order, name }) => {
  return (
    <li className="flex justify-center items-center">
      <a className="text-gray-300 cursor-pointer">{name}</a>
      <span className="pt-1 left-12 top-0 text-xs font-mono text-gray-200 select-none">
        .0{order}
      </span>
    </li>
  );
};

export default NavItem;
