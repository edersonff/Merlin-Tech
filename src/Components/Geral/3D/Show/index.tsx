import React, { ForwardRefExoticComponent, useEffect, useRef } from "react";
import { Show3DProps } from "./types";
import { OrbitControls, OrbitControlsProps } from "@react-three/drei";
import { useInView, useSpring, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { useSpring as useSpringThree } from "@react-spring/three";

export default function Show3D({ children, height, width, show }: Show3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerXSpring = useSpring(0, { stiffness: 100, damping: 20 });

  const rotateSpring = useSpringThree({
    from: {
      rotation: new Vector3(0, 0, 0),
    },
    to: {
      rotation: new Vector3(0, 0, 0),
    },
    config: {
      mass: 1,
      tension: 100,
      friction: 100,
    },
  });

  useEffect(() => {
    const animatePhone = () => {
      if (show) {
        containerXSpring.set(width);
      }
    };
    animatePhone();
  }, [containerXSpring, width, show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="relative w-full select-none pointer-events-none"
      ref={containerRef}
    >
      <motion.div
        className="absolute w-full h-full"
        animate={{
          x: containerXSpring.get(),
        }}
        initial={{
          left: -width,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Canvas
          id="phone-canvas"
          style={{ width, height }}
          camera={{
            far: 10,
            fov: 75,
            near: 0.1,
          }}
        >
          <OrbitControls enableZoom={false} rotateSpeed={2} />
          <group position={[0, 0, 0]} rotation={rotateSpring.rotation}>
            {children}
          </group>
          <ambientLight intensity={2.5} />
          <directionalLight color="white" position={[0, 0, 5]} intensity={1} />
        </Canvas>
      </motion.div>
    </div>
  );
}
