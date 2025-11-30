import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { newsData } from "../data/news";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../components/ui/utils";

export function Noticias() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {/* Cursor Button */}
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

      {/* Hero Section styled like Tarifas but with Celeste color */}
      <div className="relative h-[40vh] min-h-[300px] md:min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#59c1e6] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[20px] md:gap-[30px]">
             <p className="text-base md:text-[18px] text-black font-[Neue_Augenblick]">Centro de Novedades</p>
             <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-[40px] w-full">
                <h1 className="text-4xl md:text-6xl lg:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Noticias
                </h1>
                <p className="text-lg md:text-[22px] leading-snug md:leading-[24px] text-black max-w-[400px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Mantente informado sobre las últimas novedades, tendencias y casos de éxito de Yobel.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {newsData.map((news) => (
              <Link 
                to={`/noticias/${news.id}`} 
                key={news.id} 
                className="group flex flex-col gap-4 md:gap-6 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="overflow-hidden rounded-[20px] md:rounded-[32px] w-full aspect-[4/3] bg-gray-100 relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <h3 className="text-black text-xl md:text-2xl font-normal leading-tight max-w-[90%] font-[Neue_Augenblick]">
                    {news.title}
                  </h3>
                  <ArrowUpRight className="text-black w-6 h-6 md:w-8 md:h-8 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
