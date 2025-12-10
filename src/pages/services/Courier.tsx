import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Phrase } from "../../components/landing/Phrase";
import { FullWidthImage } from "../../components/ui/FullWidthImage";
import { Industries } from "../../components/landing/Industries";
import { FAQ } from "../../components/landing/FAQ";
import { courierTexts } from "../../constants/services";

const heroImage = "https://images.unsplash.com/photo-1607130232670-52123ba5be5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBleHByZXNzJTIwcGFja2FnZSUyMG1vdG9yY3ljbGUlMjBjb3VyaWVyfGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};


export function Courier() {
  const { selectedCountry } = useCountry();
  

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="/videos/amarillo-desktop.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-[#fff066] to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
            <p className="text-lg md:text-[18px] text-black">{courierTexts.hero.label}</p>
            <div className="flex flex-col lg:flex-row items-start gap-[40px]">
              <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                {courierTexts.hero.title}
              </h1>
              <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                {courierTexts.hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
         <Container>
            {/* Processes */}
            <div>
               <motion.div 
                  className="flex flex-col items-center text-center my-20"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">{courierTexts.processes.subtitle}</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    {courierTexts.processes.title}
                  </p>
               </motion.div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Ciclo de Entrega</span>
                  {courierTexts.processes.items.map((proc, idx) => (
                     <div key={idx} className="py-20 border-b border-gray-200 last:border-none">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                           <div className="w-full lg:w-1/2 text-left flex justify-center lg:justify-start">
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
                                 {(idx + 1).toString().padStart(2, '0')}
                              </motion.span>
                           </div>
                           <motion.div 
                              className="w-full lg:w-1/2 flex flex-col gap-6"
                              initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
                              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                           >
                              <h3 className="text-2xl md:text-[26px] text-black font-augenblick text-center lg:text-left">{proc.title}</h3>
                              <div className="pl-0 md:pl-12 lg:pl-20">
                                 <p className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed text-center lg:text-left">
                                    {proc.desc}
                                 </p>
                              </div>
                           </motion.div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      <Phrase />

      <FullWidthImage 
         src="https://images.unsplash.com/photo-1625258671008-804485b306e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVja3xlbnwxfHx8fDE3NjQzNzM4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
         alt="Flota Courier"
         height="h-[50vh] md:h-[70vh]"
      />

      <Industries useOrangeGradient={true} />

      <FAQ items={courierTexts.faqs} />
    </>
  );
}