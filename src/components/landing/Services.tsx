import React, { useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "motion/react";
import imgImage2 from "figma:asset/4c6b3fc2460841a75d34a2639563e0e77451369b.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

const services = [
  {
    id: "01",
    title: "Comercio Exterior (COMEX)",
    description: "Soluciones ágiles para importar y exportar. Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.",
    image: imgImage2
  },
  {
    id: "02",
    title: "Manufactura",
    description: "Producción flexible de consumo masivo. Fabricamos y acondicionamos productos en nuestras plantas, bajo estándares internacionales (BPM/BPA), listos para lanzamientos y temporadas de alta demanda.",
    image: imgImage2 
  },
  {
    id: "03",
    title: "Servicio de Valor Agregado",
    description: "Más valor para tus productos. Kitting, etiquetado, empaques promocionales, re-embalaje, termoencogido y reacondicionado con control por lote, para campañas más rápidas y eficientes.",
    image: imgImage2
  },
  {
    id: "04",
    title: "Almacenamiento",
    description: "Inventarios seguros y optimizados. Almacenes con WMS, control de temperatura y trazabilidad 100% garantizada. Seguridad y cross-docking para abastecer todos tus canales.",
    image: imgImage2
  },
  {
    id: "05",
    title: "Distribución",
    description: "Entregas confiables en todo el país. B2B moderno y mayorista, e-commerce y última milla. Cumplimos ventanas de entrega con un desempeño OTIF del 99.6% a nivel nacional.",
    image: imgImage2
  },
  {
    id: "06",
    title: "Courier Express",
    description: "Recolección y entrega puerta a puerta. Ideal para e-commerce, muestras y envíos urgentes, con trazabilidad 24/7 y control total de tus entregas.",
    image: imgImage2
  }
];

export function Services() {
  const [activeId, setActiveId] = useState("01");

  return (
    <Section className="bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}} />
      <Container className="relative min-h-[600px] font-['Space_Grotesk',sans-serif]">


        <div className="flex flex-col w-full">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative group border-b border-gray-300 last:border-0 h-[120px]"
              onMouseEnter={() => setActiveId(service.id)}
              onClick={() => setActiveId(service.id)}
            >
              <div className="h-full cursor-pointer flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-0">
                <div className={`flex items-baseline gap-4 text-3xl md:text-4xl transition-colors duration-500 w-full md:w-5/12 ${activeId === service.id ? 'text-black' : 'text-gray-400'}`}>
                  <span>{service.id} /</span>
                  <span>{service.title}</span>
                </div>
                
                <div className="md:hidden">
                    {activeId === service.id && (
                        <p className="text-lg text-gray-600 mt-4">{service.description}</p>
                    )}
                </div>

                <div className="hidden md:flex w-full md:w-5/12 justify-end">
                   <div className={`transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                     <p className="text-base text-gray-600 max-w-md text-left">{service.description}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image for Desktop */}
        <div className="hidden lg:block absolute top-0 left-[55%] -translate-x-1/2 w-[400px] h-[240px] pointer-events-none transition-transform duration-700 ease-out z-10"
             style={{ transform: `translateX(-50%) translateY(${((parseInt(activeId) - 1) * 120) - 60}px)` }}>
             <AnimatePresence mode="wait">
                <motion.div 
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                >
                   <ImageWithFallback src={services.find(s => s.id === activeId)?.image || imgImage2} className="w-full h-full object-cover" alt="Service" />
                </motion.div>
             </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
