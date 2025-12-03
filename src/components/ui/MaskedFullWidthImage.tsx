import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgImage5 from "figma:asset/9ac8347172b026af959d42786a41d5d5a429a366.png";
import { imgImage4 } from "../../imports/svg-0odmx";

export function MaskedFullWidthImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={containerRef} className="w-screen relative left-[50%] right-[50%] -mx-[50vw] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          maskImage: `url('${imgImage4}')`,
          maskSize: 'cover',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url('${imgImage4}')`,
          WebkitMaskSize: 'cover',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        <motion.img 
          alt="Control de calidad en alimentos y bebidas" 
          className="w-full h-full object-cover" 
          src={imgImage5}
          style={{ y }}
        />
      </div>
    </div>
  );
}