import React from "react";
import { OnViewProps } from "./types";
import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";

export default function OnView({
  children,
  ...props
}: OnViewProps & MotionProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
