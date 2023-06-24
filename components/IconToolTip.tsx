"use client";
import React, { ReactNode, useState } from "react";

interface ToolTipProps {
  children: ReactNode;
  text: string;
}

const IconToolTip: React.FC<ToolTipProps> = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div className="absolute bg-gray-500 text-green-50">{text}</div>
      )}
    </div>
  );
};

export default IconToolTip;
