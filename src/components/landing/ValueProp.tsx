import React from "react";
import svgPaths from "../../imports/svg-biijegtt4v";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

export function ValueProp() {
  return (
    <Section className="bg-gradient-to-b from-[#f0de32] via-[#fdfaa8] to-white">
      <Container className="flex flex-col gap-16">
        {/* Title Section */}
        <div className="flex flex-col gap-8">
          <div className="w-12 h-12 relative">
             <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
               <path d={svgPaths.pff39b00} fill="black" />
             </svg>
          </div>
          
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-[Neue_Augenblick]">
              Impulsamos tu negocio
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-black font-light font-[Neue_Augenblick]">
              Desde emprendedores hasta grandes corporaciones, en Yobel diseñamos servicios flexibles y a medida que eliminan la complejidad del comercio y la logística.
            </p>
          </div>
        </div>

        {/* Content / Search Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Search Box */}
          <div className="w-full max-w-[547px] flex flex-col gap-4">
            <p className="text-lg text-gray-500">¿Dónde está mi envío?</p>
            
            <div className="w-full border-b border-black py-3 flex items-center justify-between hover:border-b-2 transition-all cursor-pointer">
              <input 
                type="text" 
                placeholder="N°de guía" 
                className="w-full bg-transparent text-2xl placeholder:text-black outline-none"
              />
              <button className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
                  <path d={svgPaths.pd82c980} stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28.0001 28L22.2001 22.2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Box (Video) */}
          <div className="hidden lg:block w-[660px] h-[347px] rounded-[20px] shadow-sm overflow-hidden bg-black">
            <video
              src="https://circular.ws/yobel/camion.mp4"
              className="w-full h-full object-cover pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
