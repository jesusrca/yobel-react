import React from "react";
import svgPaths from "../../imports/svg-hyd0y3kqgz";
import { motion } from "framer-motion";

function YobelLogo() {
  return (
    <div className="w-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1146px] h-auto aspect-[1146/429] mx-auto">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1146 429">
        <g clipPath="url(#clip0_297_1993)" id="Logo">
          {/* Y */}
          <motion.path 
            d={svgPaths.p2158fc00} 
            fill="var(--fill-0, black)" 
            id="Y"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          />
          {/* O */}
          <motion.path 
            d={svgPaths.p1c513400} 
            fill="var(--fill-0, black)" 
            id="o"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          />
          {/* B */}
          <motion.path 
            d={svgPaths.p3e08dd80} 
            fill="var(--fill-0, black)" 
            id="b"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
          {/* E */}
          <motion.path 
            d={svgPaths.p28f50b00} 
            fill="var(--fill-0, black)" 
            id="e"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          />
          {/* L */}
          <motion.path 
            d={svgPaths.pf09d400} 
            fill="var(--fill-0, black)" 
            id="l"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_297_1993">
            <rect fill="white" height="428.172" width="1146" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface HistoryHeroProps {
  label?: string;
  title: string;
  description: string;
  useOrangeGradient?: boolean;
}

export function HistoryHero({ 
  label = "Historia", 
  title, 
  description,
  useOrangeGradient = false
}: HistoryHeroProps) {
  return (
    <div className={`relative w-full overflow-hidden ${useOrangeGradient ? 'bg-gradient-to-b from-[#FF9F1C] via-[#FFB966] to-white' : ''}`}>
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 md:pt-40 lg:pt-48 pb-20 md:pb-32 lg:pb-40">
        
        {/* Logo */}
        <motion.div 
          className="mb-16 md:mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <YobelLogo />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {/* Label */}
          <p className="text-base md:text-lg text-black/50 font-medium font-['Neue_Augenblick']">
            {label}
          </p>

          {/* Text Container */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-start">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight lg:leading-[1.03] text-black font-['Neue_Augenblick'] font-normal lg:max-w-[773px]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-[22px] leading-relaxed lg:leading-[1.1] text-black font-['Neue_Augenblick'] font-normal lg:max-w-[320px] lg:shrink-0">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}