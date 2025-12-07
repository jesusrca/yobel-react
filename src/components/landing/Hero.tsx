import React from "react";
import { motion } from "motion/react";
import { heroContent } from "../../data/hero";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const subtitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.0 // Starts after title finishes roughly
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
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroContent.videoUrl}
          poster={heroContent.posterUrl}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#FFF700] via-[#FFF700]/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-10 md:bottom-28 left-[5%] right-[5%] z-10 max-w-[1340px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-20 text-black">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-[65px] leading-none font-normal max-w-[650px] tracking-tight font-[Neue_Augenblick] flex flex-wrap gap-x-[0.25em]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {heroContent.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block ${word === "movimiento" ? "italic" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-[22px] leading-normal max-w-[600px] mb-2 opacity-90 font-[Neue_Augenblick] flex flex-wrap gap-x-[0.25em]"
            variants={subtitleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {heroContent.subtitle.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </div>
  );
}