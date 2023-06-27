"use client";
import { motion } from "framer-motion";
import React from "react";

interface StaggerChildrenProps {
  text: string;
  keys: Keys[];
}

interface Keys {
  name: string;
  color: string;
}

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  text,
  keys,
}) => {
  const words = text.split(" ");
  const keyNames = keys.map((key) => key.name);
  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <p className="glassmophism max-w-lg text-lg text-forground-200">
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants}>
            {keys.find((obj) => obj.name === word) ? (
              <strong
                className={`underline decoration-2 text-forground-100 ${
                  keys.find((obj) => obj.name === word)?.color
                }`}
              >
                {word}
              </strong>
            ) : (
              <>{index == 0 ? <>{word} </> : <> {word} </>}</>
            )}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </p>
  );
};
