import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";

// SVG Paths (Reused from Manufacturing style)
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Maquila + Suministro",
    fullDesc: "Gestión integral del material de empaque y acondicionamiento, asegurando la disponibilidad y calidad de los insumos necesarios para tu operación."
  },
  {
    id: "02",
    title: "Blísteres y termoempacados",
    fullDesc: "Soluciones de empaque seguro y visible que protegen tus productos y mejoran su presentación en el punto de venta."
  },
  {
    id: "03",
    title: "Etiquetado y Codificación",
    fullDesc: "Identificación precisa con tecnología INKJET y etiquetado normativo para asegurar la trazabilidad y cumplimiento legal de cada unidad."
  },
  {
    id: "04",
    title: "Packs Promocionales",
    fullDesc: "Armado de ofertas, kits y combinaciones especiales diseñadas para campañas estacionales y promociones en retail."
  },
  {
    id: "05",
    title: "Selección e Inspección",
    fullDesc: "Control de calidad riguroso y validación del estado de la mercancía para garantizar que solo productos perfectos lleguen al mercado."
  },
  {
    id: "06",
    title: "Recuperados",
    fullDesc: "Servicios de reacondicionamiento y recuperación de valor para productos devueltos o con daños menores en el empaque."
  },
  {
    id: "07",
    title: "Reempaque",
    fullDesc: "Adaptación de la presentación de tus productos para exportación o venta local, cumpliendo con los requisitos específicos de cada canal."
  }
];

const benefits = [
  "Alta confiabilidad con cumplimiento OTIF (On Time, In Full) del 99.6%.",
  "Tecnología para seguimiento en tiempo real 24/7.",
  "Equipo especializado en entregas críticas y sensibles.",
  "Cobertura en zonas urbanas y rurales."
];

const processes = [
  { number: "01", title: "Solicitud y Programación", desc: "Registro y coordinación del envío de tus documentos o paquetería de forma ágil y sencilla." },
  { number: "02", title: "Recolección", desc: "Retiro puntual en el punto de origen con confirmación inmediata." },
  { number: "03", title: "Transporte y Seguimiento", desc: "Traslado seguro con monitoreo en tiempo real y control de calidad en cada fase." },
  { number: "04", title: "Entrega Confirmada", desc: "Recepción garantizada con registro digital y trazabilidad completa." },
  { number: "05", title: "Postventa", desc: "Gestión de incidencias y soporte personalizado para asegurar tu satisfacción." }
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
      {/* Hero Section */}
      <PageHero
        videoSrc="https://circular.ws/yobel/fondo-celeste.mp4"
        title={`Servicio de Valor Agregado en ${selectedCountry}`}
        subtitle="Potenciamos tu operación con servicios de acondicionamiento, empaque y personalización, diseñados para agregar valor a tus productos."
        className="bg-gradient-to-b from-white to-[#59c1e6]"
      />

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
               <span className="text-xl text-gray-400 font-medium">Soluciones</span>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Damos valor a cada mercancía</h3>
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
                     src="https://images.unsplash.com/photo-1674573070777-690850b7c68a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwbGFiZWxpbmclMjB3b3JrZXJzfGVufDF8fHx8MTc2NDQxMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
                     alt="Value Added Services" 
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
                        Nos enfocamos en optimizar tiempos y costos
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

      {/* Process Section */}
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
                    Descubre cómo llevamos tu operación al siguiente nivel
                  </h2>
               </div>
            </div>

            <div className="flex flex-col w-full">
               <span className="text-xl text-gray-400 font-medium block mb-12">Procesos</span>
               {processes.map((step, idx) => (
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

      <Industries className="bg-gradient-to-b from-white to-[#59c1e6]" />

      <FAQ items={faqs} />
    </>
  );
}