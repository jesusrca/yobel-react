import React from "react";
import { motion, AnimatePresence, MotionValue } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

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
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 text-center font-['Neue_Augenblick',sans-serif]"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8,  }}
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
          transition={{ duration: 0.9, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveId("")}
        >
          <div className="flex flex-col w-full">
            {categories.map((category, index) => (
              <motion.div 
                key={category.title}
                className="relative group last:border-0 min-h-[100px] md:min-h-0 md:h-[120px]"
                style={{ borderBottom: `1px solid`, borderColor: textColor }}
                onMouseEnter={() => setActiveId(category.title)}
                onClick={() => {
                  // Toggle en mobile, set directo en desktop
                  const isMobile = window.innerWidth < 768;
                  if (isMobile) {
                    setActiveId(activeId === category.title ? "" : category.title);
                  } else {
                    setActiveId(category.title);
                  }
                }}
              >
                <div className="h-full cursor-pointer flex flex-row items-center justify-between gap-4 px-4 md:px-0 py-6 md:py-0">
                  <motion.div 
                    className={`flex items-baseline gap-4 font-['Neue_Augenblick:Regular',sans-serif] text-2xl md:text-4xl leading-[32px] transition-colors duration-500 w-full md:w-5/12`}
                    style={{ 
                      color: activeId === category.title 
                        ? textColor 
                        : "rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span className="text-nowrap whitespace-pre">{String(index + 1).padStart(2, '0')} /</span>
                    <span 
                      className="font-[Neue_Augenblick] transition-transform duration-500 block origin-left"
                      style={{ 
                        transform: activeId === category.title ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      {category.title}
                    </span>
                  </motion.div>
                  
                  {/* Arrow icon for mobile */}
                  <motion.div 
                    className="md:hidden flex-shrink-0"
                    animate={{ 
                      rotate: activeId === category.title ? 180 : 0 
                    }}
                    transition={{ duration: 0.3,  }}
                  >
                    <ChevronDown 
                      size={24} 
                      style={{ 
                        color: activeId === category.title 
                          ? "black" 
                          : "rgba(0, 0, 0, 0.3)"
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Mobile View Content */}
                <div className="md:hidden w-full px-4">
                  <AnimatePresence>
                    {activeId === category.title && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="w-full aspect-video rounded-[30px] overflow-hidden shadow-sm mb-4">
                          <ImageWithFallback src={category.image} className="w-full h-full object-cover" alt={category.title} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

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