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

export const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div className="relative">
      <motion.svg
        id="ezXpe3tWsMk1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 450 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        width="300"
        height="250"
        ref={ref}
      >
        <defs>
          <linearGradient
            id="ezXpe3tWsMk2-stroke"
            x1="0"
            y1="1"
            x2="0.8365"
            y2="0.124842"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="ezXpe3tWsMk2-stroke-0" offset="0%" stopColor="#ff351a" />
            <stop
              id="ezXpe3tWsMk2-stroke-1"
              offset="100%"
              stopColor="#ff9f22"
            />
          </linearGradient>
          <linearGradient
            id="ezXpe3tWsMk3-stroke"
            x1="0"
            y1="0.5"
            x2="1"
            y2="0.5"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="ezXpe3tWsMk3-stroke-0" offset="0%" stopColor="#ff9f22" />
            <stop
              id="ezXpe3tWsMk3-stroke-1"
              offset="100%"
              stopColor="#ff351a"
            />
          </linearGradient>
        </defs>
        <motion.ellipse
          rx="76.016747"
          ry="75"
          transform="matrix(1.283257 0 0 1.277507 102.33192 199.48166)"
          fill="rgba(210,219,237,0)"
          stroke="url(#ezXpe3tWsMk2-stroke)"
          strokeWidth="4"
          variants={icon}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M128.619904,179.19325q0,0,80.829855-85.891815h96.491229v73.365232"
          transform="matrix(1.565028 0 0 1.411222-33.311297-126.88465)"
          fill="none"
          stroke="url(#ezXpe3tWsMk3-stroke)"
          strokeWidth="4"
          variants={icon}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
};
