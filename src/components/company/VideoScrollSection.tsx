import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const dataPoints = [
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

export function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration) {
        videoRef.current.currentTime = duration * latest;
    }
    
    const totalPoints = dataPoints.length;
    const segmentSize = 1 / totalPoints;
    const index = Math.min(
        Math.floor(latest / segmentSize),
        totalPoints - 1
    );
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
         <video
            src="https://circular.ws/yobel/fabrica.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
         />
         
         <div className="absolute inset-0 bg-black/10 pointer-events-none" />

         {/* Glass Card Overlay - Bottom Right */}
         <div className="absolute bottom-10 right-5 md:bottom-20 md:right-[50px] z-20">
            <div className="w-[300px] md:w-[400px] p-8 rounded-[30px] backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-2xl overflow-hidden relative">
                <div className="relative min-h-[160px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col justify-between"
                        >
                            <div className="text-5xl md:text-[64px] font-light leading-none tracking-tighter font-augenblick mb-4">
                                {dataPoints[activeIndex].value}
                            </div>
                            
                            <div>
                                <div className="w-full h-[1px] bg-white/30 mb-4" />
                                <div className="flex justify-between items-end">
                                    <span className="text-lg md:text-xl font-light opacity-90 leading-tight max-w-[70%] font-augenblick">
                                        {dataPoints[activeIndex].label}
                                    </span>
                                    <span className="text-sm font-mono opacity-60 tracking-widest">
                                        {dataPoints[activeIndex].sub}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
