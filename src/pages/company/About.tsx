import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Certificates } from "../../components/landing/Certificates";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { ParallaxCurves } from "../../components/landing/ParallaxCurves";
import { VideoScrollSection } from "../../components/company/VideoScrollSection";
import svgPaths from "../../imports/svg-5srx0k234k";
import svgPathsProcess from "../../imports/svg-u5y25zzhvz";

const MetallicGradient = ({ id, delay }: { id: string; delay: number }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#000000" />
      <stop offset="30%" stopColor="#000000" />
      <stop offset="50%" stopColor="#59C1E6" />
      <stop offset="70%" stopColor="#000000" />
      <stop offset="100%" stopColor="#000000" />
      <animate attributeName="x1" from="-100%" to="100%" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
      <animate attributeName="x2" from="0%" to="200%" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
    </linearGradient>
  </defs>
);

const ProcessIcon = ({ type, index = 0 }: { type: string; index?: number }) => {
  const gradientId = `metallic-shimmer-${index}`;
  const strokeUrl = `url(#${gradientId})`;
  const strokeBlack = "black";
  const width = 4.5;
  const delay = index * 1.2; // Different timing for each icon

  switch (type) {
    case "Seguridad y calidad":
      return (
        <div className="relative w-[127px] h-[127px] flex items-center justify-center">
            <svg className="w-[75%] h-[87%]" viewBox="0 0 100 111" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p1471ab00} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p3dea9000} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
      );
    case "Datos y visibilidad":
      return (
        <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <g opacity="0.7">
                    <path d={svgPathsProcess.p1876f440} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M89.9583 31.75H121.708V63.5" stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </g>
             </svg>
        </div>
      );
    case "Mejora continua":
      return (
        <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p32899600} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p2fb71e11} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
        </div>
      );
    case "Colaboración abierta":
      return (
         <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p6c78880} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p14d48600} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p24192100} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p204f1f00} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
         </div>
      );
    default:
      return null;
  }
};

// Images
const diversityImage = "https://images.unsplash.com/photo-1758691737487-29b4fae83e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNpdHklMjB0ZWFtJTIwaGFwcHklMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY0MTkzNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const valueImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&q=80&w=1080&auto=format&fit=crop";

export function About() {
  const purposeItems = [
    {
      title: "Propósito",
      content: "Nos movemos para crear y entregar soluciones que impulsen el crecimiento de nuestros aliados, convencidos de que pensar con visión, transformar con acción y lograr con excelencia es la manera de construir confianza."
    },
    {
      title: "Misión",
      content: "Crear y entregar soluciones integrales de logística y manufactura que respondan a necesidades reales, combinando innovación, eficiencia y personalización para generar experiencias memorables."
    },
    {
      title: "Visión",
      content: "Ser la empresa más confiable e innovadora de la región en soluciones de logística y manufactura, ampliando nuestra cobertura, integrando nuevas tecnologías y liderando la sostenibilidad."
    }
  ];

  const valueProps = [
    "Gestión integral logística",
    "Cobertura regional eficiente",
    "Flexibilidad operativa total",
    "Tecnología y trazabilidad avanzada",
    "Optimización de costos",
    "Mejora de experiencia cliente"
  ];

  const principles = [
    { title: "Simplicidad operativa", desc: "Procesos claros y eficientes que reducen tiempos y costos." },
    { title: "Seguridad primero", desc: "Protegemos a las personas y cuidamos tu operación." },
    { title: "Integridad y ética", desc: "Hacemos lo correcto, incluso cuando nadie nos ve." },
    { title: "Orientación al cliente", desc: "Escuchamos, medimos y mejoramos para cumplir siempre con OTIF." },
    { title: "Trabajo en equipo", desc: "Sumamos el talento de 9 países para lograr resultados excepcionales." },
    { title: "Aprendizaje continuo", desc: "Formamos a nuestros colaboradores para superar los estándares." }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]);
  const blur0 = useTransform(scrollYProgress, [0, 0.3, 0.35], ["blur(0px)", "blur(0px)", "blur(20px)"]);

  const opacity1 = useTransform(scrollYProgress, [0.3, 0.35, 0.65, 0.7], [0, 1, 1, 0]);
  const blur1 = useTransform(scrollYProgress, [0.3, 0.35, 0.65, 0.7], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);

  const opacity2 = useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]);
  const blur2 = useTransform(scrollYProgress, [0.65, 0.7, 1], ["blur(20px)", "blur(0px)", "blur(0px)"]);

  const opacities = [opacity0, opacity1, opacity2];
  const blurs = [blur0, blur1, blur2];

  return (
    <>
      {/* HERO SECTION WITH VIDEO */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://circular.ws/yobel/gris-desktop.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#31CDFF] via-[#31CDFF]/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-medium">Sobre Nosotros</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[800px] tracking-tight">
                  Con más de 50 años de experiencia en Latinoamérica
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black/80 max-w-[400px] pt-2 font-light">
                   En Yobel impulsamos tu negocio con soluciones de logística y manufactura que integran innovación, eficiencia y cercanía, generando valor real en cada etapa de la cadena de suministro.
                </p>
             </div>
          </div>
        </div>
      </div>

      <ParallaxCurves />

      {/* INTRO & PURPOSE */}
      <div ref={containerRef} className="relative h-[300vh] bg-[#090909]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {purposeItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                style={{ opacity: opacities[idx], filter: blurs[idx] }}
                className="absolute inset-0 flex items-center justify-center px-6 md:px-20"
              >
                 <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
                    <div className="flex flex-col gap-[32px] items-center justify-center w-full">
                        <p className="font-augenblick leading-[48px] not-italic relative shrink-0 text-3xl md:text-[45px] text-[rgba(255,255,255,0.5)] text-center w-full">
                            {item.title}
                        </p>
                        <div className="max-w-5xl">
                            <p className="font-augenblick leading-[1.4] md:leading-[48px] text-2xl md:text-[45px] text-center text-white">
                                {item.content}
                            </p>
                        </div>
                        {idx === 2 && (
                            <div className="mt-12">
                               <Link to="/empresa/historia">
                                 <Button className="font-augenblick bg-transparent border-[1.5px] border-white text-white px-10 py-6 rounded-full text-xl hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                   Nuestra Historia
                                 </Button>
                               </Link>
                            </div>
                        )}
                    </div>
                 </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* VALUE PROPOSITION */}
      <Section className="bg-white">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="h-[600px] rounded-[40px] overflow-hidden relative order-2 lg:order-1">
                   <ParallaxImage 
                      src={valueImage} 
                      alt="Value Proposition" 
                      yValues={[-50, 50]}
                   />
                   <div className="absolute inset-0 bg-black/10" />
               </div>
               <div className="order-1 lg:order-2">
                  <span className="text-gray-400 text-lg font-medium mb-6 block">Propuesta de Valor</span>
                  <h2 className="text-4xl md:text-5xl font-normal mb-10 leading-tight text-black">
                    Lo que nos hace diferentes en el mercado
                  </h2>
                  <ul className="space-y-6">
                     {valueProps.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-5 pb-6 border-b border-gray-100 last:border-0">
                           <div className="w-2 h-2 bg-black rounded-full shrink-0" />
                           <span className="text-xl md:text-2xl font-light text-gray-800">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </Section>

      {/* PRINCIPLES */}
      <Section className="bg-gray-50">
         <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <h2 className="text-4xl md:text-5xl font-normal max-w-xl">Principios que guían nuestras acciones</h2>
                <p className="text-lg text-gray-500 max-w-md text-right hidden md:block">
                   Valores fundamentales que definen nuestra cultura y forma de operar en cada país.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {principles.map((item, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-[20px] hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="w-10 h-1 bg-[#fff066] mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </Container>
      </Section>

      {/* WAYS OF WORKING */}
      <Section className="bg-white">
        <Container>
          <div className="px-[5%] md:px-[50px] py-[60px] md:py-[120px]">
             <div className="mb-20 flex flex-col md:flex-row justify-between items-start gap-8">
                <h2 className="text-4xl md:text-5xl font-normal max-w-md text-left leading-tight">Nuestra forma de trabajar</h2>
                <p className="text-xl text-gray-500 font-light max-w-md text-left md:text-right pt-2">
                  Integramos estándares internacionales con metodologías ágiles para garantizar resultados.
                </p>
             </div>
             
             <div className="flex flex-col w-full">
                 {[
                   { title: "Seguridad y calidad", desc: "Cumplimos altos estándares internacionales en gestión, seguridad y control de procesos, garantizando operaciones confiables en toda la cadena de suministro." },
                   { title: "Datos y visibilidad", desc: "Monitoreo en tiempo real con sistemas WMS y TMS que ofrecen trazabilidad total y análisis para decisiones ágiles y precisas." },
                   { title: "Mejora continua", desc: "Aplicamos metodologías Lean y Kaizen para optimizar procesos, reducir tiempos y elevar la eficiencia operativa cada día." },
                   { title: "Colaboración abierta", desc: "Trabajamos junto a nuestros clientes y equipos multidisciplinarios para diseñar soluciones logísticas personalizadas y sostenibles." }
                 ].map((item, idx) => (
                    <React.Fragment key={idx}>
                        <div className="flex flex-col lg:flex-row gap-[60px] items-start py-12">
                            <div className="shrink-0">
                                <ProcessIcon type={item.title} index={idx} />
                            </div>
                            <div className="flex flex-col items-start gap-[20px] max-w-3xl w-full">
                                <h3 className="text-[36px] font-augenblick leading-[32px] text-black">{item.title}</h3>
                                <p className="text-[22px] font-augenblick leading-[24px] text-black max-w-2xl">{item.desc}</p>
                            </div>
                        </div>
                        {idx < 3 && (
                            <div className="w-full h-[1px] bg-[#494949]/50" />
                        )}
                    </React.Fragment>
                 ))}
             </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-32">
         <Container>
            <div className="flex flex-col items-center justify-center text-center gap-12 max-w-5xl mx-auto">
               <div className="relative shrink-0 size-[60px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                     <path d="M10 49.9985V36.676C10 36.676 40.2009 23.2447 40.2009 17.5775C40.2009 14.0347 10 23.0872 10 23.0872V9.99902H39.2309C51.0219 9.99902 49.9763 16.4831 49.9763 22.979V49.999H30.3629C30.3629 49.999 43.4793 28.1628 40.2009 28.1628C35.4049 28.1628 10 49.9985 10 49.9985Z" fill="black" />
                  </svg>
               </div>
               
               <div className="flex flex-col gap-8">
                  <h2 className="text-3xl md:text-[45px] leading-tight text-gray-400 font-normal max-w-4xl mx-auto">
                     Personas y diversidad que nos mueven
                  </h2>
                  <p className="text-3xl md:text-[45px] leading-tight text-black font-normal max-w-5xl mx-auto">
                     En Yobel promovemos inclusión, crecimiento y bienestar. Apostamos por el desarrollo continuo y las oportunidades equitativas, porque cuando nuestra gente crece, las cadenas de suministro funcionan mejor.
                  </p>
               </div>

               <Button variant="default" size="lg" className="mt-4 rounded-full px-8 h-12 text-base">
                  Nuestro código de ética
               </Button>
            </div>
         </Container>
      </Section>

      <VideoScrollSection />



      <Certificates />
    </>
  );
}
