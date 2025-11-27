import React, { useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "motion/react";
import imgComex from "figma:asset/b94e87eb574754035d4788fe21930672651cb6ac.png";
import imgManufactura from "figma:asset/ecce90734732751a4bc28b6dbd70ffe655c57b16.png";
import imgValorAgregado from "figma:asset/95ebfea3e27fbddd6fe8803e814394cf22a368a9.png";
import imgDistribucion from "figma:asset/4288be58a4ef94beb9d8a69085417550e080ee9b.png";
import imgAlmacenamiento from "figma:asset/bc92ff65ed742074ad9e86d0d196130c5b3c4401.png";
import imgCourier from "figma:asset/80542a74be9bc879ecf905bddf6ee80ddd8d25a7.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";

const services = [
  {
    id: "01",
    title: "Comercio Exterior (COMEX)",
    description: "Soluciones ágiles para importar y exportar. Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.",
    image: imgComex
  },
  {
    id: "02",
    title: "Manufactura",
    description: "Producción flexible de consumo masivo. Fabricamos y acondicionamos productos en nuestras plantas, bajo estándares internacionales (BPM/BPA), listos para lanzamientos y temporadas de alta demanda.",
    image: imgManufactura 
  },
  {
    id: "03",
    title: "Servicio de Valor Agregado",
    description: "Más valor para tus productos. Kitting, etiquetado, empaques promocionales, re-embalaje, termoencogido y reacondicionado con control por lote, para campañas más rápidas y eficientes.",
    image: imgValorAgregado
  },
  {
    id: "04",
    title: "Almacenamiento",
    description: "Inventarios seguros y optimizados. Almacenes con WMS, control de temperatura y trazabilidad 100% garantizada. Seguridad y cross-docking para abastecer todos tus canales.",
    image: imgAlmacenamiento
  },
  {
    id: "05",
    title: "Distribución",
    description: "Entregas confiables en todo el país. B2B moderno y mayorista, e-commerce y última milla. Cumplimos ventanas de entrega con un desempeño OTIF del 99.6% a nivel nacional.",
    image: imgDistribucion
  },
  {
    id: "06",
    title: "Courier Express",
    description: "Recolección y entrega puerta a puerta. Ideal para e-commerce, muestras y envíos urgentes, con trazabilidad 24/7 y control total de tus entregas.",
    image: imgCourier
  }
];

export function Services() {
  const [activeId, setActiveId] = useState("01");

  return (
    <Section className="bg-white">
      <Container className="relative min-h-[600px]">


        <div className="flex flex-col w-full" onMouseLeave={() => setActiveId("")}>
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative group border-b border-gray-300 last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
              onMouseEnter={() => setActiveId(service.id)}
              onClick={() => setActiveId(service.id)}
            >
              <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0 py-6 md:py-0">
                <div className={`flex items-baseline gap-4 text-2xl md:text-4xl transition-colors duration-500 w-full md:w-5/12 ${activeId === service.id ? 'text-black' : 'text-gray-400'}`}>
                  <span>{service.id} /</span>
                  <span className="font-augenblick">{service.title}</span>
                </div>
                
                <div className="md:hidden w-full">
                    <AnimatePresence>
                    {activeId === service.id && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <p className="text-lg text-gray-600 mb-4 font-augenblick">{service.description}</p>
                            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                                <ImageWithFallback src={service.image} className="w-full h-full object-cover" alt={service.title} />
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>

                <div className="hidden md:flex w-full md:w-5/12 justify-end">
                   <div className={`transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                     <p className="text-base text-gray-600 max-w-md text-left font-augenblick">{service.description}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image for Desktop */}
        <AnimatePresence>
            {activeId && (
                <motion.div 
                    className="hidden lg:block absolute top-0 left-[55%] -translate-x-1/2 w-[400px] h-[240px] pointer-events-none transition-transform duration-700 ease-out z-10"
                    style={{ transform: `translateX(-50%) translateY(${((parseInt(activeId) - 1) * 120) - 60}px)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ opacity: { duration: 0.3 } }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                        key={activeId}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                        >
                        <ImageWithFallback src={services.find(s => s.id === activeId)?.image || imgComex} className="w-full h-full object-cover" alt="Service" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
