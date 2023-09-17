import React from "react";
import IconToolTip from "./IconToolTip";

interface SkillProps {
  image: string;
  tip: string;
}

interface SkillListProps {
  skills: SkillProps[];
  direction: "left" | "right";
}

const SkillList: React.FC<SkillListProps> = ({ skills, direction }) => {
  return (
    <div
      className={`inline-flex flex-nowrap ${
        direction === "left" ? "animate-slide-left" : "animate-slide-right"
      }`}
    >
      {skills.map((icon, index) => (
        <div className="flex flex-row m-1 rounded-lg shadow-sm shadow-secondary-100">
          <div className="flex items-center justify-center w-12 h-12 bg-forground-300 rounded-l-lg">
            <img className="p-1" src={icon.image} alt={`${icon.tip} Icon`} />
          </div>
          <div className="flex items-center h-full bg-background-100 rounded-r-lg pl-3 pr-3">
            <h4 className="text-2xl text-center">{icon.tip}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
