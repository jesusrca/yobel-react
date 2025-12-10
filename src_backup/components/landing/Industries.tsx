"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { industries } from "../../data/industries";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";
import { ThreeColumnLayout } from "../ui/ThreeColumnLayout";
import { cn } from "../ui/utils";
import { landingTexts } from "../../constants/landing";

export function Industries({ className, useOrangeGradient = false }: { className?: string; useOrangeGradient?: boolean }) {
  const sliderRef = useRef<any>(null);
  const lastScrollTime = useRef(0);
  
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    setIsDragging(false);
  };

  const handleMouseMoveOnSlide = (e: React.MouseEvent) => {
    const deltaX = Math.abs(e.clientX - dragStartPos.current.x);
    const deltaY = Math.abs(e.clientY - dragStartPos.current.y);
    if (deltaX > 5 || deltaY > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    // Throttle to prevent rapid scrolling
    if (now - lastScrollTime.current < 500) return;

    // Check if horizontal scroll dominates and has enough magnitude
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        sliderRef.current?.slideNext();
      } else {
        sliderRef.current?.slidePrev();
      }
      lastScrollTime.current = now;
    }
  };

  const settings = {
    modules: [Autoplay],
    spaceBetween: 6,
    slidesPerView: 3,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 6,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 6,
      },
      768: {
        slidesPerView: 1.15,
        spaceBetween: 6,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
    },
  };

  return (
    <Section className={cn("relative overflow-hidden", useOrangeGradient ? "bg-gradient-to-b from-[#FF9F1C] via-[#FFB966] to-white" : "bg-gradient-to-b from-[#fff066] to-white", className)} onMouseMove={handleMouseMove}>
      <div 
         ref={cursorRef}
         className={cn(
             "fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out",
             "bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3",
             "text-white font-augenblick text-lg whitespace-nowrap",
             isHovering ? "opacity-100" : "opacity-0"
         )}
         style={{ left: 0, top: 0 }}
      >
         Leer más
      </div>


       <Container className="max-w-[1440px] flex flex-col gap-20">
         <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <ThreeColumnLayout 
             label="Industrias"
             title={<>INDUSTRIAS EN <em>MOVIMIENTO</em></>}
             description="Conocemos las exigencias de cada sector. Por eso, en Yobel diseñamos soluciones integradas y adaptables, alineadas a los retos y necesidades de tu industria."
             labelClassName="shrink-0 w-32 text-lg mt-2 opacity-50"
           />
         </motion.div>

         <motion.div 
           className="w-full -mr-20 md:-mr-40 relative" 
           onWheel={handleWheel}
           initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.4 }}
         >
            {/* Left Blur Overlay - Targeted to Image Height */}
            <div className="absolute left-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
            
            {/* Right Blur Overlay - Targeted to Image Height */}
            <div className="absolute right-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />

            <Swiper
              ref={sliderRef}
              {...settings}
            >
                {industries.map((ind, idx) => (
                    <SwiperSlide key={idx} className="h-full">
                        <div className="px-1.5 md:px-2 h-full">
                            <div
                               className="group relative flex flex-col h-full rounded-[28px] md:rounded-[24px] p-4 md:p-5 justify-end items-start gap-4"
                               onMouseEnter={() => setIsHovering(true)}
                               onMouseLeave={() => setIsHovering(false)}
                               onMouseDown={handleMouseDown}
                               onMouseMove={handleMouseMoveOnSlide}
                               onMouseUp={handleMouseUp}
                            >
                                <Link
                                  href={ind.path}
                                  className="flex flex-col gap-5 w-full cursor-pointer block"
                                  onClick={(e) => {
                                    if (isDragging) {
                                      e.preventDefault();
                                    }
                                  }}
                                >
                                    <div className="aspect-square w-full rounded-[20px] md:rounded-[20px] overflow-hidden relative shrink-0">
                                        <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-3 text-black px-2 md:px-2.5">
                                        <h3 className="text-[22px] md:text-2xl font-medium font-[Neue_Augenblick] leading-snug md:leading-normal break-words">{ind.title}</h3>
                                        <p className="text-[17px] md:text-lg font-light leading-snug opacity-80 font-augenblick line-clamp-4 md:line-clamp-none">
                                          {ind.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
         </motion.div>
       </Container>
    </Section>
  );
}
