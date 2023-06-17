"use client";
import React, { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";

interface CameraProps {
  children: ReactNode;
}

const Camera: React.FC<CameraProps> = ({ children }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    // breakpoints
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    const rotationY = 0;
    const rotationZ = state.pointer.x / 10;
    const rotationX = 0;
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [rotationY, rotationZ, rotationX],
        0.25,
        delta
      );
    }
  });
  return <group ref={group}>{children}</group>;
};

export default Camera;
