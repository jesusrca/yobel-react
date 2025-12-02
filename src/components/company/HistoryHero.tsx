import React from "react";
import svgPaths from "../../imports/svg-vr8jsk0xw0";

function YobelLogo() {
  return (
    <div className="w-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1146px] h-auto aspect-[1146/429]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1146 429">
        <g id="Logo">
          <path d={svgPaths.p1f03c100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3a953300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p80eae80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p15cbed00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p19fc3880} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pf09d400} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p2c34d100} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

interface HistoryHeroProps {
  label?: string;
  title: string;
  description: string;
}

export function HistoryHero({ 
  label = "Historia", 
  title, 
  description 
}: HistoryHeroProps) {
  return (
    <div className="relative w-full bg-[#a7e370] overflow-hidden">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 lg:pb-40">
        
        {/* Logo */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <YobelLogo />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
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
        </div>
      </div>
    </div>
  );
}
