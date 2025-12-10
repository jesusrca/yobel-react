"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxCurves() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Different speeds for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <div ref={ref} className="relative w-full h-0 overflow-visible pointer-events-none">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-20"
        style={{ y: y1, background: "linear-gradient(90deg, transparent, #59C1E6, transparent)" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-4 h-16"
        style={{ y: y2, background: "linear-gradient(90deg, transparent, #97E4FF, transparent)" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-8 h-12"
        style={{ y: y3, background: "linear-gradient(90deg, transparent, #FFF700, transparent)" }}
      />
    </div>
  );
}
