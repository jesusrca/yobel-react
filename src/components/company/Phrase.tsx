import React from "react";
import svgPaths from "../../imports/svg-1m3ko4nf5o";

function IsotipoIcon() {
  return (
    <div className="relative w-[41px] h-10 shrink-0">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.7226 39.9999">
          <g id="Vector">
            <path d={svgPaths.p1cc6bd50} fill="black" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface PhraseProps {
  text?: string;
}

export function Phrase({ 
  text = "Cada década hemos escrito un nuevo capítulo: de la manufactura de productos de cuidado personal a la gestión integral de cadenas de suministro en Latinoamérica. Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN."
}: PhraseProps) {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40">
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
          {/* Icon */}
          <div className="shrink-0">
            <IsotipoIcon />
          </div>
          
          {/* Text */}
          <p className="text-2xl md:text-3xl lg:text-[40px] leading-relaxed lg:leading-[1.2] text-black font-['Neue_Augenblick'] font-light max-w-[1100px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}