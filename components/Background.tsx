"use client";
import { MutableRefObject, useRef } from "react";

const Background = () => {
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
        <h1 className="glassmorphism">David Rose-Franklin</h1>
        <span>Software Developer</span>
      </div>
    </div>
  );
};

export default Background;
