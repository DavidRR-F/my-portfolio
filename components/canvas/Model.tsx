"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import Camera from "./Camera";
import CanvasModel from "./CanvasModel";
import React from "react";
import { ContactShadows } from "@react-three/drei";

const Model = () => {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        eventPrefix="page"
        camera={{ position: [-15, 0, 100], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full transition-all ease-in"
      >
        <hemisphereLight color="yellow" groundColor="red" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <Camera>
          <Center>
            <CanvasModel />
            <ContactShadows scale={40} blur={10} far={20} />
          </Center>
          {/* <OrbitControls /> */}
        </Camera>
      </Canvas>
    </div>
  );
};

export default Model;
