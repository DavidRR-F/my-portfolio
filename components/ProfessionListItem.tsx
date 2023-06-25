import React from "react";

interface ProfessionListProps {
  profession: ProfessionProps[];
}

interface ProfessionProps {
  title: string;
  start: string;
  end: string;
}

const ProfessionListItem: React.FC<ProfessionListProps> = ({ profession }) => {
  return (
    <ul className="professional">
      {profession.map((item, index) => (
        <li className="pb-6">
          <h4 className="text-2xl text-forground-100">{item.title}</h4>
          <span className="text-lg text-forground-200">
            {item.start} - {item.end}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProfessionListItem;
