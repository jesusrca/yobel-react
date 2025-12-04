import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { AnimatedNumber, ScrollRevealText } from "../ui/motion-text";
import { StatsList } from "../ui/StatsList";

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
    description: "Especializados en logística y unidos para que cada operación funcione con excelencia."
  },
  {
    number: "+4",
    title: "Principios de Sostenibilidad",
    description: "Guiando nuestras operaciones para generar un impacto positivo en las comunidades y en el planeta."
  }
];

// SnakeSegment component is currently unused in the main render, 
// but keeping it here in case it's needed for future "snake" animations.
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
  // ... (SnakeSegment implementation remains the same)
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  
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

  const r = 40; 
  const o = 0.75; 
  const { w, h } = dimensions;
  
  let d = "";
  if (w > 0 && h > 0) {
      if (type === 'start') {
        d = [
            `M 0 ${o}`,                
            `L ${w-r} ${o}`,           
            `Q ${w-o} ${o} ${w-o} ${r}`, 
            `L ${w-o} ${h-r}`,         
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, 
            `L ${o+r} ${h-o}`,         
            `Q ${o} ${h-o} ${o} ${h}`   
        ].join(' ');
      } else if (type === 'left') {
         d = [
            `M ${o} -1`,               
            `L ${o} ${h-r}`,           
            `Q ${o} ${h-o} ${r} ${h-o}`, 
            `L ${w-r} ${h-o}`,         
            `Q ${w-o} ${h-o} ${w-o} ${h}` 
         ].join(' ');
      } else if (type === 'right') {
         d = [
            `M ${w-o} -1`,             
            `L ${w-o} ${h-r}`,         
            `Q ${w-o} ${h-o} ${w-r} ${h-o}`, 
            `L ${o+r} ${h-o}`,         
            `Q ${o} ${h-o} ${o} ${h}`   
         ].join(' ');
      }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
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

export function Statistics() {
  const navigate = useNavigate();
  
  const statsWithLinks = stats.map((stat, idx) => ({
    ...stat,
    onLinkClick: idx === 0 ? () => navigate('/empresa/historia') : undefined
  }));

  return (
    <StatsList stats={statsWithLinks} />
  );
}