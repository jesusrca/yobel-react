import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { AnimatedNumber, ScrollRevealTextBlack } from "../ui/motion-text";

export interface StatItem {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

interface StatsListProps {
  stats: StatItem[];
  className?: string;
}

export function StatsList({ stats, className = "" }: StatsListProps) {
  const containerRef = useRef(null);
  
  // Note: The original component had useScroll but didn't seem to use the scrollYProgress 
  // for any animation in the rendered output. Leaving it here in case it's needed for 
  // future animations or if the parent passes a ref.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        
      }
    }
  };

  return (
    <Section className={`bg-white ${className}`}>
       <Container ref={containerRef} className="flex flex-col">
          {stats.map((stat, idx) => (
             <motion.div 
               key={idx} 
               className="py-16 border-b border-gray-200 last:border-none"
               initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
               whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: idx * 0.1 }}
             >
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                   <div className="w-full lg:w-1/2 text-left">
                      <AnimatedNumber 
                        value={stat.number}
                        className="text-[100px] md:text-[165px] font-normal leading-none block"
                      />
                   </div>
                   <div className="w-full lg:w-1/2 flex flex-col gap-6">
                      <h3 className="text-2xl md:text-[26px] text-black font-augenblick font-[Neue_Augenblick]">{stat.title}</h3>
                      <div className="pl-8 md:pl-12 lg:pl-20">
                         <ScrollRevealTextBlack 
                            text={stat.description}
                            className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                         />
                         <button 
                           onClick={stat.onLinkClick}
                           className={`relative pb-2 text-[22px] font-medium border-b border-black hover:opacity-70 transition-opacity font-augenblick ${stat.onLinkClick ? 'cursor-pointer' : 'cursor-default'}`}
                         >
                            {stat.linkText || "Conoce más"}
                         </button>
                      </div>
                   </div>
               </div>
             </motion.div>
          ))}
       </Container>
    </Section>
  );
}