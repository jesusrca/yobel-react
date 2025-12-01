import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, MotionValue } from "motion/react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Certificates } from "../../components/landing/Certificates";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { ParallaxCurves } from "../../components/landing/ParallaxCurves";
import { VideoScrollSection } from "../../components/company/VideoScrollSection";
import { ProcessItem } from "../../components/company/ProcessItem";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";
import svgPaths from "../../imports/svg-5srx0k234k";
import svgPathsProcess from "../../imports/svg-u5y25zzhvz";
import svgPathsIcon from "../../imports/svg-j9zkv27h5w";

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

// Typewriter component that animates based on scroll progress
const TypewriterText = ({ 
  text, 
  scrollProgress, 
  startProgress, 
  endProgress,
  className = ""
}: { 
  text: string; 
  scrollProgress: MotionValue<number>; 
  startProgress: number; 
  endProgress: number;
  className?: string;
}) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const words = text.split(' ');
  
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const unsubscribe = scrollProgress.on("change", (latest) => {
      // Clear any ongoing animations
      timeouts.forEach(t => clearTimeout(t));
      timeouts = [];
      
      if (latest < startProgress || latest > endProgress) {
        // Outside the range - reset
        setDisplayedWords([]);
        setAnimationKey(prev => prev + 1);
      } else if (latest >= startProgress) {
        // Inside the range - start animation
        setDisplayedWords([]);
        
        // Animate words appearing one by one
        words.forEach((word, idx) => {
          const timeout = setTimeout(() => {
            setDisplayedWords(prev => [...prev, word]);
          }, idx * 80);
          timeouts.push(timeout);
        });
      }
    });
    
    return () => {
      unsubscribe();
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [scrollProgress, startProgress, endProgress, animationKey]);

  return (
    <span className={className} key={animationKey}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block mr-[0.25em] transition-opacity duration-300"
          style={{ opacity: displayedWords.includes(word) ? 1 : 0 }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Format principles for SolutionsShowcase component
  const principlesFormatted = principles.map((item, idx) => ({
    id: `0${idx + 1}`,
    title: item.title,
    fullDesc: item.desc
  }));

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic Background Movement (Gradient moves up)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // Text Colors (Black -> White)
  // Switch to white after the cyan phase (0.5), as background gets darker towards black
  const textColor = useTransform(scrollYProgress, [0, 0.6, 0.7], ["#000000", "#000000", "#FFFFFF"]);
  const subTextColor = useTransform(scrollYProgress, [0, 0.6, 0.7], ["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)", "rgba(255,255,255,0.5)"]);
  const buttonBorderColor = useTransform(scrollYProgress, [0, 0.6, 0.7], ["rgba(0,0,0,1)", "rgba(0,0,0,1)", "rgba(255,255,255,1)"]);
  const buttonTextColor = useTransform(scrollYProgress, [0, 0.6, 0.7], ["#000000", "#000000", "#FFFFFF"]);

  // Parallax Layers - subtle movement to create depth without breaking the gradient flow
  const yLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  // Smooth fade transitions for each text section - NO BLUR
  const opacity0 = useTransform(scrollYProgress, [0, 0.28, 0.33], [1, 1, 0]);

  const opacity1 = useTransform(scrollYProgress, [0.28, 0.33, 0.61, 0.66], [0, 1, 1, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.61, 0.66, 1], [0, 1, 1]);

  const opacities = [opacity0, opacity1, opacity2];

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
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
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

      {/* INTRO & PURPOSE - DYNAMIC GRADIENT */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Content */}
            {purposeItems.map((item, idx) => {
              // Define typewriter progress ranges for each section
              const typewriterRanges = [
                { start: 0.05, end: 0.22 },  // Propósito
                { start: 0.38, end: 0.55 },  // Misión
                { start: 0.71, end: 0.88 }   // Visión
              ];
              
              return (
                <motion.div 
                  key={idx} 
                  style={{ opacity: opacities[idx] }}
                  className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-10"
                >
                   <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
                      <div className="flex flex-col gap-[32px] items-center justify-center w-full">
                          {/* Yobel Icon */}
                          <div className="w-[42px] h-[42px] md:w-[56px] md:h-[56px]">
                             <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                                <path d={svgPathsIcon.p1f4d9200} fill="black" />
                             </svg>
                          </div>
                          
                          <p className="font-augenblick leading-[48px] not-italic relative shrink-0 text-3xl md:text-[45px] text-center w-full text-gray-500">
                              <TypewriterText 
                                text={item.title}
                                scrollProgress={scrollYProgress}
                                startProgress={typewriterRanges[idx].start}
                                endProgress={typewriterRanges[idx].end}
                              />
                          </p>
                          <div className="max-w-5xl">
                              <p className="font-augenblick leading-[1.4] md:leading-[48px] text-2xl md:text-[45px] text-center text-black">
                                  <TypewriterText 
                                    text={item.content}
                                    scrollProgress={scrollYProgress}
                                    startProgress={typewriterRanges[idx].start}
                                    endProgress={typewriterRanges[idx].end}
                                  />
                              </p>
                          </div>
                      </div>
                   </div>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* VALUE PROPOSITION */}
      <Section className="bg-white py-24">
         <Container>
            <div className="relative" onMouseLeave={() => setHoveredIndex(null)}>
               {/* Header */}
               <div className="mb-16">
                  <span className="text-gray-400 text-lg font-medium mb-4 block">Propuesta de Valor</span>
                  <h2 className="text-4xl md:text-5xl font-normal leading-tight text-black">
                    Lo que nos hace diferentes en el mercado
                  </h2>
               </div>

               {/* Solutions List with Hover Image */}
               <div className="relative">
                  {valueProps.map((item, idx) => {
                     const isHovered = hoveredIndex === idx;
                     
                     return (
                        <div 
                           key={idx} 
                           className="relative flex items-center py-6 md:py-0 md:h-[120px] border-b-[1.5px] border-gray-200 cursor-pointer group"
                           onMouseEnter={() => setHoveredIndex(idx)}
                        >
                           <div className="w-full flex justify-between items-center z-10 relative">
                              <h4 className={`w-full text-[28px] md:text-[32px] font-normal leading-tight transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-400'}`}>
                                 <span className="mr-4">0{idx + 1} /</span> 
                                 <span className={isHovered ? 'text-black' : 'text-gray-600'}>{item}</span>
                              </h4>
                           </div>
                        </div>
                     );
                  })}

                  {/* Floating Image with Animation */}
                  <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
                     <AnimatePresence>
                        {hoveredIndex !== null && (
                           <motion.div 
                              className="absolute top-0 right-0 w-[450px] h-[280px]"
                              initial={{ opacity: 0, y: (hoveredIndex * 120) - 60 }}
                              animate={{ opacity: 1, y: (hoveredIndex * 120) - 60 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                           >
                              <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                              >
                                 <img src={valueImage} className="w-full h-full object-cover" alt="Value Proposition" />
                              </motion.div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </Container>
      </Section>

      {/* PRINCIPLES */}
      <SolutionsShowcase 
        label="Cultura"
        title="Principios que guían nuestras acciones"
        solutions={principlesFormatted}
        imageUrl={diversityImage}
        imageAlt="Equipo diverso Yobel"
      />

      {/* WAYS OF WORKING */}
      <Section className="bg-white">
        <Container>
          <div className="px-[5%] md:px-[50px] py-[60px] md:py-[120px]">
             <div className="mb-20 flex flex-col md:flex-row justify-between items-start gap-8">
                <h2 className="text-4xl md:text-5xl font-normal max-w-md text-left leading-tight">Nuestra forma de trabajar</h2>
                <p className="text-xl text-gray-500 font-light max-w-md text-left md:text-right pt-2">
                  Integramos estándares internacionales con metodologías giles para garantizar resultados.
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
                        <ProcessItem 
                            icon={<ProcessIcon type={item.title} index={idx} />}
                            title={item.title}
                            description={item.desc}
                        />
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