import React from "react";
import NavItem from "components/navigation/NavItem";
import { navList } from "utils/constants";
import { useStateContext } from "services/Providers";

interface NavItemsProps {
  secondary?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ secondary = false }) => {
  const { isMobile } = useStateContext();
  return (
    <ul className="flex flex-row justify-center items-center gap-5 mobile:flex-col mobile:h-full mobile:p-0 pr-5 text-lg">
      {(secondary || isMobile) && <NavItem order={0} name={"Home"} />}
      {navList.map((item) => (
        <NavItem key={item.key} order={item.key} name={item.name} />
      ))}
    </ul>
  );
};

export default NavItems;
