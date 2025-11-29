import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
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
import courierBenefitsImage from "figma:asset/4603c5dfabc6b3e8854844680539663624b1d48a.png";

const heroImage = "https://images.unsplash.com/photo-1607130232670-52123ba5be5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBleHByZXNzJTIwcGFja2FnZSUyMG1vdG9yY3ljbGUlMjBjb3VyaWVyfGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  {
    title: "Entrega nacional",
    desc: "Puerta a puerta para documentos y paquetes."
  },
  {
    title: "Logística inversa",
    desc: "Recojo y retorno seguro de mercancía."
  },
  {
    title: "Puntos de atención",
    desc: "Red nacional para mayor conveniencia."
  }
];

const features = [
  { title: "Visibilidad total", desc: "Seguimiento en tiempo real vía web y app móvil." },
  { title: "Notificaciones automáticas", desc: "Alertas por SMS, correo o WhatsApp." },
  { title: "Flexibilidad operativa", desc: "Capacidad de respuesta para entregas urgentes." },
  { title: "Postventa dedicada", desc: "Soporte inmediato para resolver incidencias." }
];

const benefits = [
  "Alta confiabilidad: Cumplimiento OTIF (On Time, In Full) del 99.6%.",
  "Tecnología avanzada: Seguimiento en tiempo real 24/7.",
  "Equipo especializado: Entregas críticas y sensibles.",
  "Cobertura total: Llegamos a zonas urbanas y rurales en todo el Perú."
];

const processes = [
  { title: "Planificación de rutas", desc: "Optimización de envíos y recursos según la demanda." },
  { title: "Picking", desc: "Preparación y verificación de pedidos." },
  { title: "Transporte", desc: "Movilización segura con seguimiento en tiempo real." },
  { title: "Entrega confirmada", desc: "Registro digital al momento de la recepción." },
  { title: "Postventa", desc: "Gestión de incidencias y soporte continuo." }
];

const faqs = [
  { question: "¿Puedo rastrear mis envíos en tiempo real?", answer: "Sí, contamos con plataforma web y aplicación móvil que permiten seguimiento 24/7 con actualizaciones automáticas y notificaciones multicanal." },
  { question: "¿Puedo enviar paquetes de diferentes tamaños o pesos?", answer: "Sí, gestionamos envíos desde documentos hasta cargas medianas o voluminosas con el mismo nivel de eficiencia y trazabilidad." },
  { question: "¿Tienen servicio de recojo el mismo día?", answer: "Sí, según la zona y disponibilidad, ofrecemos recojo express y entregas same day o next day." },
  { question: "¿Ofrecen cobertura internacional?", answer: "Sí, coordinamos envíos internacionales mediante aliados estratégicos y nuestra red regional Yobel." }
];

export function Courier() {
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
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#fff066] via-[#fff066]/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black">Courier Express</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  Entregas rápidas y eficientes
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  Puerta a puerta con trazabilidad 24/7 y cumplimiento OTIF del 99.6%.
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
                 En Yobel ofrecemos servicios de courier rápido, confiable y con cobertura nacional, diseñados para garantizar la seguridad y puntualidad de cada entrega.
               </h2>

               <div className="flex justify-center">
                   <Link to="/contacto">
                    <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                        Contactar asesor
                    </Button>
                   </Link>
               </div>
            </div>

            <ParallaxCurves />

            {/* Solutions with Scroll Animation */}
            <SolutionsList 
               solutions={solutions} 
               hoverImage={heroImage} 
               title="Soluciones de Entrega"
            />

             {/* Features Grid */}
             <div className="mb-20">
               <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-12 text-black tracking-tight">
                  Características del servicio
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {features.map((feat, idx) => (
                   <div key={idx} className="bg-gray-50 p-8 rounded-[20px] hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-black rounded-full mb-6 flex items-center justify-center text-white font-bold">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium mb-3 text-black">{feat.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
               <div className="flex flex-col">
                  <span className="text-gray-400 text-lg mb-12 block">Beneficios</span>
                  <ParallaxImage 
                     src={courierBenefitsImage} 
                     alt="Beneficios Courier" 
                     yValues={[-200, 0]}
                  />
               </div>

               <div className="flex flex-col pt-8">
                  <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-12 text-black tracking-tight max-w-xl">
                     Nos enfocamos en optimizar tiempos y costos
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
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzaGVsdmVzfGVufDF8fHx8MTc2NDM3Mjg0OXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Courier Logistics" 
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
               <div className="flex flex-col items-center text-center my-20">
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Ciclo de Entrega</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    Gestionamos todo el ciclo de entrega con trazabilidad digital, desde la recolección hasta la puerta de tu cliente.
                  </p>
               </div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Etapas</span>
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

      <FullWidthImage 
         src="https://images.unsplash.com/photo-1625258671008-804485b306e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVja3xlbnwxfHx8fDE3NjQzNzM4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
         alt="Flota Courier"
         height="h-[50vh] md:h-[70vh]"
      />

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}
