import Card from "@/components/Card";
import IconToolTip from "@/components/IconToolTip";
import Section from "@/components/Section";
import Animate from "@/components/animation/Animate";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import React from "react";

const skills = [
  {
    title: "Frontend Dev",
    icon: "/frontend.svg",
    frameworks: [
      { name: "React", color: "sky" },
      { name: "NextJS", color: "red" },
      { name: "Angular", color: "pink" },
    ],
    text: "Bleh React bleh NextJS bleh Angular",
    subSkills: [
      {
        subTitle: "Design",
        toolIcons: [
          { tip: "Tailwindcss", image: "/tailwindcss.svg" },
          { tip: "SASS", image: "/scss.svg" },
          { tip: "Figma", image: "/figma.svg" },
        ],
      },
    ],
  },
  {
    title: "Backend Dev",
    icon: "/backend.svg",
    frameworks: [
      { name: "Spring Boot", color: "lime" },
      { name: "ExpressJS", color: "blue" },
      { name: "FastAPI", color: "green" },
    ],
    text: "",
    subSkills: [
      {
        subTitle: "Databases",
        toolIcons: [
          { tip: "PostgreSQL", image: "/postgres.svg" },
          { tip: "MySQL", image: "/mysql.svg" },
          { tip: "MongoDB", image: "/mongodb.svg" },
        ],
      },
    ],
  },
  {
    title: "DevOps",
    icon: "/devops.svg",
    frameworks: [
      { name: "Docker", color: "blue" },
      { name: "Kubernetes", color: "sky" },
    ],
    text: "",
    subSkills: [
      {
        subTitle: "CI/CD",
        toolIcons: [
          { tip: "Jenkins", image: "/jenkins.svg" },
          { tip: "Github Actions", image: "/ghactions.svg" },
        ],
      },
      {
        subTitle: "Cloud",
        toolIcons: [
          { tip: "Azure", image: "/azure.svg" },
          { tip: "AWS", image: "/aws.svg" },
        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex gap-5 dec">
        {skills.map((skill, index) => (
          <Animate direction="down" delay={index / 10 + 0.5}>
            <Card>
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
              {skill.subSkills.map((sub, index) => (
                <div>
                  <h3>{sub.subTitle}</h3>
                  <ul className="flex">
                    {sub.toolIcons.map((icon, index) => (
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
              ))}
            </Card>
          </Animate>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
