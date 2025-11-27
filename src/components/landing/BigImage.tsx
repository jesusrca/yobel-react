import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgImagen from "figma:asset/adc72d5df3d80c8fdccbc8cfbcf1e923861a2634.png";
import svgPaths from "../../imports/svg-1euews6kv9";

export function BigImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth curve formation effect: starts flatter and curves out
  const topCurveScale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const bottomCurveScale = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);
  
  return (
    <div ref={containerRef} className="w-full relative">
      <div className="w-full h-[600px] md:h-[850px] relative overflow-hidden">
        <img src={imgImagen} alt="Yobel Logistics" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Top White Curve */}
        <motion.div 
          style={{ scaleY: topCurveScale, transformOrigin: "top" }}
          className="absolute top-0 left-0 right-0 h-[65px] w-full z-10"
        >
           <div className="relative h-full w-full text-white">
             <svg className="block w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 65" fill="currentColor">
               <path d={svgPaths.p2642d780} />
             </svg>
           </div>
        </motion.div>

        {/* Bottom Yellow Curve */}
        <motion.div 
          style={{ scaleY: bottomCurveScale, transformOrigin: "bottom" }}
          className="absolute bottom-0 left-0 right-0 h-[65px] w-full z-10 flex items-end justify-center"
        >
           <div className="relative h-full w-full text-[#FFF066] rotate-180">
             <svg className="block w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 65" fill="currentColor">
               <path d={svgPaths.p2642d780} />
             </svg>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
