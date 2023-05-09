import Grid from "@/Components/Geral/Grid";
import React from "react";
import VerticalItem from "./Item";

export default function HomeVertical() {
  return (
    <div className="overflow-hidden h-80 w-full bg-white ">
      <Grid className="bg-gray-200 rotate-x-12 -rotate-y-12 -translate-y-96">
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
