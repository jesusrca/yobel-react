import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useCountry } from "/contexts/CountryContext";
import { PageHero } from "/components/ui/PageHero";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { Button } from "/components/ui/button";
import { FAQ } from "/components/landing/FAQ";
import { Industries } from "/components/landing/Industries";
import { Phrase } from "/components/landing/Phrase";
import { FullWidthImage } from "/components/ui/FullWidthImage";
import { ParallaxCurves } from "/components/landing/ParallaxCurves";
import svgPaths from "/imports/svg-5srx0k234k";
import { SolutionsList } from "/components/landing/SolutionsList";
import { ParallaxImage } from "/components/landing/ParallaxImage";
import { ScrollRevealVideo } from "/components/landing/ScrollRevealVideo";
import { BenefitsSection } from "/components/landing/BenefitsSection";
import comexImage from "figma:asset/e608a17e3bf93a1d2e8a4b868a2f12aa32b3854b.png";
import hoverImage from "figma:asset/4288be58a4ef94beb9d8a69085417550e080ee9b.png";
import truckImage from "figma:asset/581b279261d7ceb7941417797fbd59c23f768b5e.png";
import yellowTruck from "figma:asset/b94e87eb574754035d4788fe21930672651cb6ac.png";
import warehouseImage from "figma:asset/cb9b48b25b6989c920d64371cd04e872c5cfcd05.png";
import { comexTexts } from "/constants/services";

const amarilloDesktopVideo = '/videos/amarillo-desktop.mp4';
const heroImage = "https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHNoaXAlMjBwb3J0fGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";




export default function Comex() {
  const { selectedCountry } = useCountry();


  return (
    <>
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
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
             <p className="text-lg md:text-[18px] text-black">{comexTexts.hero.subtitle}</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  {comexTexts.hero.title}
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  {comexTexts.hero.description}
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
         <Container>
            <motion.div
               className="max-w-[1200px] mx-auto my-20 text-center"
               initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
               whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8,  }}
            >
              <div className="mb-8 flex justify-center">
                 <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
              </div>

               <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] mx-auto tracking-tight text-black">
                 {comexTexts.intro.title}
               </h2>

               <div className="flex justify-center">
                   <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                     {comexTexts.intro.buttons[0]}
                   </Button>
               </div>
            </motion.div>
         </Container>
      </Section>

      <ParallaxCurves />

      <Section className="bg-white">
         <Container>
            {/* Solutions with Scroll Animation */}
            <SolutionsList
               solutions={comexTexts.solutions.items}
               hoverImage={hoverImage.src}
               title={comexTexts.solutions.title}
            >
               <div className="mt-12">
                 <Link href="/tarifas">
                   <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit font-[Neue_Augenblick]">
                     Ver tarifas
                   </Button>
                 </Link>
               </div>
            </SolutionsList>

            {/* Benefits */}
            <BenefitsSection
               benefits={comexTexts.benefits.items}
               image={yellowTruck.src}
               imageAlt="Yellow truck"
               title={comexTexts.benefits.title}
            />
         </Container>
      </Section>

      <div className="w-full h-[400px] lg:h-[600px] mb-20 relative overflow-hidden">
         <motion.img
            src={warehouseImage.src}
            alt="Global Logistics"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5,  }}
            viewport={{ once: true }}
         />
      </div>

      <Section className="bg-white">
         <Container>
            {/* Processes */}
            <div>
               <motion.div
                  className="flex flex-col items-center text-center mb-20"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8,  }}
               >
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">{comexTexts.processes.subtitle}</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">{comexTexts.processes.title}</p>
               </motion.div>

               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Procesos</span>
                  {comexTexts.processes.items.map((proc, idx) => (
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
                                   opacity: { duration: 0.8,  },
                                   y: { duration: 0.8,  },
                                   filter: { duration: 0.8,  },
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
                              transition={{ duration: 0.8, delay: 0.2 }}
                           >
                              <h3 className="text-2xl md:text-[26px] text-black font-augenblick text-center lg:text-left font-[Neue_Augenblick]">{proc.title}</h3>
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

      <ScrollRevealVideo />

      <Industries />

      <FAQ items={comexTexts.faqs} />
    </>
  );
}