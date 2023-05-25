import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import Show3D from "../Show";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const WIDTH = 375;
const HEIGHT = 812;

export default function Phone({ show = false }: { show?: boolean }) {
  return (
    <Show3D width={WIDTH} height={HEIGHT} show={true}>
      <PhoneMesh />
    </Show3D>
  );
}

function PhoneMesh() {
  const meshRef = useRef<any>();
  const gltf = useLoader(GLTFLoader, "./Phone.glb");

  useFrame(() => {
    if (meshRef?.current?.rotateY) {
      meshRef.current.rotateY(0.005);
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <primitive object={gltf.scene} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
