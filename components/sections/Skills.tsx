import Card from "@/components/Card";
import IconToolTip from "@/components/IconToolTip";
import Section from "@/components/Section";
import Animate from "@/components/animation/Animate";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import React from "react";
import ScrollList from "../ScrollList";

const icons = [
  {
    image: "/figma.svg",
    tip: "Figma",
  },
  {
    image: "/tailwindcss.svg",
    tip: "Tailwind CSS",
  },
  {
    image: "/github.svg",
    tip: "Github",
  },
  {
    image: "/jenkins.svg",
    tip: "Jenkins",
  },
  {
    image: "/jenkins.svg",
    tip: "Jenkins",
  },
  {
    image: "/jenkins.svg",
    tip: "Jenkins",
  },
];

const skills = [
  {
    title: "Fullstack Dev",
    icon: "/frontend.svg",
    frameworks: [
      { name: "React", color: "decoration-sky-500" },
      { name: "Angular", color: "decoration-red-500" },
      { name: "SpringBoot", color: "decoration-lime-500" },
    ],
    text: "With a strong passion for UI/UX design, I bring a dedicated focus on creating exceptional user experiences with React and Angular frontend frameworks and SpringBoot backends to develop data driven web applications.",

    toolIcons: [
      { tip: "Tailwindcss", image: "/tailwindcss.svg" },
      { tip: "SASS", image: "/sass.svg" },
      { tip: "Figma", image: "/figma.svg" },
    ],
  },
  {
    title: "Data Engineer",
    icon: "/backend.svg",
    frameworks: [
      { name: "Spark", color: "decoration-sky-500" },
      { name: "Kafka", color: "decoration-red-500" },
      { name: "Python", color: "decoration-lime-500" },
    ],
    text: "Streaming buisness using Python data pipeline and implementing big data solutions with tools like Spark and Kafka in order to process large amounts of data for analytical and machine learning operations.",

    toolIcons: [
      { tip: "Tailwindcss", image: "/tailwindcss.svg" },
      { tip: "SASS", image: "/sass.svg" },
      { tip: "Figma", image: "/figma.svg" },
    ],
  },
  {
    title: "Cloud/DevOps",
    icon: "/devops.png",
    frameworks: [
      { name: "Docker", color: "decoration-blue-500" },
      { name: "Kubernetes", color: "decoration-sky-500" },
      { name: "CI/CD", color: "decoration-lime-500" },
      { name: "Cloud", color: "decoration-red-500" },
    ],
    text: "Experience with Docker and Kubernetes to ensuring efficient application Cloud deployment to end users. Experties in CI/CD development workflows to deploy and enforcing source code version controls.",
    toolIcons: [
      { tip: "Jenkins", image: "/jenkins.svg" },
      { tip: "Bitbucket", image: "/bitbucket.svg" },
      { tip: "Github", image: "/ghactions.svg" },
      { tip: "Azure", image: "/azure.svg" },
      { tip: "AWS", image: "/aws.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" className="flex-col">
      <div className="w-96 h-52 whitespace-nowrap overflow-hidden">
        <ScrollList skills={icons} direction="right" />
        <ScrollList skills={icons} direction="left" />
        <ScrollList skills={icons} direction="right" />
        <ScrollList skills={icons} direction="left" />
      </div>
      <div className="flex gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <Animate direction="down" delay={index / 10 + 0.5}>
            <Card>
              <div className="flex flex-col justify-between items-center min-h-full">
                <div>
                  <div className="flex justify-start items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={`${skill.title} Icon`}
                      className="w-12 h-12"
                    />
                    <h2>
                      <strong className="text-3xl">{skill.title}</strong>
                    </h2>
                  </div>
                  <StaggerChildren text={skill.text} keys={skill.frameworks} />
                </div>
                <div>
                  <ul className="flex gap-5">
                    {skill.toolIcons.map((icon, index) => (
                      <IconToolTip text={icon.tip}>
                        <img
                          className="w-6 h-6"
                          src={icon.image}
                          alt={`${icon.tip} Icon`}
                        />
                      </IconToolTip>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Animate>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
