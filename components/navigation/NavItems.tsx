import React from "react";
import NavItem from "./NavItem";
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
    name: "Projects",
  },
  {
    key: 4,
    name: "Contact",
  },
];

const NavItems = () => {
  return (
    <ul className="flex flex-row items-center gap-5 mobile:flex-col pr-5 text-lg">
      {listItems.map((item) => (
        <NavItem key={item.key} order={item.key} name={item.name} />
      ))}
    </ul>
  );
};

export default NavItems;
