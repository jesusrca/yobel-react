import React from "react";
import { motion, MotionValue } from "motion/react";
import svgPaths from "../../imports/svg-j9zkv27h5w";
import { YellowGradientButton } from "../ui/yellow-gradient-button";

function IsotipoIcon({ color }: { color: MotionValue<string> }) {
  return (
    <div className="relative w-[41px] h-10 shrink-0">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Vector">
            <motion.path d={svgPaths.p1f4d9200} style={{ fill: color }} id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface PhraseProps {
  text?: string;
  textColor: MotionValue<string>;
  showButton?: boolean;
}

export function Phrase({ 
  text = "Cada década hemos escrito un nuevo capítulo: de la manufactura de productos de cuidado personal a la gestión integral de cadenas de suministro en Latinoamérica. Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN.",
  textColor,
  showButton = true
}: PhraseProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 lg:py-40">
        <motion.div 
          className="flex flex-col items-center gap-8 md:gap-10 text-center"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Icon */}
          <div className="shrink-0">
            <IsotipoIcon color={textColor} />
          </div>
          
          {/* Text */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-[40px] leading-relaxed lg:leading-[1.2] font-['Neue_Augenblick'] font-light max-w-[1100px]"
            style={{ color: textColor }}
          >
            {text}
          </motion.p>

          {/* Button */}
          {showButton && <YellowGradientButton 
            className="mt-4"
            onClick={() => {
              const mapSection = document.querySelector('[data-section="locations"]');
              if (mapSection) {
                mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Nuestras Sedes
          </YellowGradientButton>}
        </motion.div>
      </div>
    </div>
  );
}