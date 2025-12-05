import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { Button } from "../../components/ui/button";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { ParallaxCurves } from "../../components/landing/ParallaxCurves";
import { SolutionsList } from "../../components/landing/SolutionsList";
import { FAQ } from "../../components/landing/FAQ";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { Phrase } from "../../components/landing/Phrase";
import { Industries } from "../../components/landing/Industries";
import { ScrollRevealVideo } from "../../components/landing/ScrollRevealVideo";

const heroImage = "https://images.unsplash.com/photo-1641290451977-a427586acf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrcyUyMGxvZ2lzdGljcyUyMGRpc3RyaWJ1dGlvbiUyMGNlbnRlciUyMGZsZWV0fGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    title: "B2B Moderno",
    desc: "Distribución directa a autoservicios, centros de distribución y cadenas de farmacias."
  },
  {
    title: "B2B Mayoristas / Tradicional",
    desc: "Abastecimiento a mayoristas y canales tradicionales."
  },
  {
    title: "B2C Última Milla",
    desc: "Entregas directas al consumidor final."
  }
];

const transportTypes = [
  { title: "Fletes exclusivos", desc: "Traslado dedicado de mercancía de un único cliente, punto a punto." },
  { title: "Fletes consolidados", desc: "Transporte combinado (cargas del mismo cliente o hasta dos clientes) hacia uno o dos destinos." },
  { title: "Repartos express", desc: "Movimientos ágiles desde un origen hacia hasta tres puntos de destino." },
  { title: "Reparto exclusivo", desc: "Envíos de un solo cliente hacia múltiples destinos." },
  { title: "Reparto consolidado", desc: "Distribución consolidada desde uno o varios orígenes hacia múltiples destinos (3+)." }
];

const benefits = [
  "Cobertura en Lima y provincias con transporte especializado.",
  "Alta fiabilidad demostrada con entregas completas y a tiempo.",
  "Visibilidad y control gracias a la trazabilidad y seguimiento en tiempo real de cada pedido."
];

const processes = [
  { title: "Planificación de rutas", desc: "Diseñamos rutas y asignamos recursos según la demanda para una distribución eficiente en todo el Perú." },
  { title: "Picking", desc: "Preparación y verificación de pedidos, garantizando exactitud en cada entrega." },
  { title: "Transporte", desc: "Movilizamos tu mercancía según la modalidad logística elegida (fletes exclusivos, consolidados o express)." },
  { title: "Entrega confirmada", desc: "Confirmación de recepción con trazabilidad en tiempo real para mayor control." },
  { title: "Seguimiento y reporte", desc: "Monitoreo constante del estado de distribución con reportes digitales actualizados." }
];

const faqs = [
  { question: "¿Puedo coordinar envíos a cualquier región del Perú?", answer: "Sí, contamos con una red de transporte y centros estratégicos que nos permiten cubrir todo el país con eficiencia y puntualidad." },
  { question: "¿Puedo programar entregas según mi calendario comercial?", answer: "Sí, planificamos rutas y ventanas horarias adaptadas a la demanda de tu negocio." },
  { question: "¿Realizan entregas en zonas rurales o de difícil acceso?", answer: "Sí, contamos con cobertura nacional y aliados estratégicos que garantizan llegada a cualquier destino." },
  { question: "¿Ofrecen seguimiento de entregas?", answer: "Sí, disponemos de trazabilidad 24/7 y confirmación digital de cada despacho, accesible vía web o app móvil." }
];

export function Distribution() {
  const { selectedCountry } = useCountry();
  
  const processes = [
    { title: "Planificación de rutas", desc: `Diseñamos rutas y asignamos recursos según la demanda para una distribución eficiente en todo ${selectedCountry}.` },
    { title: "Picking", desc: "Preparación y verificación de pedidos, garantizando exactitud en cada entrega." },
    { title: "Transporte", desc: "Movilizamos tu mercancía según la modalidad logística elegida (fletes exclusivos, consolidados o express)." },
    { title: "Entrega confirmada", desc: "Confirmación de recepción con trazabilidad en tiempo real para mayor control." },
    { title: "Seguimiento y reporte", desc: "Monitoreo constante del estado de distribución con reportes digitales actualizados." }
  ];
  
  const faqs = [
    { question: `¿Puedo coordinar envíos a cualquier región de ${selectedCountry}?`, answer: "Sí, contamos con una red de transporte y centros estratégicos que nos permiten cubrir todo el país con eficiencia y puntualidad." },
    { question: "¿Puedo programar entregas según mi calendario comercial?", answer: "Sí, planificamos rutas y ventanas horarias adaptadas a la demanda de tu negocio." },
    { question: "¿Realizan entregas en zonas rurales o de difícil acceso?", answer: "Sí, contamos con cobertura nacional y aliados estratégicos que garantizan llegada a cualquier destino." },
    { question: "¿Ofrecen seguimiento de entregas?", answer: "Sí, disponemos de trazabilidad 24/7 y confirmación digital de cada despacho, accesible vía web o app móvil." }
  ];

  return (
    <>
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://circular.ws/yobel/amarillo-desktop.mp4"
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
             <p className="text-lg md:text-[18px] text-black">Distribución Logística</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  Distribución logística nacional con cobertura total
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  Coordinamos entregas con cobertura nacional y trazabilidad total para que tu cadena de suministro funcione sin interrupciones.
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
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8 flex justify-center">
                 <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
              </div>

               <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] mx-auto tracking-tight text-black">
                 En Yobel diseñamos e implementamos soluciones de distribución eficientes para que tu cadena de suministro funcione sin interrupciones, optimizando tiempos y costos en cada operación.
               </h2>

               <div className="flex justify-center gap-4 flex-wrap">
                   <Link to="/contacto">
                     <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                       Contactar asesor
                     </Button>
                   </Link>
                   <Link to="/tarifas">
                     <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                       Ver tarifas
                     </Button>
                   </Link>
               </div>
            </motion.div>
         </Container>
      </Section>

      <ParallaxCurves />

      <Section className="bg-white">
         <Container>
            {/* Solutions with Scroll Animation */}
            <SolutionsList 
               solutions={solutions} 
               hoverImage={heroImage} 
               title="Canales de Distribución"
            />

            {/* Transport Types - List + Image */}
            <motion.div 
               className="mb-20"
               initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
               whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Marcador */}
              <div className="mb-12">
                <p className="font-augenblick text-2xl text-[rgba(73,73,73,0.5)]">Tipos de transporte</p>
              </div>

              {/* List + Image Layout */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-[133px] items-start lg:items-center w-full">
                {/* List */}
                <div className="flex flex-col w-full lg:w-auto lg:max-w-[660px]">
                  {transportTypes.map((type, idx) => (
                    <motion.div 
                      key={idx}
                      className="box-border flex flex-col gap-10 py-10 relative w-full"
                      initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                    >
                      {/* Border */}
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
                      
                      {/* Content */}
                      <div className="flex flex-col gap-5 w-full">
                        {/* Title */}
                        <div className="flex font-augenblick gap-3 text-2xl text-black">
                          <p className="shrink-0">{(idx + 1).toString().padStart(2, '0')} /</p>
                          <p className="shrink-0">{type.title}</p>
                        </div>
                        
                        {/* Text */}
                        <div className="w-full">
                          <div className="flex items-center justify-center w-full">
                            <div className="flex gap-2.5 items-center justify-center px-0 lg:px-12 w-full">
                              <p className="font-augenblick text-lg text-black leading-snug grow">{type.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Image */}
                <motion.div 
                  className="h-[400px] lg:h-[606px] w-full lg:w-[527px] shrink-0 rounded-[30px] overflow-hidden"
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0OTI0NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Transporte y Distribución" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 mt-20">
               <motion.div 
                  className="flex flex-col"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <span className="text-gray-400 text-lg mb-12 block">Beneficios</span>
                  <div className="mt-8 rounded-[30px] overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzaGVsdmVzfGVufDF8fHx8MTc2NDM3Mjg0OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                       alt="Beneficios Distribución"
                       className="w-full h-full object-cover"
                    />
                  </div>
               </motion.div>

               <motion.div 
                  className="flex flex-col pt-8"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >
                  <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-12 text-black tracking-tight max-w-xl">
                     Optimizamos los tiempos y costos de tu distribución
                  </h3>
                  
                  <ul className="flex flex-col w-full">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0">
                           <div className="mt-1.5 shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                           </div>
                           <span className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                             {item}
                           </span>
                        </li>
                     ))}
                  </ul>
               </motion.div>
            </div>
         </Container>
      </Section>

      <div className="w-full h-[400px] lg:h-[600px] mb-20 relative overflow-hidden">
         <motion.img 
            src="https://images.unsplash.com/photo-1566576912904-60017581a101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWNreSUyMHRydWNrfGVufDF8fHx8MTc2NDM3NDMyOXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Flota de Distribución" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
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
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Gestión de Entregas</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    Gestionamos cada etapa, desde la planificación de rutas hasta el reporte final, asegurando entregas confiables y trazabilidad completa.
                  </p>
               </motion.div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Ciclo de Distribución</span>
                  {processes.map((proc, idx) => (
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

      <ScrollRevealVideo />

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}