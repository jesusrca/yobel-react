import React from "react";

interface HeroGradientProps {
  category: string;
  title: string;
  description: string;
  variant?: "yellow" | "gray" | "blue";
}

const gradients = {
  yellow: "linear-gradient(to bottom, #F0DE32 0%, #F7EE93 50%, #FEFBF0 85%, #FFFFFF 100%)",
  gray: "linear-gradient(to bottom, #E5E5E5 0%, #F5F5F5 50%, #FAFAFA 85%, #FFFFFF 100%)",
  blue: "linear-gradient(to bottom, #3DD0E3 0%, #8DE5F0 50%, #E5F9FC 85%, #FFFFFF 100%)"
};

export function HeroGradient({ 
  category, 
  title, 
  description, 
  variant = "yellow" 
}: HeroGradientProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick">
      <div 
        className="absolute inset-0"
        style={{
          background: gradients[variant]
        }}
      />
      <div className="relative h-full flex flex-col justify-end px-[5%] md:px-[50px] z-10 pt-[96px] pb-10">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px] w-full">
          <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">
            {category}
          </p>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
            <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
              {title}
            </h1>
            <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
