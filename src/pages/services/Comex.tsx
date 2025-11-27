import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";
import svgPaths from "../../imports/svg-5srx0k234k";
import comexImage from "figma:asset/e608a17e3bf93a1d2e8a4b868a2f12aa32b3854b.png";


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
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 85%", "start 35%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <>
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <iframe 
            src="https://iframe.mediadelivery.net/embed/512396/5aef2478-ecdc-4449-ad18-7f9d750a485b?autoplay=true&loop=true&muted=true&preload=true"
            className="absolute inset-0 h-full w-full scale-125 object-cover lg:scale-100"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ border: "none", pointerEvents: "none" }}
          />
          <div className="absolute inset-0 bg-[#fff066]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-white" />
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
            <div className="max-w-[1200px] mx-auto mb-24">
              <div className="mb-8">
                 <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
              </div>

               <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal mb-16 max-w-[1000px] tracking-tight text-black">
                 En YOBEL convertimos la complejidad del comercio exterior en procesos simples y eficientes. Gestionamos de principio a fin tus importaciones y exportaciones, asegurando rapidez, seguridad y ahorro en cada operación.
               </h2>

               <div className="flex flex-col md:flex-row items-end justify-between gap-10">
                 <div className="flex flex-col gap-4 md:pb-8">
                   <p className="text-lg text-gray-900">¿Deseas impulsar tu negocio?</p>
                   <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                     Optimiza tu Comercio Exterior
                   </Button>
                 </div>

                 <div className="w-full md:w-auto">
                    <img 
                        src={comexImage} 
                        alt="Logística" 
                        className="rounded-[20px] w-full md:max-w-[500px] h-auto object-cover"
                    />
                 </div>
               </div>
            </div>

            {/* Solutions with Scroll Animation */}
            <motion.div 
              ref={scrollRef}
              style={{ opacity, y }}
              className="mb-24"
            >
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Coordinamos todo el proceso</h3>
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Desde el transporte hasta la nacionalización, integramos servicios logísticos que reducen tiempos y costos en tus operaciones de comercio exterior.</p>
               
               <div className="flex flex-col">
                  {solutions.map((sol, idx) => {
                     // Colors for the bottom border of each item
                     const borderColors = ["border-[#FFF066]", "border-[#C1F0C9]", "border-[#BBE6F5]", "border-[#8CD3F5]"];
                     const borderColor = borderColors[idx % borderColors.length];
                     
                     return (
                        <div key={idx} className={`flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b-[1.5px] ${borderColor}`}>
                           <h4 className="text-[28px] md:text-[32px] text-black font-normal mb-4 md:mb-0 w-full md:w-[35%] leading-tight">
                              {sol.title}
                           </h4>
                           <p className="text-black/80 text-base max-w-md mb-4 md:mb-0 md:w-[40%] leading-relaxed">
                              {sol.desc}
                           </p>
                           <button className="text-black underline underline-offset-4 text-sm font-medium hover:text-gray-600 transition-colors shrink-0">
                              Explorar modalidad
                           </button>
                        </div>
                     );
                  })}
               </div>
            </motion.div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-4 leading-tight">Nos enfocamos en optimizar tiempos y costos</h3>
               </div>
               <div className="lg:w-2/3">
                  <ul className="space-y-6">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                           <span className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Processes */}
            <div>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Llevamos tu operación al siguiente nivel</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Nuestros servicios de comercio exterior cubren todo el ciclo logístico, asegurando eficiencia, cumplimiento y trazabilidad en cada etapa.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {/* Connecting line for desktop */}
                  <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-gray-200 -z-10" />
                  
                  {processes.map((proc, idx) => (
                     <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[30px] relative hover:border-gray-300 transition-colors">
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-8 mx-auto lg:mx-0 shadow-md">
                           {idx + 1}
                        </div>
                        <h4 className="text-xl font-medium mb-4 text-center lg:text-left">{proc.title}</h4>
                        <p className="text-gray-600 text-center lg:text-left leading-relaxed">{proc.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}
