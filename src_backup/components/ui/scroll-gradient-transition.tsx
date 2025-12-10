import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollGradientTransitionProps {
  children: React.ReactNode;
  colors?: string[];
  scrollPoints?: number[];
  className?: string;
}

const DEFAULT_COLORS = [
  "#FFF700",
  "#FFE300", 
  "#FFFFFF"
];

const DEFAULT_SCROLL_POINTS = [0, 0.5, 1.0];

export function ScrollGradientTransition({
  children,
  colors = DEFAULT_COLORS,
  scrollPoints = DEFAULT_SCROLL_POINTS,
  className = ""
}: ScrollGradientTransitionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const topColor = useTransform(
    scrollYProgress,
    scrollPoints,
    colors,
    { ease: (t) => t * t * (3 - 2 * t) } // Smoothstep easing
  );

  const backgroundGradient = useTransform(
    topColor,
    (color) => `linear-gradient(to bottom, ${color} 0%, ${color} 50%, #FFFFFF 100%)`
  );

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        background: backgroundGradient
      }}
    >
      {children}
    </motion.div>
  );
}