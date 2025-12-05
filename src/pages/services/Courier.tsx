import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Phrase } from "../../components/landing/Phrase";
import { FullWidthImage } from "../../components/ui/FullWidthImage";
import { Industries } from "../../components/landing/Industries";
import { FAQ } from "../../components/landing/FAQ";

const heroImage = "https://images.unsplash.com/photo-1607130232670-52123ba5be5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBleHByZXNzJTIwcGFja2FnZSUyMG1vdG9yY3ljbGUlMjBjb3VyaWVyfGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

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
  const { selectedCountry } = useCountry();
  
  const benefits = [
    "Alta confiabilidad: Cumplimiento OTIF (On Time, In Full) del 99.6%.",
    `Red logística extendida en todo ${selectedCountry}.`,
    "Atención personalizada y soporte postventa dedicado."
  ];

  return (
    <>
      <PageHero
        title="Courier y última milla"
        subtitle="Servicios de courier con trazabilidad 24/7."
        videoSrc="https://circular.ws/yobel/amarillo-desktop.mp4"
        videoColor="bg-black/10"
        videoGradient="bg-gradient-to-t from-[#fff066] via-[#fff066]/60 to-transparent pointer-events-none"
        heroImage={heroImage}
        heroText="En Yobel ofrecemos servicios de courier rápido, confiable y con cobertura nacional, diseñados para garantizar la seguridad y puntualidad de cada entrega."
        buttonText="Contactar asesor"
        buttonLink="/contacto"
        buttonClass="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit"
      />

      <Section className="bg-white">
         <Container>
            {/* Processes */}
            <div>
               <motion.div 
                  className="flex flex-col items-center text-center my-20"
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
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Soluciones de Courier</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    Gestionamos cada etapa del proceso de entrega, desde el recojo hasta la confirmación final, con seguimiento en tiempo real.
                  </p>
               </motion.div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Ciclo de Entrega</span>
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