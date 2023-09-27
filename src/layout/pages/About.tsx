import HeaderCard from "components/card/HeaderCard";
import Section from "layout/Section";
import { projectList } from "utils/constants";
const About = () => {
  return (
    <Section id="about">
      <div>Professtional image Here</div>
      <div className="flex flex-col justify-start">
        {projectList!.map((item, index) => {
          return (
            <HeaderCard
              key={item.header}
              index={index}
              image={item.image}
              header={item.header}
              headerDesc={item.headerDesc}
              subHeader={item.subHeader}
              subHeaderDesc={item.subHeaderDesc}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default About;
