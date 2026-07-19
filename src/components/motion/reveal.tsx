"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }} // power2.out equivalent
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
