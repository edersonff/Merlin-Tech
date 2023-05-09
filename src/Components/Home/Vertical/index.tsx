import Grid from "@/Components/Geral/Grid";
import React, { useEffect, useState } from "react";
import VerticalItem from "./Item";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function HomeVertical() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden h-80 w-full bg-white relative rounded-t-3xl">
      <div>
        {width && height && (
          <>
            <HomeVerticalItem x={0} y={-height / 2} />
          </>
        )}
      </div>
    </div>
  );
}

export function HomeVerticalItem({ x, y }: { x: number; y: number }) {
  const xSpring = useSpring(x, { stiffness: 1, bounce: 0 });
  const ySpring = useSpring(y, { stiffness: 1, bounce: 0 });

  useEffect(() => {
    const handleMove = () => {
      xSpring.set(window.innerWidth);
      ySpring.set(window.innerHeight / 2);
    };
    handleMove();
  }, [xSpring, ySpring, x, y]);

  return (
    <motion.div
      className="absolute"
      style={{
        x: xSpring,
        y: ySpring,
      }}
    >
      <Grid
        className="bg-gray-200 translate-x-20 rotate-x-45 -rotate-y-12"
        gridX={4}
      >
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
        <VerticalItem src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
      </Grid>
    </motion.div>
  );
}
