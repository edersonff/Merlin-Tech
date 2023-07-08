import React from "react";
import LottiePlayer from "lottie-react";
import { lotties } from "./lotties";
export default function Lottie({
  animationData,
  ...rest
}: {
  animationData: keyof typeof lotties;
} & React.ComponentProps<typeof LottiePlayer>) {
  return (
    <LottiePlayer
      animationData={lotties[animationData]}
      renderer="svg"
      loop
      {...rest}
    />
  );
}
