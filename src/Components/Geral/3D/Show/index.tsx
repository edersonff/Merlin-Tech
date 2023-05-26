import React, { useEffect, useRef } from "react";
import { Show3DProps } from "./types";
import { OrbitControls } from "@react-three/drei";
import { useSpring, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

export default function Show3D({
  children,
  height,
  width,
  show,
  right,
}: Show3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerXSpring = useSpring(-width, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const animatePhone = () => {
      if (show) {
        containerXSpring.set(-width);
      } else {
        containerXSpring.set(0);
      }
    };
    animatePhone();
  }, [containerXSpring, width, show]);

  return (
    <div
      className="relative w-full select-none pointer-events-none"
      ref={containerRef}
    >
      <motion.div
        className={"absolute w-full h-full " + (right ? "right-0" : "left-0")}
        animate={{
          x: containerXSpring.get(),
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Canvas
          style={{ width, height }}
          camera={{
            far: 10,
            fov: 75,
            near: 0.1,
          }}
        >
          <OrbitControls enableZoom={false} rotateSpeed={2} enablePan={false} />
          {children}
          <ambientLight intensity={2.5} />
          <directionalLight color="white" position={[0, 0, 5]} intensity={1} />
        </Canvas>
      </motion.div>
    </div>
  );
}
