import { useStateContext } from "services/Providers";

const MenuIcon = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className={`menu ${activeMenu ? "active" : "inactive"}`}>
      <span></span>
    </div>
  );
};

export default MenuIcon;
