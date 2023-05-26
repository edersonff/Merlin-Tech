import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import Show3D from "../Show";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const WIDTH = 500;
const HEIGHT = 500;

export default function Laptop({ show = false }: { show?: boolean }) {
  return (
    <Show3D width={WIDTH} height={HEIGHT} show={show} right>
      <LaptopMesh />
    </Show3D>
  );
}

function LaptopMesh() {
  const meshRef = useRef<any>();
  const gltf = useLoader(GLTFLoader, "./Laptop.glb");

  useFrame(() => {
    if (meshRef?.current?.rotateY) {
      meshRef.current.rotateY(0.005);
    }
  });

  return (
    <mesh ref={meshRef} scale={0.8}>
      <primitive object={gltf.scene} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
