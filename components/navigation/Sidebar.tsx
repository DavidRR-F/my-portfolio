"use client";

import { useStateContext } from "../Providers";
import NavItems from "./NavItems";

const Sidebar = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      {activeMenu ? (
        <div className="w-72 h-full fixed dark:bg-secondary-dark-bg bg-light-primary-2 transition-all z-10">
          <NavItems />
        </div>
      ) : (
        <div className="w-0 h-full fixed bg-light-primary-2 dark:bg-secondary-dark-bg transition-all z-10"></div>
      )}
    </>
  );
};

export default Sidebar;
