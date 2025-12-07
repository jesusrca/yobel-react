import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, MotionValue } from "motion/react";
import { HistoryHero } from "../../components/company/HistoryHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Certificates } from "../../components/landing/Certificates";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { ParallaxCurves } from "../../components/landing/ParallaxCurves";
import { ScrollRevealVideo } from "../../components/landing/ScrollRevealVideo";
import { ProcessItem } from "../../components/company/ProcessItem";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";
import { SolutionsShowcaseTransparent } from "../../components/ui/SolutionsShowcaseTransparent";
import { ScrollRevealString } from "../../components/ui/scroll-reveal-text";
import { ScrollColorTransition } from "../../components/ui/scroll-color-transition";
import { companyContent } from "../../data/companyContent";
import Y from "../../imports/Y";
import svgPaths from "../../imports/svg-5srx0k234k";
import svgPathsProcess from "../../imports/svg-u5y25zzhvz";
import svgPathsIcon from "../../imports/svg-j9zkv27h5w";
import svgPathsLock from "../../imports/svg-p9ws4xe10j";
import svgPathsChart from "../../imports/svg-muxqxnrydh";
import svgPathsArrows from "../../imports/svg-2pvbep99pw";
import svgPathsPeople from "../../imports/svg-sxujtiy446";

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
            <svg className="w-[55%] h-[63%]" viewBox="0 0 71 80" fill="none">
                <g clipPath="url(#clip0_230_33)">
                  <path d={svgPathsLock.p13bbc980} fill="#242D30" />
                </g>
                <defs>
                  <clipPath id="clip0_230_33">
                    <rect fill="white" height="80" width="70.0952" />
                  </clipPath>
                </defs>
            </svg>
        </div>
      );
    case "Datos y visibilidad":
      return (
        <div className="relative w-[127px] h-[127px] flex items-center justify-center">
             <svg className="w-[58%] h-[37%]" viewBox="0 0 92 59" fill="none">
                <g clipPath="url(#clip0_230_59_datos)">
                  <path d={svgPathsChart.p2584fe80} fill="#303024" />
                  <path d={svgPathsChart.p31660d00} fill="#303024" />
                </g>
                <defs>
                  <clipPath id="clip0_230_59_datos">
                    <rect fill="white" height="59" width="92" />
                  </clipPath>
                </defs>
             </svg>
        </div>
      );
    case "Mejora continua":
      return (
        <div className="relative w-[127px] h-[127px] flex items-center justify-center">
             <svg className="w-[55%] h-[47%]" viewBox="0 0 88 75" fill="none">
                <g clipPath="url(#clip0_230_75_mejora)">
                  <path d={svgPathsArrows.p305ed580} fill="#242D30" />
                  <path d={svgPathsArrows.pe93b900} fill="#242D30" />
                </g>
                <defs>
                  <clipPath id="clip0_230_75_mejora">
                    <rect fill="white" height="75.0008" width="88" />
                  </clipPath>
                </defs>
             </svg>
        </div>
      );
    case "Colaboración abierta":
      return (
         <div className="relative w-[127px] h-[127px] flex items-center justify-center">
             <svg className="w-[62%] h-[52%]" viewBox="0 0 100 84" fill="none">
                <g clipPath="url(#clip0_230_104_colaboracion)">
                  <path d={svgPathsPeople.p14d00100} fill="#242D30" />
                  <path d={svgPathsPeople.p20082d80} fill="#242D30" />
                  <path d={svgPathsPeople.pbf38400} fill="#242D30" />
                  <path d={svgPathsPeople.p398ba180} fill="#242D30" />
                </g>
                <defs>
                  <clipPath id="clip0_230_104_colaboracion">
                    <rect fill="white" height="84.0002" width="100" />
                  </clipPath>
                </defs>
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
  const words = text.split(' ');
  
  useEffect(() => {
    return scrollProgress.on("change", (latest) => {
      if (latest < startProgress) {
        setDisplayedWords([]);
      } else if (latest >= startProgress && latest <= endProgress) {
        // Calculate how many words to show
        const progress = (latest - startProgress) / (endProgress - startProgress);
        const wordCount = Math.floor(progress * words.length);
        setDisplayedWords(words.slice(0, wordCount));
      } else {
        setDisplayedWords(words);
      }
    });
  }, [scrollProgress, words, startProgress, endProgress]);

  return (
    <span className={className}>
      {displayedWords.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Format principles for SolutionsShowcase component
  const principlesFormatted = companyContent.principles.map((item, idx) => ({
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
      <ScrollColorTransition>
        {(textColor) => (
          <>
            {/* HERO SECTION */}
            <HistoryHero
              label={companyContent.hero.label}
              title={companyContent.hero.title}
              description={companyContent.hero.description}
            />

            <ParallaxCurves />

            {/* INTRO & PURPOSE - DYNAMIC GRADIENT */}
            <div ref={containerRef} className="relative h-[300vh]">
              <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-transparent">
                  {/* Content */}
                  {companyContent.purposeItems.map((item, idx) => {
                    // Calcular posición Y y opacidad para efecto carrusel vertical - transiciones más lentas
                    const yPosition = useTransform(
                      scrollYProgress,
                      [
                        (idx * 0.33) - 0.15,
                        (idx * 0.33) + 0.05,
                        (idx * 0.33) + 0.28,
                        (idx * 0.33) + 0.38
                      ],
                      [100, 0, 0, -100]
                    );
                    
                    const opacity = useTransform(
                      scrollYProgress,
                      [
                        (idx * 0.33) - 0.1,
                        (idx * 0.33) + 0.05,
                        (idx * 0.33) + 0.28,
                        (idx * 0.33) + 0.38
                      ],
                      [0, 1, 1, 0]
                    );

                    return (
                      <motion.div 
                        key={idx} 
                        style={{ 
                          opacity: opacity,
                          y: yPosition,
                          filter: useTransform(opacity, [0, 1], ["blur(10px)", "blur(0px)"])
                        }}
                        className="absolute inset-0 flex items-center justify-center px-6 md:px-20 z-10"
                      >
                         <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
                            <div className="flex flex-col gap-[32px] items-center justify-center w-full">
                                {/* Yobel Icon */}
                                <motion.div 
                                  className="w-[42px] h-[42px] md:w-[56px] md:h-[56px]"
                                  style={{ color: textColor }}
                                >
                                   <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                                      <motion.path d={svgPathsIcon.p1f4d9200} style={{ fill: textColor }} />
                                   </svg>
                                </motion.div>
                                
                                <motion.p 
                                    className="font-augenblick leading-[48px] not-italic relative shrink-0 text-3xl md:text-[45px] text-center w-full opacity-50"
                                    style={{ color: textColor }}
                                >
                                    {item.title}
                                </motion.p>
                                <div className="max-w-5xl">
                                    <motion.p 
                                      className="font-augenblick leading-[1.4] md:leading-[48px] text-2xl md:text-[45px] text-center"
                                      style={{ color: textColor }}
                                    >
                                      {item.content}
                                    </motion.p>
                                </div>
                            </div>
                         </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>

            {/* VALUE PROPOSITION */}
            <Section className="bg-transparent py-24">
               <Container>
                  <div className="relative" onMouseLeave={() => setHoveredIndex(null)}>
                     {/* Header */}
                     <div className="mb-16">
                        <motion.span 
                          className="text-lg font-medium mb-4 block opacity-50"
                          style={{ color: textColor }}
                        >
                          Propuesta de Valor
                        </motion.span>
                        <motion.h2 
                          className="text-4xl md:text-5xl font-normal leading-tight"
                          style={{ color: textColor }}
                        >
                          Lo que nos hace diferentes en el mercado
                        </motion.h2>
                     </div>

                     {/* Solutions List with Hover Image */}
                     <div className="relative">
                        {companyContent.valueProps.map((item, idx) => {
                           const isHovered = hoveredIndex === idx;
                           
                           return (
                              <motion.div 
                                 key={idx} 
                                 className="relative flex items-center py-6 md:py-0 md:h-[120px] border-b-[1.5px] cursor-pointer group"
                                 style={{ borderColor: textColor }}
                                 onMouseEnter={() => setHoveredIndex(idx)}
                              >
                                 <div className="w-full flex justify-between items-center z-10 relative">
                                    <motion.h4
                                      className={`w-full text-[28px] md:text-[32px] font-normal leading-tight transition-opacity duration-300`}
                                      style={{
                                        color: textColor,
                                        opacity: isHovered ? 1 : 0.4
                                      }}
                                    >
                                       <span className="mr-4">0{idx + 1} /</span>
                                       <span>{item.text}</span>
                                    </motion.h4>
                                 </div>
                              </motion.div>
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

            <Section className="bg-transparent py-32">
               <Container>
                  <div className="flex flex-col items-center justify-center text-center gap-12 max-w-5xl mx-auto">
                     <motion.div 
                       className="relative shrink-0 size-[60px]"
                       style={{ color: textColor }}
                     >
                        <svg className="block size-full" fill="none" viewBox="0 0 60 60">
                           <motion.path 
                             d="M10 49.9985V36.676C10 36.676 40.2009 23.2447 40.2009 17.5775C40.2009 14.0347 10 23.0872 10 23.0872V9.99902H39.2309C51.0219 9.99902 49.9763 16.4831 49.9763 22.979V49.999H30.3629C30.3629 49.999 43.4793 28.1628 40.2009 28.1628C35.4049 28.1628 10 49.9985 10 49.9985Z" 
                             style={{ fill: textColor }}
                           />
                        </svg>
                     </motion.div>
                     
                     <div className="flex flex-col gap-8">
                        <motion.h2
                           className="text-3xl md:text-[45px] leading-tight font-normal max-w-4xl mx-auto opacity-50"
                           style={{ color: textColor }}
                        >
                            {companyContent.peopleText}
                         </motion.h2>
                         <motion.p
                           className="text-3xl md:text-[45px] leading-tight font-normal max-w-5xl mx-auto"
                           style={{ color: textColor }}
                         >
                            {companyContent.peopleSubtitle}
                         </motion.p>
                     </div>

                     <Button variant="default" size="lg" className="mt-4 rounded-full px-8 h-12 text-base">
                        Nuestro código de ética
                     </Button>
                  </div>
               </Container>
            </Section>

          </>
        )}
      </ScrollColorTransition>

      {/* WHITE BACKGROUND SECTIONS - Outside gradient */}
      <div className="bg-white">
        {/* BENTO BOX - People Stats & Values */}
        <Section className="bg-white py-24">
           <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                 {/* Stats Column - Takes 5 columns */}
                 <div 
                    className="lg:col-span-5 rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[400px]"
                    style={{ 
                       borderWidth: '1.5px',
                       borderStyle: 'solid',
                       borderColor: '#000000'
                    }}
                 >
                    <div>
                       <p 
                          className="text-sm md:text-base opacity-50 mb-12"
                          style={{ color: '#000000' }}
                       >
                          Datos destacados
                       </p>
                       
                       <div className="space-y-8">
                          <div>
                             <h3
                                className="text-4xl md:text-5xl lg:text-6xl mb-2"
                                style={{ color: '#000000' }}
                             >
                                {companyContent.stats.collaborators}
                             </h3>
                             <p
                                className="text-lg md:text-xl opacity-70"
                                style={{ color: '#000000' }}
                             >
                                colaboradores en Latinoamérica
                             </p>
                          </div>

                          <div>
                             <h3
                                className="text-4xl md:text-5xl lg:text-6xl mb-2"
                                style={{ color: '#000000' }}
                             >
                                {companyContent.stats.countries}
                             </h3>
                             <p
                                className="text-lg md:text-xl opacity-70"
                                style={{ color: '#000000' }}
                             >
                                países conectados
                             </p>
                          </div>

                          <div>
                             <h3
                                className="text-4xl md:text-5xl lg:text-6xl mb-2"
                                style={{ color: '#000000' }}
                             >
                                {companyContent.stats.leadership}
                             </h3>
                             <p
                                className="text-lg md:text-xl opacity-70"
                                style={{ color: '#000000' }}
                             >
                                liderazgo femenino en áreas clave
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Values Grid - Takes 7 columns */}
                 <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Diversidad e inclusión */}
                    <div 
                       className="rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:col-span-2"
                       style={{ 
                          borderWidth: '1.5px',
                          borderStyle: 'solid',
                          borderColor: '#000000'
                       }}
                    >
                       <div>
                          <h4
                             className="text-2xl md:text-3xl mb-4"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.diversity.title}
                          </h4>
                          <p
                             className="text-lg md:text-xl opacity-70"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.diversity.description}
                          </p>
                       </div>
                    </div>

                    {/* Bienestar */}
                    <div 
                       className="rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
                       style={{ 
                          borderWidth: '1.5px',
                          borderStyle: 'solid',
                          borderColor: '#000000'
                       }}
                    >
                       <div>
                          <h4
                             className="text-2xl md:text-3xl mb-4"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.wellbeing.title}
                          </h4>
                          <p
                             className="text-lg md:text-xl opacity-70"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.wellbeing.description}
                          </p>
                       </div>
                    </div>

                    {/* Seguridad & Salud ocupacional */}
                    <div 
                       className="rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
                       style={{ 
                          borderWidth: '1.5px',
                          borderStyle: 'solid',
                          borderColor: '#000000'
                       }}
                    >
                       <div>
                          <h4
                             className="text-2xl md:text-3xl mb-4"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.safety.title}
                          </h4>
                          <p
                             className="text-lg md:text-xl opacity-70"
                             style={{ color: '#000000' }}
                          >
                             {companyContent.safety.description}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </Container>
        </Section>

        <ScrollRevealVideo />

        <Certificates />
      </div>
    </>
  );
}
