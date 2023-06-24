import Card from "@/components/Card";
import Header from "@/components/Header";
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
    text: "With a strong passion for UI/UX design, I bring a dedicated focus on creating exceptional user experiences. My expertise lies in leveraging React with NextJS and Angular to develop cutting-edge web applications.",

    toolIcons: [
      { tip: "Tailwindcss", image: "/tailwindcss.svg" },
      { tip: "SASS", image: "/sass.svg" },
      { tip: "Figma", image: "/figma.svg" },
    ],
  },
  {
    title: "Backend Dev",
    icon: "/backend.svg",
    frameworks: [
      { name: "SpringBoot", color: "lime" },
      { name: "ExpressJS", color: "blue" },
      { name: "FastAPI", color: "green" },
    ],
    text: "I bring a dedicated focus on building robust and efficient server-side applications. I utilize SpringBoot to create powerful backend solutions with experience in ExpressJS and FastAPI for smaller microservice solution.",

    toolIcons: [
      { tip: "PostgreSQL", image: "/postgresql.svg" },
      { tip: "MySQL", image: "/mysql.svg" },
      { tip: "MongoDB", image: "/mongodb.svg" },
    ],
  },
  {
    title: "DevOps",
    icon: "/devops.png",
    frameworks: [
      { name: "Docker", color: "blue" },
      { name: "Kubernetes", color: "sky" },
      { name: "CI/CD", color: "lime" },
      { name: "Cloud", color: "red" },
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

const code = [
  {
    name: "Typescript",
    value: 0.9,
  },
  {
    name: "Python",
    value: 0.8,
  },
  {
    name: "Java",
    value: 0.6,
  },
  {
    name: "SQL",
    value: 0.7,
  },
];

const Skills = () => {
  return (
    <Section id="skills" className="flex-col">
      <div className="flex gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <Animate direction="down" delay={index / 10 + 0.5}>
            <Card>
              <div className="flex flex-col justify-between items-center min-h-full">
                <section>
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
                </section>
                <section>
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
                </section>
              </div>
            </Card>
          </Animate>
        ))}
      </div>
      <div className="grid grid-cols-2 w-full max-w-5xl">
        <section className="flex flex-col gap-3 col-span-full p-3">
          <Header label="Programing Skills" icon="/code.png" />
          {code.map((item, index) => (
            <div className="flex items-center">
              <label
                className="text-2xl font-semibold text-forground-200 pl-2 w-40"
                htmlFor={`${item.name}-bar`}
              >
                {item.name}
              </label>
              <progress
                id={`${item.name}-bar`}
                className="w-full"
                value={item.value}
              />
            </div>
          ))}
        </section>
        <section className="flex flex-col gap-3 p-3">
          <Header label="Work Experience" icon="/work.png" />
        </section>
        <section className="flex flex-col p-3">
          <Header label="Education Level" icon="/education.png" />
        </section>
      </div>
    </Section>
  );
};

export default Skills;
