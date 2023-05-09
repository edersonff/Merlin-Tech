import React from "react";
import { OnViewProps } from "./types";
import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";

export default function OnView({
  children,
  opacity = 0,
  delay,
  speed,
  y = 40,
  ...props
}: OnViewProps & MotionProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      animate={{ opacity, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: speed, ease: "easeOut" }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
