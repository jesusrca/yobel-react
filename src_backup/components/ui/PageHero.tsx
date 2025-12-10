import React from "react";
import { Container } from "./custom-container";

interface PageHeroProps {
  title: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

export function PageHero({ title, description, imageUrl, className = "" }: PageHeroProps) {
  return (
    <div className={`relative h-[60vh] min-h-[500px] max-h-[700px] w-full overflow-hidden bg-gray-900 ${className}`}>
      {imageUrl && (
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-24 pt-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <Container>
          <div className="flex flex-col gap-6 text-white max-w-[1000px]">
            <h1 className="text-4xl md:text-6xl lg:text-[65px] leading-none font-normal drop-shadow-md tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl lg:text-[22px] leading-normal drop-shadow-md opacity-90 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
