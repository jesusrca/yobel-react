import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Plus, Minus, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "../../components/ui/utils";
import { Industries } from "../../components/landing/Industries";
import { FAQ } from "../../components/landing/FAQ";
import { ScrollRevealText } from "../../components/ui/motion-text";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Maquila + Suministro",
    shortDesc: "Gestión integral del material de empaque y acondicionamiento.",
    fullDesc: "Gestión integral del material de empaque y acondicionamiento, asegurando la disponibilidad y calidad de los insumos necesarios para tu operación."
  },
  {
    id: "02",
    title: "Blísteres y termoempacados",
    shortDesc: "Soluciones de empaque seguro y visible.",
    fullDesc: "Soluciones de empaque seguro y visible que protegen tus productos y mejoran su presentación en el punto de venta."
  },
  {
    id: "03",
    title: "Etiquetado y Codificación",
    shortDesc: "Identificación precisa con tecnología INKJET.",
    fullDesc: "Identificación precisa con tecnología INKJET y etiquetado normativo para asegurar la trazabilidad y cumplimiento legal de cada unidad."
  },
  {
    id: "04",
    title: "Packs Promocionales",
    shortDesc: "Armado de ofertas, kits y combinaciones especiales.",
    fullDesc: "Armado de ofertas, kits y combinaciones especiales diseñadas para campañas estacionales y promociones en retail."
  },
  {
    id: "05",
    title: "Selección e Inspección",
    shortDesc: "Control de calidad riguroso y validación del estado.",
    fullDesc: "Control de calidad riguroso y validación del estado de la mercancía para garantizar que solo productos perfectos lleguen al mercado."
  },
  {
    id: "06",
    title: "Recuperados",
    shortDesc: "Servicios de reacondicionamiento y recuperación de valor.",
    fullDesc: "Servicios de reacondicionamiento y recuperación de valor para productos devueltos o con daños menores en el empaque."
  },
  {
    id: "07",
    title: "Reempaque",
    shortDesc: "Adaptación de la presentación de tus productos.",
    fullDesc: "Adaptación de la presentación de tus productos para exportación o venta local, cumpliendo con los requisitos específicos de cada canal."
  }
];

const benefits = [
  "Reducción de costos operativos mediante servicios integrados.",
  "Flexibilidad para adaptarse a temporadas y promociones.",
  "Control de calidad en cada etapa del acondicionamiento.",
  "Cumplimiento normativo y trazabilidad completa."
];

const processSteps = [
  { number: "01", title: "Solicitud y Programación", desc: "Registro y coordinación del servicio de valor agregado de forma ágil y personalizada." },
  { number: "02", title: "Recepción y Análisis", desc: "Evaluación del producto y planificación del proceso de acondicionamiento." },
  { number: "03", title: "Acondicionamiento", desc: "Ejecución del servicio con control de calidad en cada fase del proceso." },
  { number: "04", title: "Validación Final", desc: "Inspección y registro digital del producto terminado antes del despacho." },
  { number: "05", title: "Entrega y Postventa", desc: "Despacho con trazabilidad completa y soporte continuo para tu satisfacción." }
];

const faqs = [
  { question: "¿Pueden realizar el acondicionamiento directamente en mi planta?", answer: "Sí, ofrecemos modalidad in-house para ejecutar el servicio en tus instalaciones, manteniendo el mismo estándar de calidad y control." },
  { question: "¿Qué tipo de empaques promocionales realizan?", answer: "Diseñamos y armamos packs, combos o kits promocionales personalizados según canal o temporada." },
  { question: "¿Realizan etiquetado o codificación por lote?", answer: "Sí, ofrecemos inkjet, codificado y etiquetado con trazabilidad completa para control de inventario." },
  { question: "¿Se puede integrar el servicio VAS con almacenamiento o distribución?", answer: "Sí, nuestros procesos se integran con almacenes y red de distribución para optimizar tiempos, costos y productividad." }
];

export function ValueAdded() {
  const { selectedCountry } = useCountry();
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black">Valor Agregado</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  Servicio de Valor Agregado en {selectedCountry}
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  Potenciamos tu operación con servicios de acondicionamiento, empaque y personalización.
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
               Personalización y agilidad
             </h2>
             <div className="flex flex-col gap-12 items-center">
               <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                 En Yobel agregamos valor a tus productos mediante servicios de acondicionamiento, empaque y personalización que se adaptan a la velocidad de tu mercado.
               </p>
               <div>
                 <Button className="bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-all duration-300">
                   Solicitar Servicio de Valor Agregado
                 </Button>
               </div>
             </div>
           </div>
        </Container>
      </Section>

      {/* Solutions / Soluciones */}
      <SolutionsShowcase 
        label="Soluciones"
        title="Damos valor a cada mercancía"
        solutions={solutions}
        imageUrl="https://images.unsplash.com/photo-1583737077549-d078beef3046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBhc3NlbWJseSUyMHdhcmVob3VzZSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY0ODQ2MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Valor Agregado"
      />

      {/* Benefits Section */}
      <Section className="bg-white py-20">
         <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                     <span className="text-xl text-gray-400 font-medium block mb-4">Beneficios</span>
                     <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal">
                        Optimizamos tiempos y costos en tu operación
                     </h2>
                  </div>
                  <div className="mt-12 relative h-[400px] rounded-[20px] overflow-hidden hidden lg:block">
                     <img 
                       src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwYWNrYWdpbmclMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY0NDEyNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
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

      {/* Process / Traceability Section */}
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
                    Procesos de valor agregado con trazabilidad completa
                  </h2>
                  <p className="text-2xl md:text-[45px] leading-tight font-light text-gray-500">
                    Descubre cómo llevamos tu operación al siguiente nivel con servicios personalizados
                  </p>
               </div>
            </div>

            <div className="flex flex-col w-full">
               <span className="text-xl text-gray-400 font-medium block mb-12">Procesos</span>
               {processSteps.map((step, idx) => (
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

      {/* Industries Section (Carousel) */}
      <Industries className="bg-gradient-to-b from-white to-[#59c1e6]" />

      {/* FAQ Section */}
      <FAQ items={faqs} />
    </>
  );
}