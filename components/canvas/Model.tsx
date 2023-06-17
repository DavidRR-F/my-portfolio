"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React from "react";

const Model = () => {
  const { nodes, materials } = useGLTF("/woman_bust_2.glb") as any;
  const rotation: [number, number, number] = [
    -Math.PI / 2,
    Math.PI / 1,
    Math.PI / 1,
  ];
  const potition: [number, number, number] = [0, 0, 0];
  const scale = 0.8;
  console.log("Nodes", nodes);
  console.log("Material", materials);
  materials.mia_material_x1SG.metalness = 0.2;
  materials.mia_material_x1SG.roughness = 0.3;
  useFrame((state, delta) => {
    easing.dampC(materials.mia_material_x1SG.color, "white", delta);
  });

  return (
    <group key={1}>
      <mesh
        castShadow
        geometry={nodes.veiledVirgin_tris.geometry}
        material={materials.mia_material_x1SG}
        rotation={rotation}
        position={potition}
        scale={scale}
        dispose={null}
      ></mesh>
    </group>
  );
};

export default Model;
