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

  return (
    <div className="border-b border-black py-9">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
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
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 px-4 md:px-12">
               <p className="text-lg md:text-[22px] text-gray-500 leading-relaxed max-w-[547px]">
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
  return (
    <Section className={`relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#31CDFF] ${className}`}>
      <Container className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
         <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-4xl md:text-[45px] leading-tight text-black font-[Neue_Augenblick]">
               ¿Tienes algunas preguntas? Encuentra tu respuesta
            </h2>
         </div>
         <div className="lg:w-2/3 w-full">
            {items.map((faq, idx) => (
               <FAQItem key={idx} {...faq} />
            ))}
         </div>
      </Container>
    </Section>
  );
}
