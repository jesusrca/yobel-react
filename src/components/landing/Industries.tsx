import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Slider from "react-slick";
import { industries } from "../../data/industries";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";
import { ThreeColumnLayout } from "../ui/ThreeColumnLayout";
import { cn } from "../ui/utils";
import { landingTexts } from "../../constants/landing";

export function Industries({ className, useOrangeGradient = false }: { className?: string; useOrangeGradient?: boolean }) {
  const sliderRef = useRef<Slider>(null);
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
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
      lastScrollTime.current = now;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: "48px",
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "32px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.15,
          centerPadding: "24px",
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "12px",
        }
      }
    ]
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

      {/* Inline Styles for Slick Carousel to avoid build errors with font files */}
      <style>{`
        .slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
        .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
        .slick-list:focus{outline:0}
        .slick-list.dragging{cursor:pointer;cursor:hand}
        .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
        .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
        .slick-track:before,.slick-track:after{display:table;content:''}
        .slick-track:after{clear:both}
        .slick-loading .slick-track{visibility:hidden}
        .slick-slide{display:none;float:left;height:100%;min-height:1px}
        [dir='rtl'] .slick-slide{float:right}
        .slick-slide img{display:block}
        .slick-slide.slick-loading img{display:none}
        .slick-slide.slick-dragging img{pointer-events:none}
        .slick-initialized .slick-slide{display:block}
        .slick-slide > div {height: 100%;}
        .slick-loading .slick-slide{visibility:hidden}
        .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
        .slick-arrow.slick-hidden{display:none}
        
        /* Dots - Removed as per request */
        .slick-list {
            padding-bottom: 10px !important;
            overflow: visible !important;
        }

        @media (max-width: 768px) {
          .slick-list {
            overflow: hidden !important;
            padding: 0 18px 16px !important;
          }
          .slick-track {
            display: flex;
            gap: 18px;
            align-items: stretch;
          }
        }
      `}</style>

       <Container className="max-w-[1440px] flex flex-col gap-20">
         <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
         >
            {/* Left Blur Overlay - Targeted to Image Height */}
            <div className="absolute left-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
            
            {/* Right Blur Overlay - Targeted to Image Height */}
            <div className="absolute right-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />

            <Slider 
              ref={sliderRef} 
              {...settings} 
              arrows={false}
              dots={false}
              autoplay={true} 
              autoplaySpeed={3000} 
              pauseOnHover={true}
            >
                {industries.map((ind, idx) => (
                    <div key={idx} className="px-3 md:px-4 h-full">
                        <div 
                           className="group relative flex flex-col h-full bg-white/85 rounded-[28px] md:rounded-[24px] p-4 md:p-5 shadow-lg backdrop-blur-sm"
                           onMouseEnter={() => setIsHovering(true)}
                           onMouseLeave={() => setIsHovering(false)}
                           onMouseDown={handleMouseDown}
                           onMouseMove={handleMouseMoveOnSlide}
                           onMouseUp={handleMouseUp}
                        >
                            <Link 
                              to={ind.path} 
                              className="flex flex-col gap-5 w-full cursor-pointer block"
                              onClick={(e) => {
                                if (isDragging) {
                                  e.preventDefault();
                                }
                              }}
                            >
                                <div className="aspect-square w-full rounded-[20px] md:rounded-[20px] overflow-hidden relative shrink-0 shadow-md">
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
                ))}
            </Slider>
         </motion.div>
       </Container>
    </Section>
  );
}