import React, { useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-biijegtt4v";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

export function ValueProp() {
  return (
    <Section className="bg-gradient-to-b from-white via-gray-50 to-white">
      <Container className="mb-20">
        <motion.div 
          className="flex flex-col lg:flex-row items-end justify-between gap-12"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Left Side: Title Section */}
          <div className="flex flex-col gap-8 max-w-4xl">
            <motion.div 
              className="w-12 h-12 relative"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatDelay: 5 
              }}
            >
               <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                 <path d={svgPaths.pff39b00} fill="black" />
               </svg>
            </motion.div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-[Neue_Augenblick]">
                Impulsamos tu negocio
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-black font-light not-italic font-[Neue_Augenblick] max-w-2xl">
                Desde emprendedores hasta grandes corporaciones, en Yobel diseñamos servicios flexibles y a medida que eliminan la complejidad del comercio y la logística.
              </p>
            </div>
          </div>

          {/* Right Side: Search Box */}
          <div className="w-full lg:max-w-[450px] flex flex-col gap-4 shrink-0 pb-2">
              <p className="text-lg text-[rgb(8,8,8)] font-[Neue_Augenblick]">¿Dónde está mi envío?</p>
              
              <button className="w-fit px-8 py-3 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group">
                <span className="text-xl md:text-2xl font-light font-[Neue_Augenblick]">Ingresar tu N° guía aquí</span>
              </button>
          </div>
        </motion.div>
      </Container>

      {/* Full Width Video Section with Rounded Corners */}
      <motion.div 
        className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden rounded-[40px]"
        initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          src="https://circular.ws/yobel/camion.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </Section>
  );
}
