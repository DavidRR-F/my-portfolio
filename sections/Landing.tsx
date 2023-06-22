"use client";
import { MutableRefObject, useRef } from "react";
import Animate from "../components/animation/Animate";

const list = [
  {
    name: "github",
    link: "https://github.com/DavidRR-F",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/david_rose_luthier",
  },
  {
    name: "twitter",
    link: "",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/david-rose-franklin-5476a71b6",
  },
];

const Landing = () => {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);

  const handleContextMenu = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <div className="video-background">
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        preload="metadata"
        src="/0000-1000.mp4"
        onContextMenu={handleContextMenu}
        className="background-video"
      />
      <div className="video-wrapper"></div>
      <div className="title">
        <Animate direction="down">
          <h1 className=" text-gray-300 font-semibold text-6xl">
            David Rose-Franklin
          </h1>
        </Animate>
        <Animate direction="up">
          <span className="text-gray-400 font-semibold text-4xl">
            Design. Develop. Deploy.
          </span>
        </Animate>
        <ul className="flex gap-2 pt-2">
          {list.map((item, index) => (
            <Animate key={index} direction="left" delay={index / 10 + 0.1}>
              <a href={item.link}>
                <img
                  src={`${item.name}.svg`}
                  alt={`${item.name} icon`}
                  className="w-12 h-12"
                />
              </a>
            </Animate>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
