import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function Frame() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Base positions
  const cy1 = 346.5;
  const cy2 = 439.5;
  const cy3 = 532.5;
  const ryBase = 346.5;

  // Animations
  // 1. Curve more as we scroll down (increase ry)
  const ry = useTransform(scrollYProgress, [0, 1], [ryBase, ryBase + 60]);

  // 2. Separate/Join effect (breathing vertically)
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yOffset3 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // 3. Continuous floating
  const floatAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div ref={ref} className="absolute h-[879px] left-0 top-0 w-[2198px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2198 879">
        <motion.g id="Frame 50" animate={floatAnim}>
          <motion.ellipse 
            cx="1099" 
            cy={cy1} 
            fill="url(#paint0_linear_1_789)" 
            id="Ellipse 9" 
            rx="1099" 
            style={{ ry, y: yOffset1 }}
          />
          <motion.ellipse 
            cx="1099" 
            cy={cy2} 
            fill="url(#paint1_linear_1_789)" 
            id="Ellipse 7" 
            rx="1099" 
            style={{ ry, y: yOffset2 }}
          />
          <motion.ellipse 
            cx="1099" 
            cy={cy3} 
            fill="url(#paint2_linear_1_789)" 
            id="Ellipse 8" 
            rx="1099" 
            style={{ ry, y: yOffset3 }}
          />
        </motion.g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_789" x1="1099" x2="1099" y1="0" y2="693">
            <stop stopColor="#31CDFF" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_789" x1="1099" x2="1099" y1="93" y2="786">
            <stop stopColor="#43CEFF" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_789" x1="1099" x2="1099" y1="186" y2="879">
            <stop stopColor="#4DD0FF" />
            <stop offset="0.605769" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Circulos() {
  return (
    <div className="relative size-full" data-name="Círculos">
      <Frame />
    </div>
  );
}