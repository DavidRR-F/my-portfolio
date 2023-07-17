"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

export const BorderAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const ellipseAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5, // Add a delay of 0.5 seconds to the animation
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative">
      <motion.svg
        xmlns="/border2.svg"
        viewBox="0 0 1800 200"
        className="item"
        ref={ref}
      >
        <motion.path
          d="M-6.632277,42.763449q181.724392,0,181.724392,0l55.711127,46.42594h359.469418l72.955048,67.649226l214.885777,2.652911l50.405305-46.425941h258.658807l70.302137,67.649224l274.576271,1.326456L1684.598378,42.763448l115.40162-1.326458"
          variants={icon}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          stroke="url(#eh8Y26ktMIX2-stroke)"
          strokeWidth="6"
          fill="none"
        />
        <motion.ellipse
          cx="1008.522635"
          cy="113.268317"
          rx="10.766662"
          ry="10.703375"
          variants={ellipseAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          fill="#0c151d"
          stroke="url(#eh8Y26ktMIX3-stroke)"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="eh8Y26ktMIX2-stroke"
            x1="0"
            y1="0.5"
            x2="1"
            y2="0.5"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="eh8Y26ktMIX2-stroke-0" offset="0%" stopColor="#ff9f22" />
            <stop
              id="eh8Y26ktMIX2-stroke-1"
              offset="100%"
              stopColor="#ff351a"
            />
          </linearGradient>
          <linearGradient
            id="eh8Y26ktMIX3-stroke"
            x1="-39.473686"
            y1="0.5"
            x2="32.000001"
            y2="0.5"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="eh8Y26ktMIX3-stroke-0" offset="0%" stopColor="#ff9f22" />
            <stop
              id="eh8Y26ktMIX3-stroke-1"
              offset="100%"
              stopColor="#ff351a"
            />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
