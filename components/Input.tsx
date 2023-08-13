"use client";

import React, { useEffect, useRef, useState } from "react";

interface InputProps {
  type: string;
  name: string;
}

const floatLabel = `
  bottom-10
  text-sm
  opacity-100
`;

const unfloatLabel = `
  bottom-0
  text-2xl
  opacity-50
`;

const Input: React.FC<InputProps> = ({ type, name }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [clickOutside, setClickOutside] = useState<boolean>(true);
  const [float, setFloat] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setClickOutside(true);
    } else {
      setClickOutside(false);
    }
  };

  const handleFocus = () => {
    if (document.activeElement === inputRef.current) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.addEventListener("focus", handleFocus);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (inputRef.current)
        inputRef.current.addEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    if (input.trim() !== "") {
      setFloat(true);
    } else if (!clickOutside) {
      setFloat(true);
    } else {
      setFloat(false);
    }

    if (focus) {
      setFocus(true);
    } else if (!focus && input.trim() === "") {
      setFloat(false);
    } else {
      setFocus(false);
    }
    console.log(
      "Focus: ",
      focus,
      "\nClick: ",
      clickOutside,
      "\nInput: ",
      input
    );
  }, [focus, clickOutside, input]);

  return (
    <div className="relative">
      <label
        className={`absolute capitalize transition-all ease-in-out
            after:text-primary-200 after:content-['*'] after:pl-1 
            ${float ? floatLabel : unfloatLabel}
            `}
        htmlFor={type}
      >
        {name}
      </label>
      <input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        className="pb-1 pl-1 pr-1 pt-6 w-full bg-transparent outline-none border-b-2 opacity-50 border-forground-200 text-2xl text-forground-200 transition-all ease-in-out
            focus:opacity-100"
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
