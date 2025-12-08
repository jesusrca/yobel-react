import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "motion/react";
import { cn } from "../ui/utils";
import { imgImage4 } from "../../imports/svg-qubmg";

export interface DataPoint {
  value: string;
  label: string;
  sub: string;
}

interface VideoScrollSectionProps {
  videoSrc?: string;
  data?: DataPoint[];
  className?: string;
}

const DEFAULT_DATA_POINTS: DataPoint[] = [
  {
    value: "+4,600",
    label: "colaboradores",
    sub: "1-3"
  },
  {
    value: "9",
    label: "países",
    sub: "2-3"
  },
  {
    value: "+30%",
    label: "liderazgo femenino",
    sub: "3-3"
  }
];

const DEFAULT_VIDEO = "https://circular.ws/yobel/fabrica.mp4";

export function VideoScrollSection({ 
  videoSrc = DEFAULT_VIDEO, 
  data = DEFAULT_DATA_POINTS,
  className 
}: VideoScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Logic scroll: controls the active index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalPoints = data.length;
    if (totalPoints === 0) return;

    // Mark as user scrolling
    setIsUserScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Set timeout to reset scrolling state
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 2000);

    const segmentSize = 1 / totalPoints;
    const index = Math.min(
        Math.floor(latest / segmentSize),
        totalPoints - 1
    );
    setActiveIndex(index);
  });

  // Auto-advance effect
  React.useEffect(() => {
    if (isUserScrolling || data.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isUserScrolling, data.length]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Parallax effect for video
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={containerRef} className={cn("relative h-[400vh] w-full", className)}>
      <motion.div 
         className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-transparent"
         initial={{ opacity: 0, filter: "blur(10px)" }}
         whileInView={{ opacity: 1, filter: "blur(0px)" }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <motion.video
            src="https://circular.ws/yobel/camion.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
         />

         {/* Glass Card Overlay - Bottom Right */}
         <div className="absolute bottom-10 right-5 md:bottom-20 md:right-[50px] z-20">
            <div className="w-[300px] md:w-[400px] p-8 rounded-[30px] backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-2xl overflow-hidden relative">
                <div className="relative min-h-[160px]">
                    <AnimatePresence mode="wait">
                        {data[activeIndex] && (
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col justify-between"
                            >
                                <div className="text-5xl md:text-[64px] font-light leading-none tracking-tighter font-augenblick mb-4">
                                    {data[activeIndex].value}
                                </div>
                                
                                <div>
                                    <div className="w-full h-[1px] bg-white/30 mb-4" />
                                    <div className="flex justify-between items-end">
                                        <span className="text-lg md:text-xl font-light opacity-90 leading-tight max-w-[70%] font-augenblick">
                                            {data[activeIndex].label}
                                        </span>
                                        <span className="text-sm font-mono opacity-60 tracking-widest">
                                            {data[activeIndex].sub}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
         </div>
      </motion.div>
    </div>
  );
}