import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSlideInElementProps {
  direction: "left" | "right" | "up" | "down";
  delay?: number;
  view?: boolean | null;
  children: ReactNode;
}

const transition = {
  duration: 0.5,
};

export const slideAnimation = (direction: string, delay: number) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

const FadeIn: React.FC<AnimatedSlideInElementProps> = ({
  direction,
  delay = 0,
  view = null,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleView = () => {
    if (view != null)
      if (view) return "animate";
      else return "initial";
    else return inView ? "animate" : "initial";
  };

  const animation = slideAnimation(direction, delay);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={handleView()}
      exit="exit"
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
