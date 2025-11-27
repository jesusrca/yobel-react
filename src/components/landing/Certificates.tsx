import React from "react";
import imgLogoInvima from "figma:asset/b19c5503ac9f4c4786776ea901fb83713199048b.png";
import imgLogoBpm from "figma:asset/86ca0a2fb7650f7e15d38a40b56539b3851e5fa3.png";
import imgLogoIso from "figma:asset/67340db8be0f901aac12f6261cc5984d311cf87b.png";
import imgLogoBpa from "figma:asset/9c117b6f027ea4bc446b349b644c8c2e87a56c17.png";
import imgLogoOliver from "figma:asset/e8cbc1b372f893a7c041916680e9c782e39fed62.png";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";

export function Certificates() {
  return (
    <Section className="bg-white overflow-hidden">
      <Container className="flex flex-col gap-16">

         
         {/* Re-implementing the header part manually to match design exactly since SectionHeading is column-based */}
         <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start -mt-16">
             {/* The "Certificados" label was above. Let's redo the block properly */}
         </div>
      </Container>

      {/* Retrying the render with proper structure */}
       <Container className="flex flex-col gap-16">
         <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
            <div className="shrink-0 w-32 text-lg mt-2">Certificados</div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-32">
               <h2 className="text-4xl md:text-[45px] leading-tight max-w-sm font-[Neue_Augenblick]">
                  Nuestros certificados nos respaldan
               </h2>
               <p className="text-lg leading-relaxed max-w-md opacity-80">
                  En Yobel contamos con certificaciones internacionales y políticas internas que avalan nuestro compromiso con la excelencia operativa, la sostenibilidad ambiental y la integridad en la gestión logística y de manufactura.
               </p>
            </div>
         </div>

         <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 mt-12">
            <img src={imgLogoInvima} alt="Invima" className="h-24 md:h-[207px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
            <img src={imgLogoBpm} alt="BPM" className="h-24 md:h-[207px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
            <img src={imgLogoIso} alt="ISO" className="h-24 md:h-[207px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
            <img src={imgLogoBpa} alt="BPA" className="h-24 md:h-[207px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
            <img src={imgLogoOliver} alt="Oliver" className="h-24 md:h-[196px] object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
         </div>
      </Container>
    </Section>
  );
}
