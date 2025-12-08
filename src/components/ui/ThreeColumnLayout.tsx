import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface ThreeColumnLayoutProps {
  label: string;
  title: string | ReactNode;
  description: string | ReactNode;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export function ThreeColumnLayout({ 
  label, 
  title, 
  description,
  labelClassName = "shrink-0 w-32 text-lg mt-2",
  titleClassName = "text-4xl md:text-[45px] leading-tight max-w-sm font-[Neue_Augenblick]",
  descriptionClassName = "text-lg leading-relaxed max-w-md opacity-80",
  className = ""
}: ThreeColumnLayoutProps) {
  // Blur fade up animation
  const blurFadeUpVariants: any = {
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
    <div className={`flex flex-col md:flex-row gap-12 md:gap-32 items-start ${className}`}>
      <motion.div 
        className={labelClassName}
        variants={blurFadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-32">
        <motion.h2 
          className={titleClassName}
          variants={blurFadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {typeof description === 'string' ? (
          <motion.p 
            className={descriptionClassName}
            variants={blurFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        ) : (
          <motion.div 
            className={descriptionClassName}
            variants={blurFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {description}
          </motion.div>
        )}
      </div>
    </div>
  );
}
