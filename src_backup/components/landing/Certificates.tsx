"use client";

import React from "react";
import { motion } from "motion/react";
// Removed unused figma imports
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { LogoGrid } from "../LogoGrid";
import { ThreeColumnLayout } from "../ui/ThreeColumnLayout";

interface CertificatesProps {
  label?: string;
  title?: string;
  description?: string;
}

export function Certificates({ 
  label = "Certificados",
  title = "Nuestros certificados nos respaldan",
  description = "En Yobel contamos con certificaciones internacionales y políticas internas que avalan nuestro compromiso con la excelencia operativa, la sostenibilidad ambiental y la integridad en la gestión logística y de manufactura."
}: CertificatesProps) {
  return (
    <Section className="bg-white overflow-hidden">
       <Container className="flex flex-col gap-20">
         <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <ThreeColumnLayout 
             label={label}
             title={title}
             description={description}
             labelClassName="shrink-0 w-32 text-lg mt-2 opacity-50"
           />
         </motion.div>

         <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.4 }}
         >
           <LogoGrid className="mt-12">
              <img src="https://circular.ws/yobel/ISO-9001.png" alt="ISO 9001:2015" className="h-16 md:h-24 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
              <img src="https://circular.ws/yobel/BPM.png" alt="BPM" className="h-16 md:h-24 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
              <img src="https://circular.ws/yobel/bpa.png" alt="BPA" className="h-16 md:h-24 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
              <img src="https://circular.ws/yobel/basc.png" alt="BASC" className="h-16 md:h-24 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
              <img src="https://circular.ws/yobel/iso-14001.png" alt="ISO 14001" className="h-16 md:h-24 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out grayscale hover:grayscale-0" />
           </LogoGrid>
         </motion.div>
      </Container>
    </Section>
  );
}