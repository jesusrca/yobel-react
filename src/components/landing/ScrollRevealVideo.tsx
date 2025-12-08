import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import logoPaths from "../../imports/svg-qgocns5d8m";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ScrollRevealVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? containerRef : undefined,
    offset: ["start start", "end end"]
  });

  // Scale from 1 to 150 to ensure the logo openings cover the entire screen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 150]);
  
  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
         {/* Image Container with increased height */}
         <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">
             <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761396776806-2be01380d8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzY0ODU2NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Logística Yobel"
                className="absolute top-0 left-0 w-full h-full object-cover"
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