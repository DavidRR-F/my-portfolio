"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import Camera from "./Camera";
import { Center, ContactShadows, OrbitControls } from "@react-three/drei";

const CanvasModel = () => {
  return (
    <div className="canvas">
      <Canvas
        shadows
        eventPrefix="screen"
        camera={{ position: [0, 0, 100], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full transition-all ease-in"
      >
        <hemisphereLight
          color="white"
          groundColor="rgb(26, 149, 232)"
          intensity={0.65}
        />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <Camera>
          <Center>
            <Model />
            <ContactShadows scale={40} blur={10} far={20} />
          </Center>
          <OrbitControls />
        </Camera>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
