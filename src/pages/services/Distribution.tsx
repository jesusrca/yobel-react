import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";

const heroImage = "https://images.unsplash.com/photo-1641290451977-a427586acf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrcyUyMGxvZ2lzdGljcyUyMGRpc3RyaWJ1dGlvbiUyMGNlbnRlciUyMGZsZWV0fGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

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
      <PageHero
        title="Distribución logística nacional"
        subtitle="Coordinamos entregas con cobertura nacional y trazabilidad total."
        videoSrc="https://circular.ws/yobel/amarillo-desktop.mp4"
        videoColor="bg-black/10"
        videoGradient="bg-gradient-to-t from-[#fff066] via-[#fff066]/60 to-transparent pointer-events-none"
        heroImage={heroImage}
        heroTitle="En Yobel diseñamos e implementamos soluciones de distribución eficientes para que tu cadena de suministro funcione sin interrupciones."
        heroButton={
          <Link to="/contacto">
            <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
                Contactar asesor
            </Button>
          </Link>
        }
      />

      <Section className="bg-white">
         <Container>
            <ParallaxCurves />

            {/* Solutions with Scroll Animation */}
            <SolutionsList 
               solutions={solutions} 
               hoverImage={heroImage} 
               title="Canales de Distribución"
            />

            {/* Transport Types Grid */}
             <div className="mb-20">
               <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-12 text-black tracking-tight">
                  Tipos de transporte
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {transportTypes.map((type, idx) => (
                   <div key={idx} className="bg-gray-50 p-8 rounded-[20px] hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-black rounded-full mb-6 flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <h4 className="text-xl font-medium mb-3 text-black">{type.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
               <div className="flex flex-col">
                  <span className="text-gray-400 text-lg mb-12 block">Beneficios</span>
                  <ParallaxImage 
                     src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzaGVsdmVzfGVufDF8fHx8MTc2NDM3Mjg0OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                     alt="Beneficios Distribución" 
                     yValues={[-200, 0]}
                  />
               </div>

               <div className="flex flex-col pt-8">
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
               </div>
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
               <div className="flex flex-col items-center text-center my-20">
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Gestión de Entregas</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    Gestionamos cada etapa, desde la planificación de rutas hasta el reporte final, asegurando entregas confiables y trazabilidad completa.
                  </p>
               </div>
               
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
         src="https://images.unsplash.com/photo-1651649503984-5b5f3514d6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnQlMjBjYXJnbyUyMHNoaXAlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0MzcyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
         alt="Infraestructura de Distribución"
         height="h-[50vh] md:h-[70vh]"
      />

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}