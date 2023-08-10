"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, Sphere, Box } from "@react-three/drei";
import { Mesh } from "three";
import { motion } from "framer-motion";

const FloatingCube = () => {
  const cubeRef = useRef<Mesh>(null);
  const radius = 2.5;
  const speed = 0.5;

  useFrame((state) => {
    if (cubeRef.current) {
      const time = state.clock.getElapsedTime();
      cubeRef.current.position.x = Math.sin(time * speed) * radius;
      cubeRef.current.position.z = Math.cos(time * speed) * radius;
    }
  });

  return (
    <mesh ref={cubeRef} position={[1, 1, 0]} castShadow>
      <Box args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="orange"
        emissive="red"
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const GlowingSphere = () => {
  return (
    <div className=" w-96 h-96">
      <Canvas shadows>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh scale={[2, 2, 2]}>
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial
              color="orange"
              emissive="red"
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>
        </mesh>

        {/* Cube that floats around */}
        {/* <FloatingCube /> */}
      </Canvas>
    </div>
  );
};

export default GlowingSphere;
