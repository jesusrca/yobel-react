import React, { useState, useRef } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { ChevronRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { ScrollRevealText } from "../../components/ui/motion-text";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Manufactura del Hogar",
    fullDesc: "Producción, envasado y reacondicionado de artículos de limpieza, ambientadores y utensilios, cumpliendo estándares BPM y de seguridad."
  },
  {
    id: "02",
    title: "Almacenamiento Flexible",
    fullDesc: "Gestión de inventarios por cada línea de producto o canal de venta, con WMS y control por lote o fecha de vencimiento."
  },
  {
    id: "03",
    title: "Distribución Omnicanal",
    fullDesc: "Entregas B2B, retail y e-commerce con trazabilidad total y cumplimiento OTIF 99.6%."
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    fullDesc: "Kitting, armado de packs promocionales, etiquetado y personalización para temporadas o lanzamientos."
  },
  {
    id: "05",
    title: "Comercio Exterior",
    fullDesc: "Coordinación de importaciones y exportaciones de materias primas y productos terminados para abastecer mercados regionales."
  }
];

const benefits = [
  "Reducción de costos logísticos mediante integración total de procesos.",
  "Trazabilidad 24/7 desde el origen hasta el punto de venta.",
  "Flexibilidad operativa ante campañas o temporadas.",
  "Control por lote, SKU o canal de distribución.",
  "Entrega confiable con cumplimiento OTIF 99.6%."
];

const useCases = [
  { number: "01", title: "Campañas promocionales", desc: "Armado y distribución de packs especiales o combos por temporada." },
  { number: "02", title: "Reposición retail", desc: "Abastecimiento continuo a supermercados, tiendas por departamento y marketplaces." },
  { number: "03", title: "Lanzamientos de línea", desc: "Distribución nacional de nuevos productos o versiones mejoradas." },
  { number: "04", title: "Gestión e-commerce", desc: "Preparación y despacho directo al consumidor final." },
  { number: "05", title: "Reacondicionado", desc: "Ajustes de empaque, rotulado o formato según canal de venta." }
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas B2B y B2C.",
  "Lead time reducido en abastecimientos estacionales.",
  "Visibilidad total del inventario en tiempo real.",
  "Disminución de mermas y sobrestock mediante control WMS."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BPM/BPA", desc: "Buenas prácticas de manufactura y almacenamiento." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental." }
];

export function HomeCare() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://circular.ws/yobel/fondo-celeste.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black">Industrias</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[900px]">
                  Soluciones logísticas para Cuidado del Hogar
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[400px] pt-2">
                  Hacemos que tus productos lleguen a cada hogar con eficiencia, cuidado y puntualidad.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-8 max-w-[1000px] mx-auto items-center text-center">
             <div className="w-12 h-12 relative mb-2">
               <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                 <path d={svgPaths.pff39b00} fill="black" />
               </svg>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-light text-gray-400">
               Eficiencia doméstica
             </h2>
             <div className="flex flex-col gap-12 items-center">
               <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                 En Yobel SCM gestionamos la cadena de suministro de productos para el hogar, limpieza y cuidado del ambiente. Integramos manufactura, almacenamiento y distribución con control total de inventario.
               </p>
               <div>
                 <Button className="bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-all duration-300">
                   Contactar Asesor
                 </Button>
               </div>
             </div>
           </div>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-12">
             <div className="flex flex-col gap-2 items-start">
               <span className="text-xl text-gray-400 font-medium">Servicios</span>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">¿Cómo te ayudamos?</h3>
             </div>
             
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-0 border-t border-black">
                  {solutions.map((sol) => (
                    <div 
                      key={sol.id}
                      className="group border-b border-black py-10 cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setActiveSolution(sol.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-baseline">
                           <span className="text-3xl md:text-4xl font-light whitespace-nowrap">{sol.id} /</span>
                           <h3 className="text-3xl md:text-4xl font-light">{sol.title}</h3>
                        </div>
                        <div className="shrink-0">
                           <div className="w-[50px] h-[30px] rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                             <ChevronRight size={20} />
                           </div>
                        </div>
                      </div>
                      <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${activeSolution === sol.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="text-xl text-gray-600 font-light max-w-lg ml-0 md:ml-20">
                           {sol.fullDesc}
                         </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="w-full lg:w-1/2 relative h-[600px] rounded-[30px] overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1683765084506-3ad53915aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjQ0MTUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                     alt="Home Care Industry" 
                     className="absolute inset-0 w-full h-full object-cover" 
                   />
                </div>
             </div>
           </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white py-20">
         <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                     <span className="text-xl text-gray-400 font-medium block mb-4">Beneficios</span>
                     <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal">
                        Agilidad, trazabilidad y optimización
                     </h2>
                  </div>
                  <div className="mt-12 relative h-[400px] rounded-[20px] overflow-hidden hidden lg:block">
                     <img 
                       src="https://images.unsplash.com/photo-1758777151107-b4573745d6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZ29vZHMlMjBsb2dpc3RpY3MlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzY0NDE1MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                       alt="Benefits" 
                       className="absolute inset-0 w-full h-full object-cover" 
                     />
                  </div>
               </div>
               <div className="w-full lg:w-1/2 flex flex-col gap-10">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-6">
                       <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                          <Check size={32} strokeWidth={1.5} />
                       </div>
                       <p className="text-2xl md:text-[22px] font-light leading-relaxed">{benefit}</p>
                    </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      {/* Process / Use Cases Section */}
      <Section className="bg-white py-20 overflow-hidden relative">
         <Container className="relative z-10" ref={containerRef}>
            <div className="flex flex-col gap-12 mb-20">
               <div className="w-12 h-12 relative">
                 <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                   <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
               </div>
               <div className="max-w-4xl">
                  <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal mb-8">
                    Casos de uso típicos
                  </h2>
               </div>
            </div>

            <div className="flex flex-col w-full">
               <span className="text-xl text-gray-400 font-medium block mb-12">Aplicaciones</span>
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
                           </div>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
         </Container>
      </Section>

      {/* Results Section */}
      <Section className="bg-black text-white py-20">
         <Container>
            <h3 className="text-3xl md:text-4xl font-normal mb-16 text-center">Indicadores que priorizamos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {results.map((res, idx) => (
                    <div key={idx} className="text-center px-4 flex flex-col items-center">
                       <div className="w-3 h-3 bg-[#59c1e6] rounded-full mb-6" />
                       <p className="text-xl font-light leading-relaxed">{res}</p>
                    </div>
                ))}
            </div>
         </Container>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-white py-20">
         <Container>
            <div className="flex flex-col gap-12 text-center mb-20">
               <h2 className="text-4xl md:text-[45px] leading-tight font-normal">
                  Nuestros certificados nos respaldan
               </h2>
               <p className="text-xl md:text-[25px] font-light leading-relaxed text-gray-800 max-w-3xl mx-auto">
                  Operamos bajo certificaciones internacionales y políticas internas que garantizan calidad y sostenibilidad.
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
               {certifications.map((cert, idx) => (
                   <div key={idx} className="border border-black/10 p-8 rounded-[30px] w-full md:w-[350px] hover:shadow-xl transition-all bg-white">
                       <h4 className="text-2xl font-bold mb-4 font-augenblick">{cert.title}</h4>
                       <p className="text-lg text-gray-600">{cert.desc}</p>
                   </div>
               ))}
            </div>
         </Container>
      </Section>
    </>
  );
}
