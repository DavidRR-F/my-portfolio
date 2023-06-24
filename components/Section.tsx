"use client";
import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`flex justify-evenly items-center w-screen h-screen p-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
