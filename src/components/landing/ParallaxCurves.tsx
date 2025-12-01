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
    null
  );
}
