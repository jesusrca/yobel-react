import React from "react";
import svgPaths from "../../imports/svg-663tm4jlj0";
import { ScrollRevealString } from "../ui/scroll-reveal-text";

function Iso() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Iso">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Iso">
          <path d={svgPaths.p1d326d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextSecundary() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Secundary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-4 md:px-[50px] py-0 relative w-full font-[Neue_Augenblick] text-center">
          <ScrollRevealString 
            text="Operamos con conexión directa a puertos, aeropuertos y redes logísticas nacionales."
            as="p"
            className="basis-0 font-augenblick grow leading-tight md:leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-2xl md:text-[45px] text-black text-center font-[Abel]"
          />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-4 md:px-[112px] py-0 relative w-full">
          <TextSecundary />
        </div>
      </div>
    </div>
  );
}

export function Phrase() {
  return (
    <div className="relative w-full bg-white" data-name="Phrase">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[5%] md:px-[50px] py-[120px] md:py-[200px] relative w-full max-w-[1400px] mx-auto">
          <Iso />
          <Text />
          <button
            onClick={() => {
              const nextSection = document.querySelector('[data-section="locations"]');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="mt-8 px-8 py-4 rounded-full border-2 border-black bg-transparent text-black relative overflow-hidden transition-all duration-500 text-base font-medium font-[Neue_Augenblick] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#5dd3c0] before:to-[#f0e626] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-full hover:before:opacity-100 hover:border-transparent"
          >
            <span className="relative z-10">VER NUESTRAS SEDES</span>
          </button>
        </div>
      </div>
    </div>
  );
}