import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface ScrollRevealStringProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

// Animates text letter-by-letter based on scroll position
export function ScrollRevealString({ text, className = "", as: Tag = "div" }: ScrollRevealStringProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "end 0.6"]
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <Tag ref={elementRef} className={className}>
      {chars.map((char, i) => {
        // Calculate the activation range for this character
        // Spread the activation across the scroll progress (0 to 1)
        const start = (i / totalChars) * 0.8; // Scale to finish before end
        const end = start + 0.1; // Short duration for specific char transition

        return (
          <Char 
            key={i} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </Tag>
  );
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  // Ensure spaces are preserved
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  );
}
