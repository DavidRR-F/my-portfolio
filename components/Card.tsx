"use client";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className=" w-80 h-80 p-5 bg-background-100 card-gradient relative rounded-2xl">
      {children}
    </div>
  );
};

export default Card;
