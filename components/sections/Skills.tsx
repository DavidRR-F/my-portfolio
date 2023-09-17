import Card from "@/components/Card";
import IconToolTip from "@/components/IconToolTip";
import Section from "@/components/Section";
import Animate from "@/components/animation/Animate";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import React from "react";
import ScrollList from "../ScrollList";
import { icons, skills } from "../constants/constants";
const chunkSize = Math.ceil(icons.length / 4);
const icons1 = icons.slice(0, chunkSize);
const icons2 = icons.slice(chunkSize, 2 * chunkSize);
const icons3 = icons.slice(2 * chunkSize, 3 * chunkSize);
const icons4 = icons.slice(3 * chunkSize);
const Skills = () => {
  return (
    <Section id="skills" className="flex-col">
      <div className="flex flex-row gap-5 flex-wrap">
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
      <div className="w-[1000px] h-56 whitespace-nowrap overflow-hidden">
        <ScrollList skills={icons1} direction="right" />
        <ScrollList skills={icons2} direction="left" />
        <ScrollList skills={icons3} direction="right" />
        <ScrollList skills={icons4} direction="left" />
      </div>
    </Section>
  );
};

export default Skills;
