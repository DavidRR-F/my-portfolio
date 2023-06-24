"use client";
import Section from "@/components/Section";
import Animate from "@/components/animation/Animate";
import { motion } from "framer-motion";
import React from "react";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sunt molestias sequi ratione veritatis ad, atque accusantium, nulla non quia reiciendis! Aperiam quo magni in minus dicta deleniti nostrum labore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi perspiciatis tenetur ab rerum incidunt sit error aliquam at necessitatibus nostrum quod nulla exercitationem, deleniti explicabo laudantium vitae quos nesciunt dolorem!";

const About = () => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="about">
      <div>Profile Pic or 3D Animation</div>
      <div>
        <Animate direction="down">
          <h2 className=" text-forground-100 text-4xl">
            A Brief Mission Statement...
          </h2>
        </Animate>
        <p className="glassmophism max-w-lg text-lg text-forground-200">
          <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.span>
          <span className="sr-only">{text}</span>
        </p>
      </div>
    </Section>
  );
};

export default About;
