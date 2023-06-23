import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="flex justify-evenly items-center w-screen h-screen p-10"
    >
      {children}
    </section>
  );
};

export default Section;
