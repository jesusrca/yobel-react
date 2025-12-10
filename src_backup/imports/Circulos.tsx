import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function Frame() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Base positions from Figma
  const cy1 = 346.5;
  const cy2 = 439.5;
  const cy3 = 532.5;
  const ryBase = 346.5;

  // Animations based on scroll
  // As we scroll down (progress 0 -> 1):
  // - "curvaran un poco más": Increase ry slightly
  // - "juntaran o alejaran": Adjust y spacing
  // - "flotante": Continuous floating animation

  // Increase curvature slightly as we scroll down
  const ry = useTransform(scrollYProgress, [0, 1], [ryBase, ryBase + 50]);
  
  // Spread them slightly to create a "breathing" effect with scroll
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [0, -30]); 
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [0, 0]);   
  const yOffset3 = useTransform(scrollYProgress, [0, 1], [0, 30]);  

  // Continuous floating animation
  const floatAnim = {
    y: [0, -20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div ref={ref} className="absolute h-[879px] left-1/2 -translate-x-1/2 top-0 w-[2198px] max-w-none">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMin slice" viewBox="0 0 2198 879">
        <motion.g id="Frame 50" animate={floatAnim}>
          {/* Top Ellipse (Back) */}
          <motion.ellipse 
            cx="1099" 
            cy={cy1} 
            style={{ y: yOffset1, ry }}
            fill="url(#paint0_linear_1_789)" 
            id="Ellipse 9" 
            rx="1099" 
          />
          {/* Middle Ellipse */}
          <motion.ellipse 
            cx="1099" 
            cy={cy2} 
            style={{ y: yOffset2, ry }}
            fill="url(#paint1_linear_1_789)" 
            id="Ellipse 7" 
            rx="1099" 
          />
          {/* Bottom Ellipse (Front) */}
          <motion.ellipse 
            cx="1099" 
            cy={cy3} 
            style={{ y: yOffset3, ry }}
            fill="url(#paint2_linear_1_789)" 
            id="Ellipse 8" 
            rx="1099" 
          />
        </motion.g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_789" x1="1099" x2="1099" y1="0" y2="693">
            <stop stopColor="#31CDFF" />
            <stop offset="1" stopColor="#31CDFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_789" x1="1099" x2="1099" y1="93" y2="786">
            <stop stopColor="#43CEFF" />
            <stop offset="1" stopColor="#43CEFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_789" x1="1099" x2="1099" y1="186" y2="879">
            <stop stopColor="#4DD0FF" />
            <stop offset="0.8" stopColor="#4DD0FF" stopOpacity="0" />
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