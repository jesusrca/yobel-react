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

  // Logic scroll: controls the active index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalPoints = data.length;
    if (totalPoints === 0) return;

    const segmentSize = 1 / totalPoints;
    const index = Math.min(
        Math.floor(latest / segmentSize),
        totalPoints - 1
    );
    setActiveIndex(index);
  });

  // Animate mask opacity from 0 to 1 as user scrolls
  const maskOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className={cn("relative h-[400vh] w-full", className)}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-transparent">
         <motion.video
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
            style={{
              maskImage: `linear-gradient(to bottom, 
                rgba(0,0,0,${maskOpacity}) 0%, 
                rgba(0,0,0,${maskOpacity}) 100%), 
                url("${imgImage4}")`,
              maskSize: '100% 100%, cover',
              maskRepeat: 'no-repeat, no-repeat',
              maskPosition: 'center, right center',
              maskComposite: 'intersect',
              WebkitMaskImage: `linear-gradient(to bottom, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,1) 100%), 
                url("${imgImage4}")`,
              WebkitMaskSize: '100% 100%, cover',
              WebkitMaskRepeat: 'no-repeat, no-repeat',
              WebkitMaskPosition: 'center, right center',
              WebkitMaskComposite: 'source-in'
            }}
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
      </div>
    </div>
  );
}