import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HistoryHero } from "../../components/company/HistoryHero";
import { HistoryTimeline } from "../../components/company/HistoryTimeline";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Phrase } from "../../components/company/Phrase";
import { LifeAtYobel } from "../../components/company/LifeAtYobel";
import { HistoryImageBlock } from "../../components/company/HistoryImageBlock";

const heroImage = "https://images.unsplash.com/photo-1737301338604-02d40527ac91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYWN0b3J5JTIwMTk2MHMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

const timeline = [
  {
    year: "1967",
    title: "Favel",
    desc: "Iniciamos operaciones como Favel, con la fabricación de cosméticos y cuidado personal."
  },
  {
    year: "1989",
    title: "Larissa",
    desc: "Empezamos nuestra operación logística, lo que marcó nuestra internacionalización en Chile y EE.UU."
  },
  {
    year: "1995",
    title: "Glacesa",
    desc: "Se abre una nueva línea de operación logística especializada en joyería de fantasía."
  },
  {
    year: "2003",
    title: "Grupo Yobel",
    desc: "Nuestras marcas y operaciones se unifican bajo el nombre de Grupo Yobel."
  },
  {
    year: "HOY",
    title: "Yobel",
    desc: "Nos constituimos como una corporación experta en toda la gestión de manejo de suministros y operaciones logísticas"
  }
];

export function History() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Interpolate colors based on scroll progress through entire page
  // Transiciones más lentas aumentando el rango de valores
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.70, 0.78, 0.85, 0.92],
    ["#FFF700", "#FFE300", "#C6D800", "#95D500", "#A7E370", "#00C7CC", "#00BEEB", "#59C1E6", "#000000"]
  );

  // Text color changes to white when background gets dark
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.82, 0.86],
    ["#000000", "#000000", "#FFFFFF"]
  );

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full"
      style={{ backgroundColor }}
    >
      <HistoryHero 
        label="Historia"
        title="Una trayectoria de innovación"
        description="Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN."
      />

      <Phrase textColor={textColor} />

      <HistoryTimeline items={timeline} textColor={textColor} />

      <HistoryImageBlock />

      <LifeAtYobel textColor={textColor} />
    </motion.div>
  );
}