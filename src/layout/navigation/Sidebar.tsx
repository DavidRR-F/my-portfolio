import { useStateContext } from "services/Providers";
import NavItems from "components/navigation/NavItems";

const Sidebar = () => {
  const { activeMenu } = useStateContext();
  return (
    <div
      className={`${
        activeMenu ? "left-0" : "-left-full"
      } w-full h-full fixed transition-all duration-500 z-10 bg-background-200 opacity-90`}
    >
      <NavItems />
    </div>
  );
};

export default Sidebar;
