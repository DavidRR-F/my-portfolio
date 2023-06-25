import React from "react";
import NavItem from "./NavItem";

interface NavItemsProps {
  secondary?: boolean;
}

const listItems = [
  {
    key: 1,
    name: "About",
  },
  {
    key: 2,
    name: "Skills",
  },
  {
    key: 3,
    name: "Experience",
  },
  {
    key: 4,
    name: "Contact",
  },
];

const NavItems: React.FC<NavItemsProps> = ({ secondary = false }) => {
  return (
    <ul className="flex flex-row items-center gap-5 mobile:flex-col pr-5 text-lg">
      {secondary && <NavItem order={0} name={"Home"} />}
      {listItems.map((item) => (
        <NavItem key={item.key} order={item.key} name={item.name} />
      ))}
    </ul>
  );
};

export default NavItems;
