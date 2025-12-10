import React from "react";
import { motion } from "motion/react";
import historiaImage from "../../assets/historia-image.webp";
import { imgImage4 } from "../../imports/svg-w7fud";

export function HistoryImageBlock() {
  return (
    <motion.section 
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9,  }}
    >
      <div className="relative w-full h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1019px]">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            maskImage: `url('${imgImage4}')`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            maskPosition: "center center",
            WebkitMaskImage: `url('${imgImage4}')`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center center"
          }}
        >
          <img
            alt="Yobel laboratorio"
            className="w-full h-full object-cover"
            src={historiaImage.src}
          />
        </div>
      </div>
    </motion.section>
  );
}
