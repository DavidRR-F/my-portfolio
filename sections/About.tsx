import Section from "@/components/Section";
import Animate from "@/components/animation/Animate";
import React from "react";

const About = () => {
  return (
    <Section id="about">
      <div>
        <Animate direction="up">
          <h2 className=" text-forground-100 text-4xl">
            A Brief Mission Statement...
          </h2>
        </Animate>
        <Animate direction="right" delay={0.5}>
          <p className="glassmophism max-w-lg text-lg text-forground-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            sunt molestias sequi ratione veritatis ad, atque accusantium, nulla
            non quia{" "}
            <span className="text-forground-100 underline decoration-sky-500">
              reiciendis!
            </span>{" "}
            Aperiam quo magni in minus dicta deleniti nostrum labore! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            perspiciatis tenetur ab rerum incidunt sit error aliquam at
            necessitatibus nostrum quod nulla exercitationem, deleniti explicabo
            laudantium vitae quos nesciunt dolorem!
          </p>
        </Animate>
      </div>
      <div>Profile Pic</div>
    </Section>
  );
};

export default About;
