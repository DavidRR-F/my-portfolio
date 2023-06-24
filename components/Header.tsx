import React from "react";

interface HeaderProps {
  label: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = ({ label, icon }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-background-100 rounded-full p-3 w-fit h-fit">
        <img src={icon} alt={`${label} Icon`} />
      </div>
      <h3 className="text-3xl">{label}</h3>
    </div>
  );
};

export default Header;
