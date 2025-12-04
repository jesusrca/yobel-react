import React, { useRef } from "react";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { motion } from "motion/react";
import { ScrollRevealText } from "../ui/motion-text";
import svgPaths from "../../imports/svg-wg56ef214f";

export interface UseCase {
  number: string;
  title: string;
  desc: string;
}

interface UseCasesSectionProps {
  title?: string;
  subtitle?: string;
  useCases: UseCase[];
  className?: string;
}

export function UseCasesSection({ 
  title = "Casos de uso típicos",
  subtitle = "Aplicaciones",
  useCases,
  className = ""
}: UseCasesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section className={`bg-white py-20 overflow-hidden relative ${className}`}>
      <Container className="relative z-10" ref={containerRef}>
        <div className="flex flex-col gap-12 mb-20">
          <div className="w-12 h-12 relative">
            <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
              <path d={svgPaths.pff39b00} fill="black" />
            </svg>
          </div>
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal mb-8">
              {title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <span className="text-xl text-gray-400 font-medium block mb-12">{subtitle}</span>
          {useCases.map((step, idx) => (
            <div key={idx} className="py-20 border-b border-gray-200 last:border-none">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                <div className="w-full lg:w-1/2 text-left">
                  <motion.span 
                    className="text-[100px] md:text-[165px] font-normal leading-none block bg-clip-text text-transparent bg-gradient-to-b from-[#090909] via-[#59c1e6] to-[#090909]"
                    style={{ backgroundSize: "100% 200%" }}
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                    transition={{ 
                      opacity: { duration: 0.8, ease: "easeOut" },
                      y: { duration: 0.8, ease: "easeOut" },
                      filter: { duration: 0.8, ease: "easeOut" },
                      backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }
                    }}
                  >
                    {step.number}
                  </motion.span>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <h3 className="text-2xl md:text-[26px] text-black font-augenblick">{step.title}</h3>
                  <div className="pl-8 md:pl-12 lg:pl-20">
                    <ScrollRevealText 
                      text={step.desc}
                      className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                    />
                    <a href="#" className="text-black text-lg underline hover:text-gray-600 transition-colors duration-300">
                      Ver Documento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}