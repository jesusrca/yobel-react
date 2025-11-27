import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, useInView, animate } from "motion/react";
import { Button } from "../ui/button";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

const stats = [
  {
    number: "+50",
    title: "Años de experiencia real",
    description: "Creciendo con nuestros socios y evolucionando cada cadena de suministro."
  },
  {
    number: "+8",
    title: "Países en Latinoamérica",
    description: "Conectamos la región para que tu negocio crezca con una red logística integrada y eficiente."
  },
  {
    number: "+300K",
    title: "Profesionales",
    description: "Especializados en logística y unidos para hacer que cada operación funcione con excelencia."
  },
  {
    number: "+4",
    title: "Principios de Sostenibilidad",
    description: "Guiando nuestras operaciones para generar un impacto positivo en las comunidades y en el planeta."
  }
];

const SnakeSegment = ({ 
  type, 
  progress, 
  className, 
  children 
}: { 
  type: 'start' | 'left' | 'right', 
  progress: MotionValue<number>,
  className?: string,
  children: React.ReactNode 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  
  // Hook calls must be at the top level
  useEffect(() => {
    const updateSize = () => {
        if (containerRef.current) {
            setDimensions({ 
                w: containerRef.current.offsetWidth, 
                h: containerRef.current.offsetHeight 
            });
        }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  const r = 40; // Smooth corner radius
  const o = 0.75; // Precise offset for 1.5px stroke (center of line)
  const { w, h } = dimensions;
  
  let d = "";
  if (w > 0 && h > 0) {
      if (type === 'start') {
        // Starts from Top-Left edge (straight horizontal), goes right, down right side, exits bottom-left
        d = [
            `M 0 ${o}`,                // Start exactly at Left edge
            `L ${w-r} ${o}`,           // Top straight line
            `Q ${w-o} ${o} ${w-o} ${r}`, // Curve Top-Right
            `L ${w-o} ${h-r}`,         // Right straight line
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, // Curve Bottom-Right
            `L ${o+r} ${h-o}`,         // Bottom straight line
            `Q ${o} ${h-o} ${o} ${h}`   // Curve Bottom-Left (Exit Down)
        ].join(' ');
      } else if (type === 'left') {
         // Starts top-left, goes down left side, exits bottom-right
         d = [
            `M ${o} -1`,               // Connect from prev BL (slight overlap)
            `L ${o} ${h-r}`,           // Left straight line
            `Q ${o} ${h-o} ${r} ${h-o}`, // Curve Bottom-Left
            `L ${w-r} ${h-o}`,         // Bottom straight line
            `Q ${w-o} ${h-o} ${w-o} ${h}` // Curve Bottom-Right (Exit Down)
         ].join(' ');
      } else if (type === 'right') {
         // Starts top-right, goes down right side, exits bottom-left
         d = [
            `M ${w-o} -1`,             // Connect from prev BR (slight overlap)
            `L ${w-o} ${h-r}`,         // Right straight line
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, // Curve Bottom-Right
            `L ${o+r} ${h-o}`,         // Bottom straight line
            `Q ${o} ${h-o} ${o} ${h}`   // Curve Bottom-Left (Exit Down)
         ].join(' ');
      }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
       {/* Static Path - Continuous Line */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
           {d && (
             <path 
               d={d} 
               stroke="#E5E7EB" 
               strokeWidth="1.5" 
               fill="none" 
               strokeLinecap="round" 
               strokeLinejoin="round"
             />
           )}
       </svg>
       
       {/* Animated Path - Filling Line */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
           {d && (
               <motion.path 
                 d={d} 
                 stroke="#090909" 
                 strokeOpacity="0.8"
                 strokeWidth="1.5" 
                 fill="none"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 style={{ 
                     pathLength: progress
                 }}
               />
           )}
       </svg>

       <div className="relative z-20">
           {children}
       </div>
    </div>
  );
};

const ScrollRevealText = ({ text, className }: { text: string; className?: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = text.split(" ");
  const totalChars = words.reduce((acc, word) => acc + word.length, 0);
  const step = 1 / (totalChars + 3);
  let charIndex = 0;

  return (
    <p ref={element} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em] whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const start = charIndex * step;
            const end = (charIndex + 1) * step;
            charIndex++;
            return (
              <Char key={charIdx} range={[start, end]} progress={scrollYProgress}>
                {char}
              </Char>
            );
          })}
        </span>
      ))}
    </p>
  );
};

const Char = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const step = range[1] - range[0];
  // Extended color duration: color remains active for 5x the character step duration before turning black
  const colorEnd = range[1] + (step * 5);
  const color = useTransform(progress, 
    [range[0], range[1], colorEnd], 
    ["#31CDFF", "#31CDFF", "#000000"]
  );
  
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-[0.2]">{children}</span>
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

const AnimatedNumber = ({ value, className }: { value: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px 0px" });
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''));
  const prefix = value.includes('+') ? '+' : '';
  const suffix = value.toUpperCase().includes('K') ? 'K' : '';

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericPart, {
        duration: 1.5,
        ease: "circOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, prefix, suffix]);

  return (
    <span ref={inViewRef} className={className}>
      <motion.span 
        ref={ref}
        className="bg-clip-text text-transparent bg-gradient-to-b from-[#090909] via-[#59c1e6] to-[#090909]"
        style={{ backgroundSize: "100% 200%" }}
        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      >
        {prefix}0{suffix}
      </motion.span>
    </span>
  );
};

const StatisticRow = ({ 
  stat, 
  idx, 
  totalStats, 
  scrollYProgress 
}: { 
  stat: typeof stats[0], 
  idx: number, 
  totalStats: number, 
  scrollYProgress: MotionValue<number> 
}) => {
  const isEven = idx % 2 === 0;
  
  // Determine segment type
  let type: 'start' | 'left' | 'right' = 'left';
  if (idx === 0) type = 'start';
  else if (isEven) type = 'right';
  
  // Calculate local progress for this segment
  const start = idx / totalStats;
  const end = (idx + 1) / totalStats;
  const segmentProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <SnakeSegment 
       key={idx} 
       type={type}
       progress={segmentProgress}
       className="py-16 px-8"
    >
     <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
         <div className="w-full lg:w-1/2 text-left">
            <AnimatedNumber 
              value={stat.number}
              className="text-[100px] md:text-[165px] font-normal leading-none block"
            />
         </div>
         <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl md:text-[26px] text-black">{stat.title}</h3>
            <div className="pl-8 md:pl-12 lg:pl-20">
               <ScrollRevealText 
                  text={stat.description}
                  className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
               />
               <button className="relative pb-2 text-[22px] font-medium border-b border-black hover:opacity-70 transition-opacity">
                  Conoce más
               </button>
            </div>
         </div>
     </div>
    </SnakeSegment>
  );
};

export function Statistics() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <Section className="bg-white">
       <Container ref={containerRef} className="flex flex-col">
          {stats.map((stat, idx) => (
             <div key={idx} className="py-16 border-b border-gray-200 last:border-none">
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                   <div className="w-full lg:w-1/2 text-left">
                      <AnimatedNumber 
                        value={stat.number}
                        className="text-[100px] md:text-[165px] font-normal leading-none block"
                      />
                   </div>
                   <div className="w-full lg:w-1/2 flex flex-col gap-6">
                      <h3 className="text-2xl md:text-[26px] text-black">{stat.title}</h3>
                      <div className="pl-8 md:pl-12 lg:pl-20">
                         <ScrollRevealText 
                            text={stat.description}
                            className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                         />
                         <button className="relative pb-2 text-[22px] font-medium border-b border-black hover:opacity-70 transition-opacity">
                            Conoce más
                         </button>
                      </div>
                   </div>
               </div>
             </div>
          ))}
       </Container>
    </Section>
  );
}
