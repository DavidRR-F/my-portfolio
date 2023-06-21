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
      <div className="background-video">
        <video
          ref={videoRef}
          loop
          autoPlay
          muted
          preload="metadata"
          src="/lc-temp.mp4"
          onContextMenu={handleContextMenu}
          className="background-video"
        />
      </div>
      <div className="header-text">
        <Animate direction="down">
          <h1 className="glassmorphism">David Rose-Franklin</h1>
        </Animate>
        <Animate direction="up">
          <span>Software Developer</span>
        </Animate>
      </div>
    </div>
  );
};

export default Landing;
