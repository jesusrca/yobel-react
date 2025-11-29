import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export function HistoryTimeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalItems = items.length;
  // Map scroll 0..1 to 0..(totalItems - 1)
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, totalItems - 1]);
  const smoothIndex = useSpring(rawIndex, { stiffness: 100, damping: 20, mass: 1 });

  return (
    <div ref={containerRef} style={{ height: `${Math.max(totalItems * 60, 200)}vh` }} className="relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Years Horizontal Strip */}
        <div className="relative w-full h-32 md:h-48 flex items-center justify-center mb-8 md:mb-16">
           {items.map((item, i) => (
             <YearItem 
               key={i} 
               item={item} 
               index={i} 
               currentIndex={smoothIndex} 
             />
           ))}
        </div>

        {/* Content (Title + Desc) */}
        <div className="relative w-full max-w-xl px-6 h-40">
           {items.map((item, i) => (
             <ContentItem 
               key={i} 
               item={item} 
               index={i} 
               currentIndex={smoothIndex} 
             />
           ))}
        </div>

        {/* Scroll Indicator (Optional, visual cue) */}
        <motion.div 
           className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300 text-sm"
           style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
        >
           <span className="animate-bounce block">↓</span>
        </motion.div>
      </div>
    </div>
  );
}

function YearItem({ item, index, currentIndex }: { item: TimelineItem, index: number, currentIndex: MotionValue<number> }) {
  // Spacing between years in pixels
  const spacing = 350; // Adjust for mobile?

  const x = useTransform(currentIndex, (v) => (index - v) * spacing);
  
  const dist = useTransform(currentIndex, (v) => Math.abs(v - index));
  
  const opacity = useTransform(dist, [0, 1, 2], [1, 0.2, 0.05]);
  const scale = useTransform(dist, [0, 1], [1.5, 1]);
  const color = useTransform(dist, [0, 0.5, 1], ["#000000", "#000000", "#e5e7eb"]);
  
  // Optional blur effect
  // const blur = useTransform(dist, [0, 1], ["0px", "2px"]);

  return (
     <motion.div
       className="absolute flex items-center justify-center"
       style={{ x, opacity, scale, color, zIndex: useTransform(dist, (d) => d < 0.5 ? 10 : 0) }}
     >
       <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter transition-colors duration-0">
         {item.year}
       </span>
     </motion.div>
  )
}

function ContentItem({ item, index, currentIndex }: { item: TimelineItem, index: number, currentIndex: MotionValue<number> }) {
   const dist = useTransform(currentIndex, (v) => Math.abs(v - index));
   const opacity = useTransform(dist, [0, 0.6], [1, 0]);
   const y = useTransform(currentIndex, (v) => (v - index) * 20);
   const pointerEvents = useTransform(dist, (d) => d < 0.5 ? "auto" : "none");

   return (
     <motion.div
        className="absolute inset-0 text-center flex flex-col items-center"
        style={{ opacity, y, pointerEvents }}
     >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{item.title}</h3>
        <p className="text-lg text-gray-600 font-light leading-relaxed">{item.desc}</p>
     </motion.div>
   )
}
