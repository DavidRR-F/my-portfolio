"use client";
import { MutableRefObject, useRef } from "react";
import Animate from "../components/animation/Animate";

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
            Software Developer
          </span>
        </Animate>
      </div>
    </div>
  );
};

export default Landing;
