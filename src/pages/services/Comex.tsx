import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";
import { Phrase } from "../../components/landing/Phrase";
import { FullWidthImage } from "../../components/ui/FullWidthImage";
import { ParallaxCurves } from "../../components/landing/ParallaxCurves";
import svgPaths from "../../imports/svg-5srx0k234k";
import { SolutionsList } from "../../components/landing/SolutionsList";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { ScrollRevealVideo } from "../../components/landing/ScrollRevealVideo";
import comexImage from "figma:asset/e608a17e3bf93a1d2e8a4b868a2f12aa32b3854b.png";
import hoverImage from "figma:asset/4288be58a4ef94beb9d8a69085417550e080ee9b.png";
import truckImage from "figma:asset/581b279261d7ceb7941417797fbd59c23f768b5e.png";
import yellowTruck from "figma:asset/b94e87eb574754035d4788fe21930672651cb6ac.png";


const heroImage = "https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHNoaXAlMjBwb3J0fGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  {
    title: "Gestión de Aduanas",
    desc: "Nos encargamos de todos los trámites aduaneros para que tu mercancía cumpla con la normativa sin retrasos ni complicaciones."
  },
  {
    title: "Transporte desde el Puerto",
    desc: "Coordinamos el traslado ágil y seguro de tus mercancías desde puertos o aeropuertos hasta el destino que necesites."
  },
  {
    title: "Transporte Internacional",
    desc: "Aseguramos el movimiento de tus bienes a nivel global con aliados estratégicos que garantizan seguridad y cumplimiento."
  },
  {
    title: "Nacionalización",
    desc: "Facilitamos la legalización de tus productos importados, evitando demoras y optimizando tus operaciones internacionales."
  }
];

const benefits = [
  "Seguimiento en tiempo real de tus importaciones y exportaciones con trazabilidad 24/7.",
  "Menores costos operativos gracias a una logística internacional integrada y eficiente.",
  "Atención personalizada de un equipo experto en comercio exterior.",
  "Trámites y documentación simplificados, sin demoras ni complicaciones."
];

const processes = [
  { title: "Análisis y Planificación", desc: "Diseñamos la estrategia de operación según el tipo de carga y tus necesidades específicas." },
  { title: "Gestión Documental", desc: "Nos ocupamos de la documentación y los requisitos aduaneros para evitar retrasos." },
  { title: "Transporte", desc: "Coordinamos el movimiento de tu carga a nivel global y nacional con aliados estratégicos." },
  { title: "Entrega Final", desc: "Garantizamos la llegada de tus productos con trazabilidad completa y cumplimiento de tiempos." }
];

const faqs = [
  { question: "¿Yobel Perú gestiona todo el proceso de importación?", answer: "Sí, nos encargamos desde la llegada de la mercancía al puerto hasta su entrega final, incluyendo trámites aduaneros, transporte y nacionalización." },
  { question: "¿Yobel puede gestionar cargas con requisitos sanitarios o peligrosos?", answer: "Sí, contamos con experiencia en la manipulación de mercancías reguladas y coordinación con autoridades sanitarias y aduaneras." },
  { question: "¿Ofrecen asesoría en normativa de exportación e importación?", answer: "Sí, brindamos soporte técnico y documental para cumplir con los requisitos legales y optimizar los tiempos de despacho." },
  { question: "¿Puedo tener visibilidad del estado de mi carga en tránsito?", answer: "Sí, ofrecemos trazabilidad total con reportes en línea y actualizaciones automáticas durante cada fase del proceso." }
];

export function Comex() {
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
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-[#fff066] to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black">Comercio Exterior</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  Importación, exportación y gestión aduanera
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  Soluciones de importación y exportación rápidas, seguras y a tu medida.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
         <Container>
            <div className="max-w-[1200px] mx-auto my-20 text-center">
              <div className="mb-8 flex justify-center">
                 <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
              </div>

               <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] mx-auto tracking-tight text-black">
                 En YOBEL convertimos la complejidad del comercio exterior en procesos simples y eficientes. Gestionamos de principio a fin tus importaciones y exportaciones, asegurando rapidez, seguridad y ahorro en cada operación.
               </h2>

               <div className="flex justify-center">
                   <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                     Optimiza tu Comercio Exterior
                   </Button>
               </div>
            </div>
         </Container>
      </Section>

      <ParallaxCurves />

      <Section className="bg-white">
         <Container>
            {/* Solutions with Scroll Animation */}
            <SolutionsList 
               solutions={solutions} 
               hoverImage={hoverImage} 
               title="Soluciones"
            >
               <div className="mt-12">
                 <Link to="/tarifas">
                   <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                     Ver tarifas
                   </Button>
                 </Link>
               </div>
            </SolutionsList>

            {/* Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20">
               <div className="flex flex-col">
                  <span className="text-gray-400 text-lg mb-20 block">Beneficios</span>
                  <ParallaxImage 
                     src={yellowTruck} 
                     alt="Logística Yobel" 
                     yValues={[-200, 0]}
                  />
               </div>

               <div className="flex flex-col pt-0">
                  <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-20 text-black tracking-tight max-w-xl">
                     Nos enfocamos en optimizar tiempos y costos en cada operación de comercio exterior.
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
               </div>
            </div>
         </Container>
      </Section>

      <div className="w-full h-[400px] lg:h-[600px] mb-20 relative overflow-hidden">
         <motion.img 
            src="https://images.unsplash.com/photo-1631388167556-55a285cc86a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGxvZ2lzdGljcyUyMGNhcmdvJTIwY29udGFpbmVyJTIwdGVybWluYWwlMjBhZXJpYWwlMjB2aWV3JTIwd2lkZXxlbnwxfHx8fDE3NjQzNjg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Global Logistics" 
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
               <div className="flex flex-col items-center text-center mb-20">
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Llevamos tu operación al siguiente nivel</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">Nuestros servicios de comercio exterior cubren todo el ciclo logístico, asegurando eficiencia, cumplimiento y trazabilidad en cada etapa.</p>
               </div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Procesos</span>
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
                           <div className="w-full lg:w-1/2 flex flex-col gap-6">
                              <h3 className="text-2xl md:text-[26px] text-black font-augenblick text-center lg:text-left">{proc.title}</h3>
                              <div className="pl-0 md:pl-12 lg:pl-20">
                                 <p className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed text-center lg:text-left">
                                    {proc.desc}
                                 </p>
                              </div>
                           </div>
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
