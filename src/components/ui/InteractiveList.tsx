"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

export interface InteractiveListItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface InteractiveListProps {
  items: InteractiveListItem[];
  className?: string;
  defaultImage?: string;
  title?: string;
  label?: string;
}

export function InteractiveList({ items, className = "", defaultImage, title, label }: InteractiveListProps) {
  const [activeId, setActiveId] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fallback image logic: use the one provided in props, or the first item's image
  const fallbackImage = defaultImage || (items.length > 0 ? items[0].image : "");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

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

  const wordVariants: any = {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className={`bg-white ${className}`}>
      <Container className="relative min-h-[600px]">
        {(title || label) && (
          <motion.div 
            className="flex flex-col gap-2 items-start mb-12"
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {label && (
              <motion.span 
                className="text-xl text-gray-400 font-medium flex flex-wrap gap-x-[0.25em]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {label.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            )}
            {title && (
              <motion.h3 
                className="text-3xl md:text-4xl font-normal flex flex-wrap gap-x-[0.25em]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {title.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h3>
            )}
          </motion.div>
        )}
        <motion.div 
          className="flex flex-col w-full" 
          onMouseLeave={() => setActiveId("")}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className="relative group border-b border-gray-300 last:border-0 min-h-[100px] md:min-h-0 py-6 md:py-8"
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
            >
              <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0">
                <div className={`flex items-baseline gap-4 text-2xl md:text-4xl w-full md:w-5/12 ${activeId === item.id ? 'text-black' : 'text-gray-400'}`}>
                  <span className="transition-colors duration-500">{item.id} /</span>
                  <span className="font-augenblick transition-all duration-500" style={{ transform: activeId === item.id ? 'scale(1.1)' : 'scale(1)', transformOrigin: 'left center' }}>{item.title}</span>
                </div>
                
                {/* Mobile View Content */}
                <div className="md:hidden w-full">
                    <AnimatePresence>
                    {activeId === item.id && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <p className="text-lg text-gray-600 mb-4 font-augenblick">{item.description}</p>
                            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                                <ImageWithFallback src={item.image} className="w-full h-full object-cover" alt={item.title} />
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>

                {/* Desktop View Content */}
                <div className="hidden md:flex w-full md:w-5/12 justify-end">
                   <div className={`transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                     <p className="text-base text-gray-600 max-w-md text-left font-augenblick">{item.description}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating Image for Desktop - Follows Cursor */}
        <AnimatePresence>
            {activeId && (
                <motion.div 
                    className="hidden lg:block fixed w-[400px] h-[240px] pointer-events-none z-10"
                    style={{ 
                      left: `${mousePosition.x - 200}px`,
                      top: `${mousePosition.y - 120}px`
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                        key={activeId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl"
                        >
                        <ImageWithFallback 
                          src={items.find(i => i.id === activeId)?.image || fallbackImage} 
                          className="w-full h-full object-cover" 
                          alt="Service Preview" 
                        />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
