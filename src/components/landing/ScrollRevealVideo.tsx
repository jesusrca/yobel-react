import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import logoPaths from "../../imports/svg-qgocns5d8m";

export function ScrollRevealVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale from 1 to 150 to ensure the logo openings cover the entire screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);
  
  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
         {/* Video Container with specific height matching design */}
         <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
             <video 
                src="https://circular.ws/yobel/camion.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
             />
             
             {/* Mask Layer */}
             <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-white mix-blend-screen z-10 pointer-events-none"
             >
                <motion.svg 
                   viewBox="0 0 94 36" 
                   className="w-[80%] md:w-[60%] h-auto origin-center" 
                   preserveAspectRatio="xMidYMid meet"
                   style={{ scale }}
                >
                   {Object.values(logoPaths).map((d, i) => (
                      <path key={i} d={d as string} fill="black" />
                   ))}
                </motion.svg>
             </motion.div>
         </div>
      </div>
    </div>
  );
}
