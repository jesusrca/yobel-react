import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  yValues?: number[];
}

export function ParallaxImage({ src, alt, className, yValues = [-100, 0] }: ParallaxImageProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Default: Start higher (-100px) and move down to 0 as we scroll
  const y = useTransform(scrollYProgress, [0, 1], yValues);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={isMobile ? { opacity } : { y, opacity }}
      className={`mt-auto w-full aspect-[4/3] rounded-[30px] overflow-hidden relative shadow-sm ${className || ''}`}
    >
      <img 
        src="https://circular.ws/yobel/assets/11_tech-electronica.jpeg" 
        alt={alt} 
        className="w-full h-full object-cover" 
      />
    </motion.div>
  );
}