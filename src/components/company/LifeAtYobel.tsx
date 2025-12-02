import React from "react";
import { motion, AnimatePresence, MotionValue } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LifeCategory {
  title: string;
  image: string;
}

const categories: LifeCategory[] = [
  {
    title: "Capacitaciones",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NDY5MDQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Campañas de seguridad",
    image: "https://images.unsplash.com/photo-1575725377705-f7ea2d921d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzYWZldHklMjBjYW1wYWlnbnxlbnwxfHx8fDE3NjQ3MDgwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Voluntariado",
    image: "https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFtJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NDcwODA2NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Celebraciones",
    image: "https://images.unsplash.com/photo-1690192123455-6337e6db4179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjZWxlYnJhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzY0NjU2MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function LifeAtYobel({ textColor }: { textColor: MotionValue<string> }) {
  const [activeId, setActiveId] = React.useState("");

  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 text-center font-['Neue_Augenblick',sans-serif]"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: textColor }}
        >
          Vida en Yobel
        </motion.h2>

        {/* Interactive List */}
        <motion.div 
          className="relative min-h-[600px]"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col w-full" onMouseLeave={() => setActiveId("")}>
            {categories.map((category, index) => (
              <motion.div 
                key={category.title}
                className="relative group last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
                style={{ borderBottom: `1px solid`, borderColor: textColor }}
                onMouseEnter={() => setActiveId(category.title)}
                onClick={() => setActiveId(category.title)}
              >
                <div className="h-full cursor-pointer flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-2 md:gap-4 px-4 md:px-0 py-6 md:py-0">
                  <motion.div 
                    className={`flex items-baseline gap-4 font-['Neue_Augenblick:Regular',sans-serif] text-2xl md:text-4xl leading-[32px] transition-colors duration-500 w-full md:w-5/12`}
                    style={{ 
                      color: activeId === category.title 
                        ? textColor 
                        : "rgba(0, 0, 0, 0.3)" // Gris oscuro para fondo blanco
                    }}
                  >
                    <span className="text-nowrap whitespace-pre">{String(index + 1).padStart(2, '0')} /</span>
                    <span className="font-[Neue_Augenblick]">{category.title}</span>
                  </motion.div>
                  
                  {/* Mobile View Content */}
                  <div className="md:hidden w-full">
                    <AnimatePresence>
                      {activeId === category.title && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="w-full aspect-video rounded-[30px] overflow-hidden shadow-sm">
                            <ImageWithFallback src={category.image} className="w-full h-full object-cover" alt={category.title} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Image for Desktop */}
          <AnimatePresence>
            {activeId && (
              <motion.div 
                className="hidden lg:block absolute top-0 left-[70%] -translate-x-1/2 w-[400px] h-[240px] pointer-events-none transition-transform duration-700 ease-out z-10"
                style={{ 
                  transform: `translateX(-50%) translateY(${((categories.findIndex(c => c.title === activeId)) * 120) - 60}px)` 
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.3 } }}
              >
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full rounded-[30px] overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback 
                      src={categories.find(c => c.title === activeId)?.image || categories[0].image} 
                      className="w-full h-full object-cover" 
                      alt={activeId} 
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}