import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { Stats, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useInView, useSpring, motion } from "framer-motion";

const WIDTH = 375;
const HEIGHT = 812;

export default function Phone() {
  const orbitControlsRef = useRef<OrbitControls>();
  const containerRef = useRef<React.PropsWithChildren<HTMLDivElement>>(null);
  const inViewRef = useInView(containerRef);
  const containerXSpring = useSpring(0, { damping: 10, stiffness: 100 });

  useEffect(() => {
    const presetOrbitControls = () => {
      orbitControlsRef.current.minDistance = 3;
      orbitControlsRef.current.maxDistance = 6;
      orbitControlsRef.current.enablePan = false;
    };
    if (!orbitControlsRef?.current) return;
    presetOrbitControls();
  }, [orbitControlsRef]);

  useEffect(() => {
    const animatePhone = () => {
      if (!inViewRef) return;
      containerXSpring.set(WIDTH);
    };
    animatePhone();
  }, [inViewRef, containerXSpring]);

  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        className="absolute"
        animate={{
          x: containerXSpring.get(),
        }}
        initial={{
          left: -WIDTH,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Canvas id="phone-canvas" style={{ width: WIDTH, height: HEIGHT }}>
          <OrbitControls ref={orbitControlsRef} />
          <Mesh />
          <ambientLight intensity={0.5} />
          <directionalLight color="red" position={[0, 0, 5]} />
        </Canvas>
      </motion.div>
    </div>
  );
}

export function Mesh() {
  const meshRef = useRef<MeshProps>();
  useFrame(({ clock }) => {
    if (meshRef?.current?.rotateY) {
      meshRef.current.rotateY(0.01);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
