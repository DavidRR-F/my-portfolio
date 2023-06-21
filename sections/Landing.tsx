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
        width="100%"
        height="100%"
        loop
        autoPlay
        muted
        onContextMenu={handleContextMenu}
        className="background-video"
      >
        <source src="/lc-temp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
