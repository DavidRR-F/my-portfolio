"use client";
import React, { useRef, useEffect } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const CanvasModel = () => {
  const gltf: any = useGLTF("/woman_bust_2.glb");
  const nodes: any = gltf.nodes;
  const materials: any = gltf.materials;
  const rotation: [number, number, number] = [
    -Math.PI / 2,
    Math.PI / 1,
    Math.PI / 1,
  ];
  const potition: [number, number, number] = [0, 0, 0];
  const scale = 0.8;
  materials.mia_material_x1SG.metalness = 0.2;
  materials.mia_material_x1SG.roughness = 0.3;
  materials.mia_material_x1SG.color.set(0x908c8c);
  // useFrame((state, delta) => {
  //   easing.dampC(materials.mia_material_x1SG.color, delta);
  // });

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.veiledVirgin_tris.geometry}
        material={materials.mia_material_x1SG}
        rotation={rotation}
        position={potition}
        scale={scale}
      ></mesh>
    </group>
  );
};

export default CanvasModel;
