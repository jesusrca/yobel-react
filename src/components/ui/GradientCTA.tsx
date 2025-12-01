import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./button";

interface GradientCTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export function GradientCTA({ 
  title, 
  subtitle, 
  buttonText = "Nuestro Enfoque",
  buttonLink = "#"
}: GradientCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to gradient color stops
  // Start: light cyan/celeste to white
  // End: dark to black
  const gradientStart = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#a8dded", "#5a8fa3", "#1a2332"]
  );
  
  const gradientEnd = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#e0f2f7", "#2d4a5c", "#000000"]
  );

  // Text color transition
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#000000", "#333333", "#cccccc", "#ffffff"]
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-start justify-center overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            background: useTransform(
              [gradientStart, gradientEnd],
              ([start, end]) => `linear-gradient(to bottom, ${start}, ${end})`
            )
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] px-[5%] md:px-[50px] pt-24 md:pt-32">
          <div className="flex flex-col gap-8 max-w-[900px]">
            <motion.h2 
              style={{ color: textColor }}
              className="text-4xl md:text-5xl lg:text-[65px] leading-[1.1] font-[Neue_Augenblick]"
            >
              {title}
            </motion.h2>
            
            <motion.p 
              style={{ color: textColor }}
              className="text-2xl md:text-3xl lg:text-[40px] leading-[1.2] font-light font-[Neue_Augenblick] opacity-70"
            >
              {subtitle}
            </motion.p>

            <div className="mt-8">
              <motion.div
                style={{
                  borderColor: textColor,
                }}
              >
                <Button 
                  className="rounded-full px-8 py-4 h-auto text-lg md:text-xl font-medium leading-tight bg-transparent border-[1.5px] hover:bg-white/10 transition-all duration-300"
                  style={{
                    borderColor: 'currentColor',
                    color: 'inherit'
                  }}
                  onClick={() => {
                    if (buttonLink.startsWith('#')) {
                      const element = document.querySelector(buttonLink);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = buttonLink;
                    }
                  }}
                >
                  {buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}