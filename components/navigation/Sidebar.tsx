"use client";

import { useStateContext } from "../Providers";

const Sidebar = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      {activeMenu ? (
        <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white">
          Sidebar
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg"></div>
      )}
    </>
  );
};

export default Sidebar;
