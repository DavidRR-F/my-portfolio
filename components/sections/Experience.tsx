import Header from "@/components/Header";
import ProfessionListItem from "@/components/ProfessionListItem";
import Section from "@/components/Section";
import React from "react";

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

const work = [
  {
    title: "Programming Analyst",
    start: "Feb 2023",
    end: "Now",
  },
  {
    title: "Frontend Developer",
    start: "Jan 2022",
    end: "Feb 2023",
  },
];

const education = [
  {
    title: "Bachelors of Computer Science",
    start: "Apr 2019",
    end: "Dec 2021",
  },
  {
    title: "Associates of Computer Science",
    start: "Sep 2017",
    end: "Dec 2019",
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <div className="grid grid-cols-2 w-full max-w-5xl">
        <div className="flex flex-col gap-3 col-span-full p-3">
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
        </div>
        <div className="flex flex-col gap-3 p-3">
          <Header label="Work Experience" icon="/work.png" />
          <div className="pl-16">
            <ProfessionListItem profession={work} />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <Header label="Education Level" icon="/education.png" />
          <div className="pl-16">
            <ProfessionListItem profession={education} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
