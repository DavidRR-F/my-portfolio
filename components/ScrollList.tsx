import React from "react";
import SkillList from "./SkillList";

interface SkillProps {
  image: string;
  tip: string;
}

interface SkillListProps {
  skills: SkillProps[];
  direction: "left" | "right";
}

const ScrollList: React.FC<SkillListProps> = ({ skills, direction }) => {
  return (
    <div>
      <SkillList skills={skills} direction={direction} />
      <SkillList skills={skills} direction={direction} />
    </div>
  );
};

export default ScrollList;
