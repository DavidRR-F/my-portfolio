import React from "react";

interface NavItemProps {
  order: number;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ order, name }) => {
  return (
    <li className="flex justify-center items-center">
      <button>{name}</button>
    </li>
  );
};

export default NavItem;
