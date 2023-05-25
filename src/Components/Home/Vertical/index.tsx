import Grid from "@/Components/Geral/Grid";
import React, { useEffect, useRef, useState } from "react";
import VerticalItem from "./Item";
import { MotionProps } from "framer-motion";

export default function HomeVertical() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setReset(true);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleResize();

    const interval = setInterval(() => {}, window.innerHeight * 2 * 10);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  if (!width || !height) {
    return <div className="overflow-hidden h-80 w-full bg-white relative" />;
  }
  return (
    <div className="overflow-hidden h-80 w-full bg-white relative">
      <div className="filter contrast-120 brightness-110">
        <HomeVerticalItem x={-width} y={-height} />
        <HomeVerticalItem x={0} y={-height} />

        <HomeVerticalItem x={-width} y={0} />
        <HomeVerticalItem x={0} y={0} />
      </div>
    </div>
  );
}

export function HomeVerticalItem({ x, y }: { x: number; y: number }) {
  const xRef = useRef(x);
  const yRef = useRef(y);
  const divRef = useRef<MotionProps & HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      xRef.current = xRef.current + 1;
      yRef.current = yRef.current + 1;

      if (xRef.current > window.innerWidth) {
        xRef.current = -window.innerWidth;
      }

      const divRefHeigth = divRef?.current?.offsetHeight || 0;
      const h80 = 320;
      if (yRef.current > divRefHeigth - h80 * 1.5) {
        yRef.current = -divRefHeigth;
      }

      divRef.current?.style.setProperty(
        "transform",
        `translateX(${xRef.current}px) translateY(${yRef.current}px)`
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={divRef} className="absolute">
      <Grid className="bg-gray-200 w-screen p-4" gridX={4}>
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
    </div>
  );
}
