import React, { useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-biijegtt4v";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import camionVideo from "../../assets/videos/camion.mp4";

export function ValueProp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className="bg-gradient-to-b from-[#FFF700] to-white">
      <Container className="mb-20">
        <motion.div
          className="flex flex-col justify-center items-center gap-[60px] w-[1340px] p-[200px_112px]"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Left Side: Title Section */}
          <div className="flex flex-col gap-8 max-w-4xl items-center">
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
            
            <div className="text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-normal text-black mb-6 font-[Neue_Augenblick] flex flex-wrap justify-center gap-x-[0.25em]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {"Impulsamos tu negocio".split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl leading-relaxed text-black font-light not-italic font-[Neue_Augenblick] max-w-2xl flex flex-wrap justify-center gap-x-[0.25em] mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {"Desde emprendedores hasta grandes corporaciones, en Yobel diseñamos servicios flexibles y a medida que eliminan la complejidad del comercio y la logística.".split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>

          {/* Right Side: Search Box */}
          <div className="w-full lg:max-w-[450px] flex flex-col gap-4 shrink-0 pb-2 text-center">
            <button
              className="mx-auto inline-flex items-center justify-center gap-2 min-w-[206px] bg-black text-white text-xl md:text-2xl font-light font-[Neue_Augenblick] tracking-tight border-[1.5px] border-black leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              style={{ padding: "16px 28px 20px 28px", borderRadius: "38px" }}
            >
              Ver mi Envío
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
          src={camionVideo}
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
