"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

const defaultFaqs = [
  {
    question: "¿Puedo rastrear mi envío con Yobel?",
    answer: "Sí. Ingresa tu número de guía y obtén el estado 24/7 con actualizaciones en tiempo real vía web."
  },
  {
    question: "¿Qué sectores atendemos?",
    answer: "Atendemos más de diez industrias, incluyendo belleza y cuidado personal, alimentos y bebidas, farmacéutica, hogar, retail, tecnología, moda, construcción, editorial, manufactura industrial y químicos. Adaptamos cada servicio a las necesidades de tu sector."
  },
  {
    question: "¿Cuál es nuestra cobertura?",
    answer: "Contamos con cobertura nacional e internacional en más de ocho países de Latinoamérica. La disponibilidad y alcance de cada servicio varían según la industria y el tipo de operación logística requerida."
  },
  {
    question: "¿Hacen entregas same day/next day?",
    answer: "Sí. Ofrecemos servicios express con entregas same day y next day en zonas urbanas y principales ciudades, según la ubicación y el tipo de producto. Garantizamos trazabilidad total y cumplimiento OTIF del 99.6%."
  },
  {
    question: "¿Necesito un volumen mínimo para empezar?",
    answer: "No necesariamente. Evaluamos cada operación de forma personalizada para ofrecer la mejor solución según el tipo de servicio, industria y frecuencia de despacho. Nuestro objetivo es adaptarnos a tu escala de negocio."
  },
  {
    question: "¿Qué certificaciones tienen?",
    answer: "Contamos con certificaciones internacionales que respaldan nuestra gestión de calidad, seguridad y sostenibilidad, incluyendo ISO 9001, BASC y estándares de buenas prácticas operativas y ambientales."
  }
];

export interface FAQItemData {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemData) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border-b border-black py-9 relative">
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full flex items-center justify-between text-left group"
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 20 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h3 className="text-xl md:text-[26px] text-black pr-8 font-[Neue_Augenblick]">{question}</h3>
        <div className="relative w-[30px] h-[30px] shrink-0">
          {/* Vertical line - rotates to horizontal when open */}
          <motion.div 
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute top-1/2 left-1/2 w-[2px] h-full bg-black -translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-300"
          />
           {/* Horizontal line - always visible */}
          <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-black -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 pl-12 md:pl-[50px]">
               <p className="text-lg md:text-[22px] text-black leading-relaxed max-w-[547px]">
                 {answer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQProps {
  items?: FAQItemData[];
  className?: string;
}

export function FAQ({ items = defaultFaqs, className }: FAQProps) {
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

  const wordVariants: any = {
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
    <Section className={`relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#31CDFF] ${className}`}>
      <Container className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
         <div className="lg:w-[40%] sticky top-24">
            <motion.h2 
              className="text-4xl md:text-[45px] leading-tight text-black font-[Neue_Augenblick] flex flex-wrap gap-x-[0.25em]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {"¿Tienes algunas preguntas? Encuentra tu respuesta".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
         </div>
         <div className="lg:w-1/2 w-full">
            {items.map((faq, idx) => (
               <FAQItem key={idx} {...faq} />
            ))}
         </div>
      </Container>
    </Section>
  );
}
