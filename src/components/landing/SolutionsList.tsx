"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

interface SolutionItem {
  title: string;
  desc: string;
}

interface SolutionsListProps {
  solutions: SolutionItem[];
  hoverImage: string;
  title?: string;
  children?: React.ReactNode;
}

export function SolutionsList({ solutions, hoverImage, title, children }: SolutionsListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 85%", "start 35%"]
  });

  // Opacity for the whole block
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Parallax for the image only: Starts higher (-150px) and moves down to 0 as we scroll
  // This creates a "sticky" or "slower" feel relative to the list which scrolls up normally
  const imageY = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <motion.div 
      ref={scrollRef}
      style={{ opacity }}
      className="-mt-32 md:-mt-48 relative z-10 mb-24"
    >
       {title && <p className="text-lg text-gray-500 mb-8">{title}</p>}
       
       <div className="relative flex flex-col" onMouseLeave={() => setHoveredIndex(null)}>
          {solutions.map((sol, idx) => {
             const borderColor = "border-gray-200";
             const isHovered = hoveredIndex === idx;
             
             return (
                <div 
                   key={idx} 
                   className={`relative flex items-center py-6 md:py-0 md:h-[120px] border-b-[1.5px] ${borderColor} cursor-pointer group`}
                   onMouseEnter={() => setHoveredIndex(idx)}
                >
                   <div className="w-full flex justify-between items-center z-10 relative">
                      <h4 className={`w-full md:w-5/12 text-[28px] md:text-[32px] font-normal leading-tight transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-400'}`}>
                         <span className="mr-4 font-[Neue_Augenblick]">0{idx + 1} /</span> 
                         <span className={isHovered ? 'text-black' : 'text-gray-600'}>{sol.title}</span>
                      </h4>

                      <div className={`hidden md:block w-5/12 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                         <p className="text-lg text-gray-600 text-right leading-relaxed">{sol.desc}</p>
                      </div>
                   </div>
                </div>
             );
          })}

          {/* Floating Image with Parallax */}
          <motion.div 
            style={{ y: imageY }}
            className="absolute inset-0 pointer-events-none z-20 hidden lg:block"
          >
            <AnimatePresence>
               {hoveredIndex !== null && (
                  <motion.div 
                     className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[240px]"
                     initial={{ opacity: 0, y: (hoveredIndex * 120) - 60 }}
                     animate={{ opacity: 1, y: (hoveredIndex * 120) - 60 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3,  }}
                  >
                     <motion.div
                       initial={{ scale: 0.9 }}
                       animate={{ scale: 1 }}
                       exit={{ scale: 0.9 }}
                       className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                     >
                        <img src={hoverImage} className="w-full h-full object-cover" alt="Service" />
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
          </motion.div>
       </div>
       {children}
    </motion.div>
  );
}
